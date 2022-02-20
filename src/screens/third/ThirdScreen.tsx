import React, {FunctionComponent} from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';
import WrapView from '@src/components/shared/WrapView';
import Theme from '@src/styles/Theme';

const Third: FunctionComponent = () => {
  return (
    <WrapView>
      <View style={styles.container}>
        {/* <Text>ThirdScreen</Text> */}
        <Button title="Log Out" onPress={() => console.log('logOut')} />
      </View>
    </WrapView>
  );
};

export default Third;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.WHITE,
  },
});
