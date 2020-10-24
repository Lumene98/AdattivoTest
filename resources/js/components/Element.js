import React from 'react';
import styled from 'styled-components';

var parse = require('html-react-parser');

const ElementWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 30px;
    max-width:350px;
`;

const ElementTitle = styled.div`
    color: #FFFFFF;
    font-family: "Open Sans";
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 32px;
    text-align: center;
`;

const ElementSubtitle = styled.div`
    color: #FFFFFF;
    font-family: "Open Sans";
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 20px;
    text-align: center;
`;

function Element({children}) {
    return(
        <ElementWrapper>
            {parse(children.icon)}
            <ElementTitle>{children.title}</ElementTitle>
            <ElementSubtitle>{children.subtitle}</ElementSubtitle>
        </ElementWrapper>
    )
    
}

export default Element;