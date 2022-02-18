import React, {FunctionComponent, useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useMutation} from 'react-query';
import {LoginRoute} from '@src/constants/Routes';
import {LoginScreenProps} from '@src/types/NavigationRouterTypes';
import CustomButton from '@src/components/shared/CustomButton';
import Theme from '@src/styles/Theme';
import {login} from '@src/api/mutations/loginMutations';
import {LoginSchema} from '@src/screens/login/validations';
import {Formik} from 'formik';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Spinner from '@src/components/shared/Spinner';
import WrapView from '@src/components/shared/WrapView';

const LoginScreen: FunctionComponent<LoginScreenProps> = ({navigation}) => {
  const [credentials, setCredentials] = useState({email: '', password: ''});
  const [showPassword, setShowPassword] = useState(false);

  const {mutateAsync, data, isLoading} = useMutation(data => login(data));

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <WrapView>
      <View style={styles.innerContainer}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => {
            mutateAsync(values);
            setCredentials(values);
          }}
          validationSchema={LoginSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
          }) => (
            <>
              <View>
                <Text style={styles.emailText}>{'E-mail'}</Text>
                <TextInput
                  style={styles.emailInput}
                  onChangeText={email => {
                    setFieldValue('email', email);
                  }}
                  value={values?.email}
                  //@ts-ignore
                  placeholder={'Fill in your email address'}
                  underlineColorAndroid="transparent"
                  autoCorrect={false}
                  autoCapitalize="none"
                />
                {errors.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}
              </View>

              <View style={styles.passwordContainer}>
                <Text style={styles.passwordText}>{'Password'}</Text>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    style={styles.passwordInput}
                    onChangeText={password => {
                      setFieldValue('password', password);
                    }}
                    value={values?.password}
                    placeholder={'Fill in your password'}
                    underlineColorAndroid="transparent"
                    autoCorrect={false}
                    autoCapitalize="none"
                    secureTextEntry={!showPassword}
                  />
                  {values.password !== '' && (
                    <Text
                      style={{right: 30}}
                      onPress={() => setShowPassword(!showPassword)}>
                      <AntDesign
                        name={showPassword ? 'eyeo' : 'eye'}
                        size={24}
                        color="black"
                      />
                    </Text>
                  )}
                </View>
                {errors.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}
              </View>

              <View style={styles.buttonContainer}>
                <CustomButton text={'Log in'} onPress={() => handleSubmit()} />
              </View>

              <Text
                style={styles.forgotPassword}
                onPress={() => navigation.navigate(LoginRoute.FORGOT_PASSWORD)}>
                {' '}
                {'Forgot password'}
              </Text>
            </>
          )}
        </Formik>
      </View>
    </WrapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  innerContainer: {
    width: '80%',
  },
  logoBig: {
    paddingTop: '35%',
  },
  logoSmall: {
    paddingTop: '15%',
  },
  emailText: {
    fontSize: 19,
  },
  emailInput: {
    height: 40,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: Theme.GRAY_COLOR[200],
    fontSize: 15,
  },
  passwordContainer: {
    paddingTop: '10%',
  },
  passwordText: {
    fontSize: 19,
  },
  passwordInput: {
    height: 40,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: Theme.GRAY_COLOR[200],
  },
  forgotPassword: {
    color: 'gray',
    alignSelf: 'center',
    paddingTop: '5%',
  },
  buttonContainer: {
    paddingTop: '10%',
  },
  error: {
    color: 'red',
    paddingTop: '2%',
  },
});

export default LoginScreen;
