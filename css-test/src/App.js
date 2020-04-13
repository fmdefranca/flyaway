import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Quicksand', sans-serif;
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Header = styled.header`
  border: 1px solid red;
`;

const Nav = styled.nav`
  background-color: red;
  min-height: 50px;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Paragraph = styled.p`
  color: red;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Nav>
          <ul>
            <li> Home </li> <li> About </li> <li> Contact </li>
          </ul>
        </Nav>
      </Header>
      <Wrapper>
        <Title> Hello World! </Title>
        <Paragraph>
          This is just loads of scrabble crappy text because lorme ipsum is not
          working properly. This is not long enough, i need ot add more and more
          text for this shit to show something a bi tlonger on the page.
        </Paragraph>
      </Wrapper>
    </>
  );
}

export default App;
