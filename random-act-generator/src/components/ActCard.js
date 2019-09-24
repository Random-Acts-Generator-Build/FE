import React from "react";
import styled from "styled-components";

const ActDiv = styled.div`
  width: 400px;
  border: 2px solid blue;
  border-radius: 10px;
  background-color: green;
  text-align: center;
  margin-bottom: 40px;
`;

export default function ActCard(props) {
    const { id, service, description } = props.act;
    return (
        <ActDiv>
            <h2>{service}</h2>
            <p>{description}</p>
        </ActDiv>
    );
};