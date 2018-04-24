
import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



// Using Text
//
// Styling text in React Native can get
// very expressive.
//
// Hints:
// - Text can go inside parent Texts
// - https://facebook.github.io/react-native/docs/text.html
// - http://iosfonts.com/
//

const UsingText= (props)=>{
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 100, fontFamily: 'AmericanTypewriter'}}>Using</Text>
      <Text style={{fontSize: 100, fontFamily: 'Baskerville', letterSpacing: -20, fontStyle: 'italic', color: 'white'}}>T
        <Text style={{fontSize: 60, letterSpacing: 0}}>ext</Text>
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: colors[1],
  },
});





UsingText.displayName = 'UsingText'
export default UsingText
