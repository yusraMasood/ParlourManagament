import React from 'react';
import { View,Text,ImageBackground,Image } from 'react-native';
import styles from "./styles"
import { generalImages, icons } from '../../../assets/images';
import CustomButton from '../../../components/Buttons/CustomButton';

const WelcomeScreen=(props)=>{
    return(
     <ImageBackground source={generalImages.background} style={styles.container}>
         <Image source={icons.logo} style={styles.logoIcon}/>
         <CustomButton text="LOGIN" onPress={()=> props.navigation.navigate("LoginScreen")}/>
         <CustomButton text="SIGN UP" textStyle={styles.btnText} onPress={()=> props.navigation.navigate("SignupScreen")} linearColors={["#fff","#fff"]} buttonStyle={styles.signupBtn}/>
         

     </ImageBackground>
    )
}
export default WelcomeScreen