import React from "react";
import styled from "styled-components";
import { Segment, Container, Header } from "semantic-ui-react";
import NavBar from "./NavBar.js";

import "../App.css";



const Title = styled.h1`
    font-size: 4em;
    text-align: center;
    `;

function Photo(props) {
  return (
    <div>
      <Title>{props.title}</Title>
      <img src={props.url} alt="space" />
      <Segment.Group className = 'groupSegment' raised>
      <Segment className = 'navBar'><NavBar /></Segment>
        <Segment>
            <Container className = 'infoContainer' text>
            <Header as='h2'>Context:</Header>
        
        {props.explanation}  
        {props.copyright}
        
        </Container>
        </Segment>
  </Segment.Group>    
    </div>
  );
}

export default Photo;
