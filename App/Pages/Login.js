import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Colors from '../Shared/Colors';
import { AntDesign } from '@expo/vector-icons';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View >
        <Image source={require('./../Assets/Images/login.png')} />
          <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome To CodeLearn</Text>
            <Text style={{textAlign:'center',marginTop:80,fontSize:15}}>Login/SignUp</Text>
          </View>
          <Pressable onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          {
            opacity: pressed ? 0.5 : 1, // Apply opacity effect when pressed
          },
        ]}
      >

          <AntDesign name="google" size={24} color="white" style={{marginRight:10}}/>
            <Text style={{color:Colors.white}}>Sign In with Google</Text>
          </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container:
  {
    paddingTop:40,
    marginTop:-20,
    backgroundColor:'#fff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
  },
  welcomeText:
  {fontSize:25,
    textAlign:'center',
    fontWeight:'bold',
  },
  button:
  {
    backgroundColor:Colors.primary,
    padding:10,
    borderRadius:10,
    margin:30,
    justifyContent:'center',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:20
  }
})