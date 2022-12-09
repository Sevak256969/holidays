import React, { Component } from 'react';
import { ReadyBtn1,ReadyBtn2, ReadyBlock,ReadyBtnDiv } from '../../MainTags';

export default class ReadyText extends Component {
  render() {
    return (
        <ReadyBlock>
            <div>
                <h2>Ready to get started?</h2>
                <p>Sign up or contact us</p>
            </div>
            <ReadyBtnDiv>
                <ReadyBtn1>Find gift now</ReadyBtn1>
                <ReadyBtn2>how it works</ReadyBtn2>
            </ReadyBtnDiv> 
        </ReadyBlock>
    )
  }
};