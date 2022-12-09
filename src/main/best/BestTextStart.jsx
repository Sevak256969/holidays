import React, { Component } from 'react';
import { TextBlockBest, BestP,BestH2 } from '../../MainTags';

export default class BestTextStart extends Component {
  render() {
    return (
      <TextBlockBest>
          <BestH2>Our Best Blogs Ever</BestH2>
          <BestP>“Try our blog to find the best tips and tricks to select your gift”</BestP>
      </TextBlockBest>
    )
  }
};
