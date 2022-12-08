import React, { Component } from 'react';
import  BestTextStart from './BestTextStart';
import  BestImg from './BestImg';
import  Best from './Best';
import  TextBest from './TextBest';

export default class BestInd extends Component {
  render() {
    return (
      <section>
        <div>
          <BestTextStart/>
          <BestImg/> 
          <Best/>
          <TextBest/>
        </div>
      </section>
    )
  }
}
