import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Image,
  Linking,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
import WrapView from '@src/components/shared/WrapView';
import {Book} from '@src/api/queries/fetchBestSellers';
import Theme from '@src/styles/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useReduxDispatch, useReduxSelector} from '@src/redux';
import {removeFavorites} from '@src/redux/favorites';
import Modal from 'react-native-modal';

const SecondScreen: FunctionComponent = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Book | null>(null);
  const value = useReduxSelector(state => state.favorites);
  console.log("VALUE", value);
  const dispatch = useReduxDispatch();

  useEffect(() => {
    Ionicons.loadFont();
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  if (value?.length === 0) {
    return (
      <WrapView>
        <View style={styles.emptyList}>
          <Text>No favorites</Text>
        </View>
      </WrapView>
    );
  }

  const onSelect = (item: Book) => {
    setSelectedItem(item);
    toggleModal();
  };

  const ModalContent = () => {
    return (
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitleText}>{selectedItem?.title}</Text>
        <Image
          source={{uri: selectedItem?.book_image}}
          style={{
            width: selectedItem?.book_image_width,
            height: selectedItem?.book_image_height,
          }}
        />
        <Text style={styles.descriptionText}>{selectedItem?.description}</Text>
        <Text
          onPress={() =>
            Linking.openURL(selectedItem?.amazon_product_url || '')
          }
          style={styles.amazonLink}>
          Amazon book link
        </Text>
        <Button title="Hide modal" onPress={toggleModal} />
      </View>
    );
  };

  const BookItem = ({item}: ListRenderItemInfo<Book>) => {
    return (
      <TouchableOpacity onPress={() => onSelect(item)} style={styles.item}>
        <Text style={styles.title}>{item?.title}</Text>
        <TouchableOpacity onPress={() => dispatch(removeFavorites(item))}>
          <Ionicons name={'bookmark'} size={25} color={'orange'} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <WrapView>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Favorites</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={value}
        renderItem={BookItem}
        keyExtractor={item => item?.title}
      />
      <Modal isVisible={isModalVisible} backdropOpacity={0.9}>
        <ModalContent />
      </Modal>
    </WrapView>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  modalTitleText: {
    color: 'white',
    fontWeight: 'bold',
  },
  descriptionText: {
    color: 'white',
    textAlign: 'center',
  },
  amazonLink: {
    color: 'orange',
    textDecorationLine: 'underline',
  },
  item: {
    backgroundColor: Theme.GREEN_COLOR[700],
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: Theme.WHITE,
    fontSize: 20,
  },
  textContainer: {
    paddingTop: 50,
    paddingBottom: 20,
    left: '5%',
  },
  text: {
    fontWeight: 'bold',
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
