import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Pages/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import TabNavigation from './App/Navigation/TabNavigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });
  return (
    <ClerkProvider publishableKey={"pk_test_d2FybS13b2xmLTM3LmNsZXJrLmFjY291bnRzLmRldiQ"}>
    <View style={styles.container}>
    <SignedIn>
      <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer>
    </SignedIn>
    <SignedOut>
      <Login/>
    </SignedOut>
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:20
  },
});
