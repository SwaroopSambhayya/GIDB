import React from  'react';
import {Button} from 'native-base';
import {View,Text} from 'react-native';

const Touchable=()=>{
    return(
      <>
        <View style={styles.ButtonAlignment}>
            
        </View>
        </>
    );
}

const styles={
    ButtonStyle:{
        height:60,
        flex:1,
        width:null,
        justifyContent:"center",
        alignItems:"center",
       
        
      },
      ButtonAlignment:{
        marginLeft:5,
        marginRight:5,
        borderWidth:1
      }
}

export default Touchable;