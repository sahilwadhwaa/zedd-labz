import React, { Component, FunctionComponent } from 'react';

// Interface for Function Component Props
interface FunctionComponentProps {
    name: string;
}

const FunctionComponentExample: FunctionComponent<FunctionComponentProps> = (props) => {
    return <h1>Q1. Hello, {props.name}! This is a Function Component.</h1>;
};


export default FunctionComponentExample;