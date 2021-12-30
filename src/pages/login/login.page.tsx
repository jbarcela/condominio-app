import React from 'react'
import {Image, View} from "react-native";

// @ts-ignore
import LoginImage from '../../assets/images/login-image.png'

export const LoginPage = () => {
  return (
    <View>
      <Image source={LoginImage} />
    </View>
  )
}