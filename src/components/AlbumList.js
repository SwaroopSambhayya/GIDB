import React, { Component } from 'react';
import {Text,View,Image,ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';
class  AlbumList extends Component{

    state={albums:[]}
    componentDidMount(){
        //console.log("Album list mounted");
        const CancelToken = axios.CancelToken;
const source = CancelToken.source();
        axios.get("https://rallycoding.herokuapp.com/api/music_albums",{
            cancelToken: source.token
          }).then(response=>this.setState({albums:response.data}));
    }

    componentWillUnmount(){

    }

renderAlbums(){
return(
this.state.albums.map(album=><AlbumDetails key={album.title} album={album}/>)
)
}
 
    render(){
        console.log(this.state);
    return(
        <ScrollView style={{backgroundColor:"#ecf0f1"}} >
            {this.renderAlbums()}
        </ScrollView>
    );
    }
}
export default AlbumList;