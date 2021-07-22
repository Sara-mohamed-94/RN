
import React, { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View , Image } from 'react-native';


// import 'react-native-gesture-handler';

import App from '../../../App' ;

const Home= ()=>
{
    const [images, setimages] = useState([
  
        { src:require('../../assets/images/1.jpg')} ,
        { src:require('../../assets/images/2.jpg')}  ,
        { src :require('../../assets/images/3.jpg')} ,
        { src :require('../../assets/images/4.jpg')} ,
        { src:require('../../assets/images/1.jpg')} ,
        { src:require('../../assets/images/2.jpg')}  ,
        { src :require('../../assets/images/3.jpg')} ,
        { src :require('../../assets/images/4.jpg')} ,

    ]);

    
   return(
       <SafeAreaView>

       <View>
              <Text style={{textAlign:'center'}}>Home Page</Text>
              <ScrollView>
           <FlatList
        // horizontal={true} 
         showsHorizontalScrollIndicator={false} 
         data={images}
         renderItem={ ({ item, index }) => (
        <Image source={item.src} /* Use item to set the image source */
         key={index} /* Important to set a key for list items,
                       but it's wrong to use indexes as keys, see below */
        style={{
          width:220,
          height:300,
          borderWidth:2,
        //   borderColor:'#d35647',
          resizeMode:'contain',
          margin:8
        }}
      />
    )}
  />

              </ScrollView>
            


          
     </View>
     </SafeAreaView>
   )
}

export default Home