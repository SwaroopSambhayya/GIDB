import {View,Text,ScrollView,TextInput,Dimensions} from 'react-native';
import React,{ Component } from 'react';
import Card from '../components/Card'
import CardSection from '../components/CardSection';
import firebase from 'firebase';
import { Title,Button,Input, Item, Label,Spinner } from 'native-base';
//import { TextInput } from 'react-native-gesture-handler';
const {width,height}=Dimensions.get('screen');
export default class Login extends Component{

        constructor(props){
            super(props);
            this.state={
                email:'',
                password:'',
                error:'',
                loading:false
        }
    }
        authenticate=()=>{
            this.setState({loading:true,error:''});
            const {email,password}=this.state;
                    
                

            firebase.auth().signInWithEmailAndPassword(email,password).then( this.onLoginSuccess.bind(this) )
            .catch(()=>{
                 firebase.auth().createUserWithEmailAndPassword(email,password).then(this.onLoginSuccess.bind(this)).catch(
                     ()=>{
                             this.setState({error:'Please enter a valid email or password',loading:false})
                     }
                 )
            })       

        }
          
        onLoginSuccess=()=>{
            this.setState({
                loading:false,
                error:'',
                email:'',
                password:''
            })
        }

        renderButton(){
            if(this.state.loading){
                return(
                    <Spinner style={{flex:1,justifyContent:'center'}} color="blue" />
                )
                
            }
            else{
                return(
                    <Button style={{flex:1,justifyContent:"center",margin:10}}  success onPress={this.authenticate.bind(this)}>
                    <Text style={{color:'white',fontSize:18}}>Login</Text>
                    </Button>
                )
            }
        }

    render(){
        return(
              <ScrollView > 
                  <View style={{marginTop:55}}> 
                <Card >
                    <CardSection >
                        <View style={{flex:1,justifyContent:"center"}} >
                        <Title style={{color:'black'}}>Login</Title>
                        </View>
                    
                    </CardSection>
                    <CardSection >
                       
                        <View style={{flex:1,justifyContent:'center',flexDirection:'column',alignItems:'center',margin:10}} >
                        <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row'}} >
                        <Text style={{flex:1}} >Email</Text>
                        <TextInput style={{borderBottomColor:'#3498db',borderBottomWidth:1,flex:3,margin:10}} placeholder="user@gmail.com"
                        value={this.state.email}
                        onChangeText={text=>this.setState({email:text})}
                        />
                        </View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row'}} >
                        <Text style={{marginTop:10,flex:1}}>Password</Text>
                        <TextInput placeholder="******" style={{borderBottomColor:'#3498db',borderBottomWidth:1,margin:10,flex:3}} 
                            secureTextEntry
                            value={this.state.password}
                            onChangeText={text=>this.setState({password:text})}
                        />
                        </View>
                    </View>
                    </CardSection>
                    <CardSection>
                   <Text style={{color:'red',fontSize:16,alignSelf:'center'}}>
                       {this.state.error}
                   </Text>
                   </CardSection>
                    <CardSection>
                        {this.renderButton()}
                      
                    </CardSection>
                </Card>
                </View>
                </ScrollView>
        )
    }
}