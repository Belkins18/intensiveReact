import React, { Component } from 'react';
import styled from "styled-components";

const StyledLink = styled.a`
    color: ${props => props.active ? 'pink' : '#fff'};
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    padding: 0 22px 0 0;
    border-right: 1px dotted #fff;

    &:hover {
        color: #8d8d8d;
        text-decoration: none;
    }
`
class Link extends React.Component {
  render() {
    return (
        <StyledLink href={this.props.link}>{this.props.text}</StyledLink>
    );
  }
}

export default Link;