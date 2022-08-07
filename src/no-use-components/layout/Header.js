import React, { useState } from 'react';
import {FaPizzaSlice} from 'react-icons/fa';
import styled from 'styled-components';
// import PropTypes from 'prop-types';


const StyledHeader =styled.header`
    border-bottom: solid 1px #ca2100;
    background-color: #db4c3f;
    -webkit-transition: height 200ms ease-in;
    transition: height 200ms ease-in;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    height: 44px;
    z-index: 400;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0 10px;

    // font-size: 13px;
    // margin-bottom: 20px;
    // float: left;
`
const StyledNav = styled.nav`
    display: grid;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    max-width: 922px;
    margin: auto;
    height: 44px;
`

const Logo = styled.img`
    // padding-left: 8px;
    grid-area: 1 / 1;
    width:24px;
    // height:auto;
`

const AddButton = styled.div`
    // margin-right: 15px;
    font-size: 2rem;
    background:transparent;
    border: transparent;
    color: white;
    cursor: pointer;
`

const PizzaButton = styled.div`
    // @include transparent-button();
    background:transparent;
    border: transparent;
    width:1rem;
    height:1rem;
    color: white;
    // cursor: pointer;
    // display: -webkit-box;
    // display: -ms-flexbox;
`

// const PizzaSvg= styled.div`
//     // margin: 10px;
//     width: 20px;
//     height: 20px;
// `

const RightUl = styled.ul`
    float: right;
    display: flex;
    align-items: center;
    justify-content: end;
    gap:2rem;
`

const Styledli = styled.li`
    @include va;
    list-style-type: none;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    float: left;
`
// header {
//     border-bottom: solid 1px #ca2100;
//     background-color: $generic-bg;
//     -webkit-transition: height 200ms ease-in;
//     transition: height 200ms ease-in;
//     -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
//             box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
//     height: 44px;
//     z-index: 400;
//     position: fixed;
//     top: 0;
//     width: 100%;
  
//     @include mq('900px') {
//       padding: 0 10px;
//     }
  
//     nav {
//       display: grid;
//       -webkit-box-align: center;
//           -ms-flex-align: center;
//               align-items: center;
//       grid-template-columns: 1fr 1fr;
//       grid-template-rows: 1fr;
//       grid-column-gap: 0px;
//       grid-row-gap: 0px;
//       max-width: 922px;
//       margin: auto;
//       height: 44px;
  
//       p, li {
//         color: white;
//       }
  
//       div {
//         &.logo {
//           padding-left: 8px;
//           grid-area: 1 / 1;
  
//           img {
//             width: 24px;
//           }
  
//         }
  
//         &.settings {
//           grid-area: 1 / 2;
//           text-align: right;
  
//           ul {
//             float: right;
//           }
  
//           ul li {
//             @include va;
  
//             list-style-type: none;
//             cursor: pointer;
//             width: 30px;
//             height: 30px;
//             text-align: center;
//             vertical-align: middle;
//             float: left;
  
//             &:hover {
//               border-radius: 3px;
//               background-color: rgba(255,255,255,0.2);
//             }
  
//             &.settings__add {
//               margin-right: 15px;
//               font-size: 30px;
  
//               button {
//                 @include transparent-button();
//                 color: white;
//                 cursor: pointer;
//               }
//             }
  
//             &.settings__darkmode {
//               button {
//                 @include transparent-button();
//                 color: white;
//                 cursor: pointer;
//                 display: -webkit-box;
//                 display: -ms-flexbox;
//                 display: flex;
  
//                 svg {
//                   width: 20px;
//                   height: 20px;
//                 }
//               }
  
//             }
//           }
//         }
//       }
//     }
//   }
const Left8space = styled.div` 
padding-left: 8px;
`
const Header = ({ darkMode, setDarkMode }) => {
//   const [shouldShowMain, setShouldShowMain] = useState(false);
//   const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <StyledHeader className="header" data-testid="header">
      <StyledNav>
        <Left8space>
          <Logo src="/images/logo.png" alt="Todoist" />
        </Left8space>
      <RightUl>
        <Styledli>
          <AddButton>+</AddButton>
        </Styledli>
        <Styledli>
          <PizzaButton>
            <FaPizzaSlice />
          </PizzaButton>
        </Styledli>
      </RightUl>
      </StyledNav>
    </StyledHeader>
  );
};

// Header.propTypes = {
//   darkMode: PropTypes.bool.isRequired,
//   setDarkMode: PropTypes.func.isRequired,
// };
export default Header;