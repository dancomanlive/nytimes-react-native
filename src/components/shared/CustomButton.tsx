import React, {FunctionComponent} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Theme from '@src/styles/Theme';

type Props = {
  text: string;
  onPress(): void;
};

const Button: FunctionComponent<Props> = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnContainerStyle}>
        <Text style={styles.btnTextStyle}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainerStyle: {
    backgroundColor: Theme.BLUE_COLOR[400],
    paddingVertical: 14,
    borderRadius: 8,
  },
  btnTextStyle: {
    color: 'white',
    fontSize: 16,
    // textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default Button;
