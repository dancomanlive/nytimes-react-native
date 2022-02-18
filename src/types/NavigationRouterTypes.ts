import {StackNavigationProp} from '@react-navigation/stack';
import {AppRoute, LoginRoute} from '@src/constants/Routes';

export type TabStackParamList = {
  FirstTab: undefined;
  SecondTab: undefined;
  ThirdTab: undefined;
  FourthTab: undefined;
  FifthTab: undefined;
};

// FIRST
export type FirstStackParamList = {
  [AppRoute.FIRST]: undefined;
};

type FirstScreenNavigationProp = StackNavigationProp<
  FirstStackParamList,
  AppRoute.FIRST
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
  [AppRoute.PROFILE]: undefined;
};

type FifthScreenNavigationProp = StackNavigationProp<
  FifthStackParamList,
  AppRoute.PROFILE
>;

export type FifthScreenProps = {
  navigation: FifthScreenNavigationProp;
};

//LOGIN
export type LoginStackParamList = {
  [LoginRoute.LOGIN]: undefined;
  [LoginRoute.FORGOT_PASSWORD]: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<
  LoginStackParamList,
  LoginRoute.LOGIN
>;

export type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
};

// FORGOT PASSWORD
export type ForgotPasswordStackParamList = {
  [LoginRoute.LOGIN]: undefined;
  [LoginRoute.FORGOT_PASSWORD]: undefined;
};

type ForgotPasswordScreenNavigationProp = StackNavigationProp<
  ForgotPasswordStackParamList,
  LoginRoute.FORGOT_PASSWORD
>;

export type ForgotPasswordScreenProps = {
  navigation: ForgotPasswordScreenNavigationProp;
};

// PROFILE
export type ProfileStackParamList = {
  [AppRoute.PROFILE]: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  AppRoute.PROFILE
>;

export type ProfileScreenProps = {
  navigation: ProfileScreenNavigationProp;
};
