import React, {FunctionComponent} from 'react';
import {Text, Button} from 'react-native';
import {FifthScreenProps} from '@src/types/NavigationRouterTypes';
import WrapView from '@src/components/shared/WrapView';
import {AppRoute} from '@src/constants/Routes';

const Fifth: FunctionComponent<FifthScreenProps> = ({navigation}) => {
  return (
    <WrapView>
      <Text>FifthScreen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate(AppRoute.PROFILE)}
      />
    </WrapView>
  );
};

export default Fifth;
