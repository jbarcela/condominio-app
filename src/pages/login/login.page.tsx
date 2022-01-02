import React from 'react'
import {
    KeyboardAvoidingView,
    StatusBar

} from "react-native";


import * as S from './login.styles'

// @ts-ignore
import LoginImage from '../../assets/images/login-image.png'

export const LoginPage = () => {
    return (

        <KeyboardAvoidingView behavior={"height"} style={{flex: 1}}>
            <S.Container>
                <StatusBar barStyle="light-content"/>
                <S.WrapperImage>
                    <S.Image source={LoginImage}/>
                </S.WrapperImage>
                <S.Form>
                    <S.Text>PUNTA DEL ESTE</S.Text>
                    <S.TextInput placeholder={" E-mail"}/>
                    <S.TextInput secureTextEntry={true} placeholder={" Senha"}/>
                    <S.Button activeOpacity={0.9}><S.TextEntrar>LOGIN</S.TextEntrar></S.Button>
                </S.Form>
            </S.Container>
        </KeyboardAvoidingView>

    );
}
