import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled/macro';

const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`
const DropdownA = styled.a`
    
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    width: 175px;
    &:hover{
        background-color: #f1f1f1
    }
`

const DropdownButton = styled.div`
    background-color: #840705;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    font-size: 20px;
    width: 175px;
    color: transparent;  
    text-shadow: 0 0 0 white;
    text-align: center;
`

const Dropdown = styled.div`
    position: relative;
    float: right;
    display: inline-block;
    &:hover {
        ${DropdownContent}{
        display:block;
        }
    }
    &:hover {
        ${DropdownButton}{
        display:block;
        }
    }

`


export const DisplayProfile = () => {
    const [log, setLog] = useState(true);
    const [username, setUsername] = useState("Joaquin")
    useEffect(() => {
        if(!log){
            setUsername("Desconocido")
        }
    }, [log])
    return <div>
        <Dropdown>
            <DropdownButton>{username} <span style={{fontSize:"20px"}}>👤</span></DropdownButton>
            <DropdownContent>
                <DropdownA href="#">Perfil 🧐</DropdownA>
                <DropdownA href="#" onClick={() => setLog(false); alert("Estás deslogueado")}>Logout 🚪</DropdownA>
            </DropdownContent>
        </Dropdown>
        </div>
}