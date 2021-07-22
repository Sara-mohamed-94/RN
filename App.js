import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, 
  Text, View ,Image ,
  ImageBackground ,TextInput ,
  TouchableOpacity, Alert, Button
   , ScrollView, FlatList, 
   SafeAreaView } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import { Platform } from 'react-native';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native' ;
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 import Home from './src/screen/Home/index'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Login =({navigation})=>{
    // Modal
    // const [IsVisible, setIsVisible] = useState(false);
    // const modalButton =()=>{ setIsVisible(!IsVisible) }
    ///////////////////////////////////////flatList
  // flatList 
    // const data=[{id:1 ,title:"first item"} , {id:2 ,title:"second item"} , {id:3 ,title:"third item"} ] ;
    // const Item =({title})=>(
    //   <View>
    //     <Text>{title}</Text>
    //   </View>
    // );
    // const renderitem=({item})=> <Item title={item.title}/>
    /////////////////////////////////////////////////////////////////////
    /////////////handle Sunmit 
  
    const {num , onchangePass} = useState('');
    // valid
    const validatePhoneNumber = ( PhoneNumber )=> {
       if( PhoneNumber.length !== 11 ){
       return false;
           }
   
   //  return /^[0-9]+$/.test(enteredPhoneNumber);
    return  Array.from(PhoneNumber).every( char => {char >= 0 && char <= 9} ) ;
   }
    //handlephonenum
  const handlesubmit = ()=>{
    if (!validatePhoneNumber(num) )
    {
      alert('Wronge Number')
      return
    }
    alert('Successfuly Number: ' + num)
       
       
    // alert('sara') ;
  }
  
  ////////////////////////////////////////
    return(
     
      <View style={{flex:1}}>
        
    <ImageBackground source={require('./src/assets/images/3.jpg')} resizeMode="cover" style={{flex:1,justifyContent:"center"}} >
      
            <View style={{flex:.6 , flexDirection:"row" , }}>
          <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <Text style={styles.lt }> &lt; </Text> 
          </TouchableOpacity>
      
      <Text style={styles.insta}>
      {/* <Text style={ styles.lt}>&lt;</Text>  */}
        Sign Up</Text>
      </View> 
       
      <Text style={{color:'gray' ,marginLeft:35 , marginBottom:7}}>Sign Up with of the following options </Text>
      <View style={{flex:.4 , flexDirection:"row" ,paddingLeft:"10%"  }}>
  
      <TouchableOpacity style={styles.btn } >
           
      <AntDesign name="google" size={24} color="black"  style={{ color: "white",
     textAlign:"center" ,}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} >
         
     <AntDesign name="apple1" size={24} color="black" style={{ color: "white",
     textAlign:"center" ,}} />
        </TouchableOpacity>
      </View>
    
       
      <Text style={{color:'white' , marginHorizontal:'10%'}}>Name</Text>
      <TextInput style={styles.input}
          placeholder={"Enter Your Name"} 
        />
  
  <Text style={{color:'white' , marginHorizontal:'10%'}}>Email</Text>
    <TextInput style={styles.input}
          placeholder={"tim@apple.com"} 
          keyboardType="email-address"
        />
  
  <Text style={{color:'white' , marginHorizontal:'10%' ,}}>Password</Text>
         <TextInput style={styles.input}
          placeholder={"pick a strong Password"} 
          onChangeText={ onchangePass }
          keyboardType="numeric"
          secureTextEntry={true}
          
        />
        <AntDesign name="eye" size={24} color="gray" style={{ position:"absolute" ,zIndex:7 , left:"80%" ,position:'relative',top:-45}} onPress={()=>{Alert.alert("show Password !")}} />
      
     
      
       <TouchableOpacity style={styles.acc} onPress= { handlesubmit }
        
        
        //  Alert.alert('Successfuly Login !!') 
      >
       <Text style={{color: "white",
      textAlign:"center" ,}}>Create Account </Text>
        </TouchableOpacity>
  
       <Text style={{color:'white' ,textAlign:"center" , marginBottom:25}} >Already have an account ?  <Text  style={{fontWeight:"bold",fontSize: 16, margin:10}}>Log in</Text></Text>
  
  
      </ImageBackground> 
  
      {/* <Button
   
   title="Learn More"
    color="#841584"
    onPress={modalButton}
  
      /> */}
  
  {/* <Modal isVisible={IsVisible}  animationType="slideInDown"   >
      
    <View style={{width:'80%' , height:'30%' ,backgroundColor:'white' ,marginHorizontal:"10%" }}>
      <Text style={{textAlign:'center' , marginTop:30 }}>Hello World ! </Text>
    </View>
  </Modal> */}
      </View>
     
  
    )
    
   
 
}
 const App = ()=>
{
 
return(
  <NavigationContainer initalRoutName={ 'Login' } >
    <Stack.Navigator>
    <Stack.Screen  name='Login' component={Login} options={{}} />
     <Stack.Screen  name='Home' component={Home} options={{headerStyle:{backgroundColor:'tomato'}} } /> 
    </Stack.Navigator>
   
    {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
       <Tab.Screen name="Settings" component={SettingsScreen} /> 
      </Tab.Navigator> */}
  </NavigationContainer>
) 
}

