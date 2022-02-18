import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import Navigator from '@src/NavigationRouter';
import {QueryClientProvider, QueryClient} from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 3000);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
    </QueryClientProvider>
  );
};

export default App;
