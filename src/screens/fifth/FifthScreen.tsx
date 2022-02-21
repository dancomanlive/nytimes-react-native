import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';
import {FifthScreenProps} from '@src/types/NavigationRouterTypes';
import WrapView from '@src/components/shared/WrapView';

const Fifth: FunctionComponent<FifthScreenProps> = () => {
  return (
    <WrapView>
      <Text>FifthScreen</Text>
    </WrapView>
  );
};

export default Fifth;