const styles={
  lt:
  {
    color: "white",
    fontSize: 21,
       lineHeight: 25,
    // fontWeight: "bold",
    width:30 ,
     height:30,
     backgroundColor:'transparent' ,
     borderWidth:1 ,
     borderColor:"black" ,
     marginTop:12,
     marginLeft:12 ,
     borderRadius:10 ,
     textAlign:"center" ,
     margin:18 ,

    // marginLeft:15,
    // marginTop:42
  },
  insta:
  {
    color: "white",
    fontSize: 22,
    // lineHeight: 80,
    fontWeight: "bold",
    // textAlign: "center",
    // marginTop: 20 ,
    marginVertical:5,
   
  
  },
  input:{
    width:'80%' ,
    height:50 ,
      marginHorizontal:'10%',
     margin:7 ,
    backgroundColor:'white',
    borderWidth:1 ,
    borderColor:'gray' ,
    padding:10 ,
    borderRadius :7 ,

  },
  acc:
  {
     width:'80%' ,
     height:50 ,
      marginHorizontal:'10%',
      margin:10 ,
     backgroundColor:'grey',
     borderWidth:1 ,
     borderColor:'gray' ,
     padding:10 ,
    borderRadius :7 ,
    
    
  },
  btn: {
   
    width:'40%' ,
    height:40 ,
    // marginLeft:'10%',
      // marginHorizontal:'10%',
    // // marginTop:-3,
    marginLeft:10 ,
     backgroundColor:'gray',
      borderWidth:1 ,
     borderColor:'gray',
     padding:5 ,
   borderRadius :13 ,
  
   

  },
}


export default App 



























































  // {/* flatList */}
  //  {/* <FlatList data={data} renderItem={renderitem}></FlatList> */}
  
  
  //      {/* <Text style={{backgroundColor:"pink", textAlign:"center" ,marginVertical:100}}>Welcome</Text>  */}
    
       
  //     {/* <Text style={style.xx}>Hello</Text> */}
  //     {/* Image */}
  //     {/* <Image style={{width:200 , height:200 }} source={{uri :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlR6llbdsiqPS2X3ir246Xo77qpRiR4hYGfhJs4g9KIrYOizGttvc9hOp2DSYKhbxJdiw&usqp=CAU' }} />
  
  //     <Image style={{width:200 , height:200 ,marginTop:15}} source={require('./2.jpg' )} />
  //     <Image style={{width:200 , height:200 ,marginTop:15}} source={require('./2.jpg' )} />
  //     <Image style={{width:200 , height:200 ,marginTop:15}} source={require('./2.jpg' )} />
  //     <Image style={{width:200 , height:200 ,marginTop:15}} source={require('./2.jpg' )} /> */}