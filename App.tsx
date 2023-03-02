/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RNMonnify from '@monnify/react-native-sdk';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  RNMonnify.initialize({
    apiKey: 'MK_TEST_VR7J3UAACH',
    contractCode: '4876165459',
    applicationMode: 'TEST',
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Button
          title="Click Me"
          onPress={() => {
            RNMonnify.initializePayment({
              amount: 1200.5,
              customerName: 'Tobi Adeyemi',
              customerEmail: 'tobiadeyemi@gmail.com',
              paymentReference: '222',
              paymentDescription: 'Foodies',
              currencyCode: 'NGN',
              incomeSplitConfig: [],
            })
              .then(response => {
                console.log(response); // card charged successfully, get reference here
              })
              .catch(error => {
                console.log(error); // error is a javascript Error object
                console.log(error.message);
                console.log(error.code);
              })
          }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
