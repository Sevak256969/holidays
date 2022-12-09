import React, { Component } from 'react';
import  BestTextStart from './BestTextStart';
import  BestImg from './BestImg';
import  Best from './Best';
import  TextBest from './TextBest';
import { BestIndexSection, BestIndex,BestIndexImg } from '../../MainTags';

export default class BestInd extends Component {
  render() {
    return (
      <BestIndexSection>
        <BestIndex>
          <BestTextStart/>
          <BestIndexImg>
            <BestImg/> 
            <Best/>
          </BestIndexImg>          
          <TextBest/>
        </BestIndex>
      </BestIndexSection>
    )
  }
};
