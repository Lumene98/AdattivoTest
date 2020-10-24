import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';


import styled from 'styled-components';
import axios from 'axios';
import bg from './img/cta.jpg';
import Element from './Element';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 105px;
     ${props => props.random ? "" : `background: url(${bg})`};
    background-color: ${props=> props.sorted ? "#00e676" : "#d50000"};
`;

const SectionTitle = styled.div`
    margin-top: 87px;
    color: #FFFFFF;
    font-family: "Open Sans";
    font-size: 52px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 56px;
    text-align: center;
`;

const SectionSubtitle = styled.div`
    margin-top: 30px;
    color: #FFFFFF;
    font-family: "Open Sans";
    font-size: 30px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 35px;
    text-align: center;
`;

const SectionText = styled.div`
    margin-top: 30px;
    color: #FFFFFF;
    font-family: "Open Sans";
    font-size: 16px;
    letter-spacing: 0;
    line-height: 24px;
    text-align: center;
`;

const ElementsContainer = styled.div`
    margin-top: 70px;
    display: flex;
    align-content: center;
    align-content: center;
    justify-content: center;
    text-align: center;
`;

const ButtonContainer = styled.div`
    margin: 50px 0 97px 0;
    display: flex;
    align-content: center;
    justify-content: center;
`;

const Button = styled.div`
    height: 60px;
    width: 200px;
    border-radius: 30px;
    background-color: #FFFFFF;
    box-shadow: 0 6px 25px 0 rgba(0,0,0,0.2);
    color: #4A90E2;
    font-family: "Open Sans";
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;





function Randomizer() {

    const [elementi, setElementi] = useState([]);
    const [random, setRandom] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("/api/elementi").finally((response) => response);
            if(response && response.data){
                setElementi(response.data);
            }     
        }
        fetchData()
    }, [])

    async function fetchRandom() {
        const response = await axios.get("/api/randomize").finally((response) => response);
        if(response && response.data){
            setElementi(response.data);
            setRandom(true);
        }     
    }

    var numbers = []

    if(elementi.length > 0)
    {
       numbers = elementi.map(elemento => elemento["number"])
       console.log(!!numbers.reduce((accumulatore, elemento)=> accumulatore !==false && elemento >= accumulatore && elemento ))
    }

    
    return (
        <Wrapper random={random} sorted={numbers.length === 0 ? false : !!numbers.reduce((accumulatore, elemento)=> accumulatore !==false && elemento >= accumulatore && elemento )}>
            <SectionTitle>Sezione 4</SectionTitle>
            <SectionSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</SectionSubtitle>
            <SectionText>Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</SectionText>
            <ElementsContainer>
               {elementi && elementi.length > 0 && elementi.map((elemento, key) => <Element key={key}>{elemento}</Element>
               )}
                </ElementsContainer>
            <ButtonContainer><Button onClick={() => fetchRandom()}>RANDOMIZER</Button></ButtonContainer>
        </Wrapper>
    );
}

export default Randomizer;

if (document.getElementById('randomizer')) {
    ReactDOM.render(<Randomizer />, document.getElementById('randomizer'));
}