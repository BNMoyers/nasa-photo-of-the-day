import React from 'react';
import styled from 'styled-components';
import { segment, Segment } from 'semantic-ui-react';

export const InfoBox = () => (
    <Segment.Group raised>
        <Segment>NavBar</Segment>
        <Segment>Context</Segment>
    </Segment.Group>
)


const StyledHeading = styled.h1`
    `;
function Photo(props) {
    return(
        <div>
            <h1>{props.title}</h1>
            <img src={props.url} alt='space' />

            <p>
                <NavBar />
                {props.explanation}
            </p>
            <footer>
                {props.copyright}
            </footer>
        </div>
    );
}

export default Photo;