/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//import {Header,Left,Body,Title,Right} from 'native-base';
import Navbar from './src/components/Navbar';
import AlbumList from './src/components/AlbumList';
import React, { Component } from 'react';
import Auth from './src/Screens/Auth'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import firebase from 'firebase';
import { Spinner } from 'native-base';


export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      loggedIn:null
    }
  }
 
  UNSAFE_componentWillMount(){

    firebase.initializeApp({
      apiKey: "AIzaSyCy70q27TXyIkZMooTPMEmJay5AXMltY6o",
      authDomain: "authentication-84334.firebaseapp.com",
      databaseURL: "https://authentication-84334.firebaseio.com",
      projectId: "authentication-84334",
      storageBucket: "authentication-84334.appspot.com",
      messagingSenderId: "247164660095",
      appId: "1:247164660095:web:16ffe2a6ce54ba2677524a",
      measurementId: "G-JC0TM0R4ER"
    });

firebase.auth().onAuthStateChanged((user)=>{

    if(user){
        this.setState({loggedIn:true})
    }
    else{
        this.setState({loggedIn:false})
    }

});
    }

    renderComponent(){
    switch(this.state.loggedIn){
      case true: return (
       <>
        <Navbar Headername="Albums" />
        <AlbumList/>
        </>
      )
      case false:return <Auth/>
      default: return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
      <Spinner   color="blue" />
      </View>
      )
    }
    }


  render(){
    return(
      <View style={{flex:1}} >
      {this.renderComponent()}
      </View>
    )
}
}

