import React, { Component } from 'react';
import { ImgBest } from '../../MainTags';
import best from './media.png';

export default class BestImg extends Component {
  render() {
    return (
      <ImgBest src={best}/>
    )
  }
};
