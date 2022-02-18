import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Draft: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Draft</Text>
    </View>
  );
};

export default Draft;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loginContainer: {
    width: '80%',
  },
});
