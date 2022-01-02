import React from "react";
import * as S from "./Actions.styles";

export const Actions = () =>{
    return (
        <S.ContainerActions>
            <S.Actions>
                <S.ActionsButton/>
                <S.ActionsButton/>

            </S.Actions>
            <S.ActionsList/>
        </S.ContainerActions>
    )
}