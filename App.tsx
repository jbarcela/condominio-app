import React from 'react';
import AppLoading from 'expo-app-loading'

import {ThemeProvider} from "styled-components/native";
import {useFonts, DMSans_400Regular} from '@expo-google-fonts/dm-sans'
import {DMSerifDisplay_400Regular} from '@expo-google-fonts/dm-serif-display'

import theme from './src/theme'
import {Home} from "./src/pages/home/home.page";

export default function App() {
    const [fontsLoaded] = useFonts({
        DMSans_400Regular,
        DMSerifDisplay_400Regular
    })

    if (!fontsLoaded) {
        return <AppLoading/>
    }

    return (
        <ThemeProvider theme={theme}>
            <Home/>
        </ThemeProvider>
    );
}
