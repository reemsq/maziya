import React, { Component } from 'react'
import { Text, View, Button, Image, Dimensions } from 'react-native'
import {firebase, auth } from '../config/firebase'

export default class Favorite extends Component{

render(){
    return(
        <View style={ { flex:1, alignItems: "center", justifyContent: "center" , backgroundColor:'white'}}>
          <Text >favorite</Text>
          
         
        </View>


    
    );
}

}