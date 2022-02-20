import React, {FunctionComponent} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Theme from '@src/styles/Theme';

interface MetaViewProps {
  children: React.ReactNode;
}

const MetaView: FunctionComponent<MetaViewProps> = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default MetaView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.WHITE,
  },
});
