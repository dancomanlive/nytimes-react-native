import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import Navigator from '@src/NavigationRouter';
import {Provider} from 'react-redux';
import store from '@src/redux';
import {QueryClientProvider, QueryClient} from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Navigator />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
