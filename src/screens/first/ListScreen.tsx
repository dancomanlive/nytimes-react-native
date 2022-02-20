import React, {FunctionComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  ListRenderItemInfo,
} from 'react-native';
import {useQuery} from 'react-query';
import WrapView from '@src/components/shared/WrapView';
import {Category} from '@src/api/queries/fetchBestSellerCategories';
import {Book} from '@src/api/queries/fetchBestSellers';
import {fetchBestSellers} from '@src/api/queries/fetchBestSellers';
import Theme from '@src/styles/Theme';

interface ListScreenRoutePops {
  route: Route;
}

interface Route {
  params: Item;
}

interface Item {
  item: Category;
}

const ListScreen: FunctionComponent<ListScreenRoutePops> = ({route}) => {
  const navigationParams = route?.params?.item;

  const {data, error, isLoading} = useQuery('fetchBestSellers', () =>
    fetchBestSellers(navigationParams?.list_name_encoded),
  );

  if (error) {
    console.log('error', error);
  }

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const BookItem = ({item}: ListRenderItemInfo<Book>) => {
    return (
      <TouchableOpacity onPress={() => null} style={styles.item}>
        <Text style={styles.title}>{item?.author}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <WrapView>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{navigationParams.display_name}</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={data}
        renderItem={BookItem}
        keyExtractor={item => item?.title}
      />
    </WrapView>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Theme.GREEN_COLOR[700],
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    color: Theme.WHITE,
    fontSize: 20,
  },
  textContainer: {
    paddingTop: 20,
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
});
