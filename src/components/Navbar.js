import {Header,Icon} from 'react-native-elements';
import React, { Component } from 'react';

//import Icon from 'react-native-vector-icons/FontAwesome'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';

 const RightComponent=()=>{
  return(
    
      <Text style={{color:'white'}} onPress={()=>firebase.auth().signOut()} >Logout</Text>
     
  )
}

const Navbar=(props)=>{

return(
  <View >

<Header
statusBarProps={{ barStyle: 'light-content' ,backgroundColor:"#3c40c6"}}
containerStyle={{backgroundColor:"#3c40c6",justifyContent:"space-evenly",alignItems:"center",paddingBottom:25,height:60,elevation:2,position:"relative"}}
  leftComponent={<Image source={require('./menu.png')} style={{width:25,height:25}}  />}
  centerComponent={{ text: props.Headername, style: { color: '#fff',fontSize:20 } }}
 rightComponent={<RightComponent/>}
  
/>
 
 
 
</View>
);
}

export default Navbar;