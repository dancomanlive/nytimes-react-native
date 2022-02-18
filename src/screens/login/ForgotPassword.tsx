import React, {FunctionComponent} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {ForgotPasswordScreenProps} from '@src/types/NavigationRouterTypes';
import CustomButton from '@src/components/shared/CustomButton';
import {useMutation} from 'react-query';
import {forgot} from '@src/api/mutations/loginMutations';
import {ForgotPasswordSchema} from '@src/screens/login/validations';
import Theme from '@src/styles/Theme';
import {Formik} from 'formik';
import WrapView from '@src/components/shared/WrapView';

const LoginScreen: FunctionComponent<ForgotPasswordScreenProps> = ({
  navigation,
}) => {
  const {mutateAsync, data, error} = useMutation(data => forgot(data));

  return (
    <WrapView>
      <View style={styles.innerContainer}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => mutateAsync(values)}
          validationSchema={ForgotPasswordSchema}>
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
                  placeholder={'Fill in your email address'}
                  autoCapitalize="none"
                />
                {errors.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}
              </View>
              <View style={styles.buttonContainer}>
                <CustomButton
                  text={'Reset password'}
                  onPress={() => handleSubmit()}
                />
              </View>
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
    paddingBottom: '5%',
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
  error: {
    color: 'red',
    paddingTop: '2%',
  },
  buttonContainer: {
    paddingTop: '40%',
  },
});

export default LoginScreen;
