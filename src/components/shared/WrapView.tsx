import React, {FunctionComponent} from 'react';
import {View, StyleSheet} from 'react-native';

interface MetaViewProps {
  children: React.ReactNode;
}

const MetaView: FunctionComponent<MetaViewProps> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default MetaView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
