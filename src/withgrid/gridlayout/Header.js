import React, { useState } from 'react';
import {FaPizzaSlice} from 'react-icons/fa';
import './Header.scss';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const AddButton = styled.div`
    font-size: 2rem;
    background:transparent;
    border: transparent;
    color: white;
`

const PizzaButton = styled.div`
    background:transparent;
    border: transparent;
    color: white;
`

// const PizzaSvg= styled.div`
//     // margin: 10px;
//     width: 20px;
//     height: 20px;
// `

const Left8space = styled.div` 
padding-left: 8px;
`
const Header = () => {
//   const [shouldShowMain, setShouldShowMain] = useState(false);
//   const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <header>
      <nav>
        <img src="/images/logo.png" className="logo" />
      <ul className="RightNav">
        <li>
          <button className="btn-plus">+</button>
        </li>
        <li>
          <button className="btn-pizza"><FaPizzaSlice /></button>
        </li>
      </ul>
      </nav>
    </header>
  );
};

// Header.propTypes = {
//   darkMode: PropTypes.bool.isRequired,
//   setDarkMode: PropTypes.func.isRequired,
// };
export default Header;