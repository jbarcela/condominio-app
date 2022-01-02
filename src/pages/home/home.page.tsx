import React from "react";
import * as S from './home.styles'
import {StatusBar} from "react-native";
import {Index} from "../../components/header";
import {Actions} from "./Actions";


export const Home = () => {
    return (

        <S.Container>
            <StatusBar barStyle="light-content"/>
            <Index/>
            <Actions/>
        </S.Container>

    )
}