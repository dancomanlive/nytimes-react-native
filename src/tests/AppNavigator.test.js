import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, fireEvent} from '@testing-library/react-native';

import AppNavigator from '../AppNavigator';

describe('Testing react navigation', () => {
  test('page contains the header and 10 items', async () => {
    const component = (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

    const {findByText} = render(component);

    const header = await findByText('Select a bestseller category');
    expect(header).toBeTruthy();
  });
});
