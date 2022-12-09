import React, { Component } from 'react';
import { BestTextBlock,BestLearnMoreBtn, BestTextBlockP,BestTextBlockH2 } from '../../MainTags';

export default class Best extends Component {
  render() {
    return (
      <BestTextBlock>
        <BestTextBlockH2>Mr. John Doe</BestTextBlockH2>
        <BestTextBlockP>The best way to wish your wife</BestTextBlockP>
        <BestLearnMoreBtn>Read More</BestLearnMoreBtn>
      </BestTextBlock>
    )
  }
};