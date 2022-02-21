import {StackNavigationProp} from '@react-navigation/stack';
import {AppRoute, LoginRoute} from '@src/constants/Routes';
import {Category} from '@src/api/queries/fetchBestSellerCategories';

export type TabStackParamList = {
  FirstTab: undefined;
  SecondTab: undefined;
  ThirdTab: undefined;
  FourthTab: undefined;
  FifthTab: undefined;
};

// FIRST
interface AppRouteParamsList {
  item: Category;
}
export type FirstStackParamList = {
  [AppRoute.FIRST]: undefined;
  [AppRoute.LIST]: AppRouteParamsList;
};

type FirstScreenNavigationProp = StackNavigationProp<
  FirstStackParamList,
  AppRoute.LIST
>;

export type FirstScreenProps = {
  navigation: FirstScreenNavigationProp;
};

// SECOND
export type SecondStackParamList = {
  [AppRoute.SECOND]: undefined;
};

type SecondScreenNavigationProp = StackNavigationProp<
  SecondStackParamList,
  AppRoute.SECOND
>;

export type RosterScreenProps = {
  navigation: SecondScreenNavigationProp;
};

// THIRD
export type ThirdStackParamList = {
  [AppRoute.THIRD]: undefined;
};

type ThirdScreenNavigationProp = StackNavigationProp<
  ThirdStackParamList,
  AppRoute.THIRD
>;

export type ThirdScreenProps = {
  navigation: ThirdScreenNavigationProp;
};

// FOURTH
export type FourthStackParamList = {
  [AppRoute.FOURTH]: undefined;
};

type FourthScreenNavigationProp = StackNavigationProp<
  FourthStackParamList,
  AppRoute.FOURTH
>;

export type FourthScreenProps = {
  navigation: FourthScreenNavigationProp;
};

// FIFTH
export type FifthStackParamList = {
  [AppRoute.FIFTH]: undefined;
};

type FifthScreenNavigationProp = StackNavigationProp<
  FifthStackParamList,
  AppRoute.FIFTH
>;

export type FifthScreenProps = {
  navigation: FifthScreenNavigationProp;
};

//LOGIN
export type LoginStackParamList = {
  [LoginRoute.LOGIN]: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<
  LoginStackParamList,
  LoginRoute.LOGIN
>;

export type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
};
