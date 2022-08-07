import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components'

const Styleddot = styled.span`
`
const IndividualProject = (props) => {
  return (
    <>
      <Styleddot>•</Styleddot>
      <span>{props.name}</span>
      <span
        tabIndex={0}
        role="button"
      >
        <FaTrashAlt />
      </span>
    </>
  );
};

export default IndividualProject;
