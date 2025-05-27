/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import styled from "styled-components";

const P = styled.p`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

function Empty({ resourceName }) {
  return <P>No {resourceName} could be found.</P>;
}

export default Empty;
