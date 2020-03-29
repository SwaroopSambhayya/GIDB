import {View,Text,ScrollView} from 'react-native';
import React,{ Component } from 'react';
import Card from '../components/Card'
import CardSection from '../components/CardSection';
//import { ScrollView } from 'react-native-gesture-handler';
import { Title } from 'native-base';
import firebase from 'firebase';
import Login from '../components/Login';
export default class Auth extends Component{

        constructor(props){
            super(props);
           
        }

   
     
    render(){
        return(
            
            <ScrollView contentContainerStyle={{flex:1,justifyContent:'center'}} >
                <Login/>
            </ScrollView>
            
        )
    }
}