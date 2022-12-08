import React, { Component } from 'react'
import CopyRight from './CopyRight';
import FooterNav from './FooterNav'
import IconsSocialMedia from './IconsSocialMedia';
import { FooterAll } from "../MainTags";

export default class Footer extends Component {
  render() {
    return (
      <FooterAll>
        <FooterNav/>
        <hr/>
        <IconsSocialMedia/>
        <CopyRight/>
      </FooterAll>
    )
  }
}
