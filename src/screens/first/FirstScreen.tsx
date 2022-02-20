import React, {FunctionComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useQuery} from 'react-query';
import WrapView from '@src/components/shared/WrapView';
import {fetchBestSellerCategories} from '@src/api/queries/fetchBestSellerCategories';
import {FirstScreenProps} from '@src/types/NavigationRouterTypes';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {AppRoute} from '@src/constants/Routes';
import Theme from '@src/styles/Theme';
import {Category} from '@src/api/queries/fetchBestSellerCategories';

const FirstScreen: FunctionComponent<FirstScreenProps> = ({navigation}) => {
  const {data, error, isLoading} = useQuery(
    'fetchBestSellersCategories',
    fetchBestSellerCategories,
  );

  if (error) {
    console.log('error', error);
  }

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={Theme.GREEN_COLOR[700]} />
      </View>
    );
  }

  const CategoryListItem = ({item}: ListRenderItemInfo<Category>) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(AppRoute.LIST, {item})}
        style={styles.item}>
        <Text style={styles.title}>{item?.display_name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <WrapView>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Select a bestseller category</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={data}
        renderItem={CategoryListItem}
        keyExtractor={item => item?.list_name_encoded}
      />
    </WrapView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Theme.GREEN_COLOR[600],
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
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
});

export default FirstScreen;
