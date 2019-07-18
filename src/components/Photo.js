import React from 'react';



function Photo(props) {
    return(
        <div>
            <h2>{props.title}</h2>
            <img src={props.url} alt='space' />

            <p>
                {props.explanation}
            </p>
            <footer>
                {props.copyright}
            </footer>
        </div>
    );
}

export default Photo;