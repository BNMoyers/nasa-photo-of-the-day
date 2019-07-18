import React from "react";
import styled from "styled-components";
import { Segment, Container, Header } from "semantic-ui-react";
import NavBar from "./NavBar.js";





const Title = styled.h1`
    font-size: 4em;
    text-align: center;
    `;

function Photo(props) {
  return (
    <div>
      <Title>{props.title}</Title>
      <img src={props.url} alt="space" />
      <Segment.Group raised>
      <Segment><NavBar /></Segment>
        <Segment>
            <Container text>
            <Header as='h2'>Context:</Header>
        <p>
        {props.explanation}  
        </p>
        <p>
        {props.copyright}
        </p>
        </Container>
        </Segment>
  </Segment.Group>    
    </div>
  );
}

export default Photo;
