import React from "react";
import styled from "styled-components";
import {
  createGlobalStyle
} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-around;

  height: 100vh;
  background-color: #70a1ff;
`;

const Logo = styled.div`
  color: black;
  flex-grow: 1;

  img {
    height: 80px;
  }

`;

const Nav = styled.nav`
  padding-bottom: 10px;
  flex-grow: 1;
  padding: 5px 20px;

  ul {
    list-style-type: none;
    display: flex;

    li {
      text-align: center;
      margin: 15px auto;

      a {
        font-size: 18px;
        color: white;
        text-decoration: none;

      }

      &:hover {
        text-decoration: underline;
      }

    }

  }

`;

// const Wrapper = styled.section`
//   padding: 4em;
//   background-image: url('img/wrapper_back.jpg');
//   background-size: cover;
//   height: 100vh;
// `;


function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <div className="container">
          <div className="row">
            <Logo className="one column">
              <img src="img/drawing.svg" alt="FlyAway Logo"></img>
            </Logo>
            <Nav className="eleven columns">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </Nav>
          </div>
          <div className="row">
            Header section
          </div>
        </div>
      </Header>
    </>
  );
}

export default App;