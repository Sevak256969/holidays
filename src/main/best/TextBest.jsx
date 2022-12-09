import React, { Component } from 'react';
import { TextBestBtn, TextBestDiv, TextBestP} from '../../MainTags';

export default class TextBest extends Component {
  render() {
    return (
      <TextBestDiv>
        <div>
          <h2>Database to find the gifts for your girlfriend</h2>
          <TextBestP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</TextBestP>
          <TextBestBtn>Read More</TextBestBtn>
        </div>
        <div>
          <h2>How Artificial Intelligence read your mind to find the best gift</h2>
          <TextBestP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</TextBestP>
          <TextBestBtn>Read More</TextBestBtn>
        </div>
      </TextBestDiv> 
    )
  }
};
