import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Card=(props)=>{
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}
 const styles=StyleSheet.create({
     containerStyle:{
         borderWidth:1,
         borderRadius:2,
         borderColor:"#ddd",
        borderBottomWidth:0,
        elevation:2,
        position:"relative",
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowRadius:2,
        shadowOffset:{height:2},
        marginLeft:5,
        marginRight:5,
        marginBottom:5,
        marginTop:10
     }
 })

export default Card;