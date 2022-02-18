import React, {FunctionComponent} from 'react';
import {ActivityIndicator} from 'react-native';
import Theme from '@src/styles/Theme';
import WrapView from '@src/components/shared/WrapView';

const Spinner: FunctionComponent = () => {
  return (
    <WrapView>
      <ActivityIndicator size="large" color={Theme.BLUE_COLOR[400]} />
    </WrapView>
  );
};

export default Spinner;
