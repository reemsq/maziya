import React from 'react'
import { Text, View, Button, Image, Dimensions } from 'react-native'
import {firebase, auth } from '../config/firebase'

// add bottom navigation 
// drawer navigation 
const serviceProvider =({ navigation}) => {
    return(
        <View style={ { flex:1, alignItems: "center", justifyContent: "center"}}>
          
          
            <Text>Service Provider page </Text>
            
      
        </View>


    
    );

    
};



export default serviceProvider;