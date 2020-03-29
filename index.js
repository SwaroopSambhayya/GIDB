/**
 * @format
 */

import {AppRegistry,View} from 'react-native';
//import Header from './src/components/Header';
import App from './App';
import React from 'react';
import {name as appName} from './app.json';
// const App=()=>{
//     return(
//         <View style={{flex:1,flexDirection:"row"}}>
//       <Header ></Header>
//       </View>
//     ) 
//     }

AppRegistry.registerComponent(appName, () => App);
