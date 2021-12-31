import React from 'react'
import {
    Button,
    Image,
    KeyboardAvoidingView,
    StatusBar,
    Text,
    TextInput,
    TouchableNativeFeedback,
    View
} from "react-native";


import * as S from './login.styles'

// @ts-ignore
import LoginImage from '../../assets/images/login-image.png'
import {styles} from "./login.styles";

export const LoginPage = () => {
    return (
       // <TouchableNativeFeedback>
        <KeyboardAvoidingView behavior="padding">
            <StatusBar barStyle="light-content"/>
            <S.Container>
                <S.WrapperImage>
                    <S.Image source={LoginImage}/>
                </S.WrapperImage>

                <S.Form style={styles.BorderRadius}>
                    <S.Text>PUNTA DEL ESTE</S.Text>
                    <S.TextInput autoFocus placeholder={" E-mail"}></S.TextInput>
                    <S.TextInput  secureTextEntry={true} placeholder={" Senha"}></S.TextInput>
                    <S.Button activeOpacity={0.9}><S.TextEntrar>LOGIN</S.TextEntrar></S.Button>

                </S.Form>
            </S.Container>
        </KeyboardAvoidingView>
       // </TouchableNativeFeedback>
    );
}
