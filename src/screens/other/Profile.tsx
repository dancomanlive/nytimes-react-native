import React, {FunctionComponent} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useMutation} from 'react-query';
import {logout} from '@src/api/mutations/loginMutations';
import {ProfileScreenProps} from '@src/types/NavigationRouterTypes';
import Spinner from '@src/components/shared/Spinner';

const Profile: FunctionComponent = () => {
  // const {mutateAsync, data, isLoading} = useMutation(data => logout());

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button
        title="Logout"
        onPress={() => {
          // mutateAsync();
        }}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  loginContainer: {
    width: '80%',
  },
});
