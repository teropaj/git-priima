import React from 'react';
import { render } from 'react-dom';
import {   Element } from 'react-scroll'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

export default class Scroll extends React.Component {

   
  render() {
    return (
      <div>
        <Element className="element" id="scroll-container" style={{
            position: 'relative',
            height: '100px',
            overflow: 'scroll',
            marginBottom: '50px',
            backgroundColor: 'yellow'
            
          }}>
          <p>
          Consectetur in deserunt elit in deserunt eiusmod non esse deserunt sint aliqua consectetur. Aliqua velit esse ea consequat pariatur Lorem qui. Nostrud culpa fugiat et est fugiat nisi mollit pariatur do pariatur ullamco. Excepteur ut incididunt eu voluptate duis nostrud enim non.
          Consectetur in deserunt elit in deserunt eiusmod non esse deserunt sint aliqua consectetur. Aliqua velit esse ea consequat pariatur Lorem qui. Nostrud culpa fugiat et est fugiat nisi mollit pariatur do pariatur ullamco. Excepteur ut incididunt eu voluptate duis nostrud enim non.
          Consectetur in deserunt elit in deserunt eiusmod non esse deserunt sint aliqua consectetur. Aliqua velit esse ea consequat pariatur Lorem qui. Nostrud culpa fugiat et est fugiat nisi mollit pariatur do pariatur ullamco. Excepteur ut incididunt eu voluptate duis nostrud enim non.
          Consectetur in deserunt elit in deserunt eiusmod non esse deserunt sint aliqua consectetur. Aliqua velit esse ea consequat pariatur Lorem qui. Nostrud culpa fugiat et est fugiat nisi mollit pariatur do pariatur ullamco. Excepteur ut incididunt eu voluptate duis nostrud enim non.
          Consectetur in deserunt elit in deserunt eiusmod non esse deserunt sint aliqua consectetur. Aliqua velit esse ea consequat pariatur Lorem qui. Nostrud culpa fugiat et est fugiat nisi mollit pariatur do pariatur ullamco. Excepteur ut incididunt eu voluptate duis nostrud enim non.
          </p>
          
          
          </Element>
          
      </div>
    );
  }
};

 

