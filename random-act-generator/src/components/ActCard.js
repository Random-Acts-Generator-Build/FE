import React from "react";
import styled from "styled-components";
import { Button } from 'semantic-ui-react'

const ActDiv = styled.div`
  width: 300px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: #99b3af;
  text-align: center;
  margin-bottom: 20px;
  color: #cb8b41;
  margin-top: 20px;
`;

export default function ActCard(props) {
    const { id, act_name, description } = props.act;
    return (
        <ActDiv>
            <h2>{act_name}</h2>
            <p>{description}</p>
            <Button>edit</Button>
            <Button>delete</Button>
        </ActDiv>
    );
};