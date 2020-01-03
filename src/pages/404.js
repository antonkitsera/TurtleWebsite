import React from "react";
import styled from "styled-components";
import { media, mediaMin } from "../lib/style";

const Title = styled.h1`
  ${props => props.className} {
    text-align: center;
    vertical-align: middle;
    ${mediaMin.tablet`line-height: 100px;`}
    ${mediaMin.desktop`line-height: 200px;`}
  }
`;

export default () => (
  <div>
    <Title>404 - Oh no's! We couldn't find that page :(</Title>
  </div>
);
