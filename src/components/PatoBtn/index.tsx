import React from "react";

import styled from "styled-components";


const BotaoEstilizado = styled.button`
background: aliceblue;
border: 2px solid black;
color: black;
padding: 8px;
border-radius: 4px;
font-weight: 700;
cursor: pointer;
&:hover{
    background: black;
    color: aliceblue;
    border-color: aliceblue;
}

`


export const PatoBtn = ()=>{
    return <BotaoEstilizado>
        Clique Aqui
    </BotaoEstilizado>
}