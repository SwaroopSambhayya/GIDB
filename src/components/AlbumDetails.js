import React from 'react';
import {View, ScrollView,Text,Image, TouchableHighlight,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
//import {Card} from 'react-native-elements';
import{Button} from 'native-base';
//import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
const AlbumDetails=(props)=>{   
  
  
  return(
        
        <Card>
            <CardSection>
              <View style={styles.ThumbnailContainerStyle}>
              <Image source={{uri: props.album.thumbnail_image}} style={styles.ThumbnailStyle} />
              </View>
              <View style={styles.headerStyle}>
<Text style={styles.headerTextStyle}>{props.album.title}</Text>
<Text>{props.album.artist}</Text>
</View>
</CardSection>
<CardSection>
  <Image source={{uri:props.album.image}}  style={styles.imageStyle}  />
</CardSection>
<CardSection>
<TouchableHighlight onPress={()=>Linking.openURL(props.album.url)} underlayColor="white"  style={styles.ButtonStyle1} ><Text style={{color:"rgb(60,64,198)",fontSize:18}}>Buy Now</Text></TouchableHighlight>
<TouchableHighlight onPress={()=>alert("Hello")} underlayColor="white"  style={styles.ButtonStyle2} ><Text style={{color:"rgba(194, 54, 22,1.0)",fontSize:18,opacity:1}}>Add to Cart</Text></TouchableHighlight>
</CardSection>
            </Card>
        /* <CardItem>
          <Left>
            <Thumbnail source={{uri: props.album.thumbnail_image}} />
            <Body>
    <Text>{props.album.artist}</Text>
    <Text note>{props.album.title}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: props.album.image}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem> */
      
      
    );
}
const styles={
  headerStyle:{
    flexDirection:"column",
    justifyContent:"space-around"
  },
  ThumbnailStyle:{
    width:50,
    height:50
  },
  ThumbnailContainerStyle:{
    justifyContent:"center",
    alignItems:"center",
    marginLeft:10,
    marginRight:10
  },
  headerTextStyle:{
    fontSize:18
  },
  imageStyle:{
    height:300,
    flex:1,
    width:null,
  },
  ButtonStyle1:{
    height:40,
    flex:1,
    width:null,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:5,
    marginRight:5, 
    borderWidth:1.2,
    borderRadius:5,
    backgroundColor:"rgba(60,64,198,0.2)",
    borderColor:"#3c40c6",
    
  
  },
  ButtonStyle2:{
    height:40,
    flex:1,
    width:null,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:5,
    marginRight:5, 
    borderWidth:1.2,
    borderRadius:5,
    backgroundColor:"rgba(232, 67, 147,0.2)",
    borderColor:"#c23616",
    
    
  
  },

  ButtonAlignment:{
   
    
  }
}
export default AlbumDetails;