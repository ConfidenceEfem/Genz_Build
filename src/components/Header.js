import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Logo</Logo>
        <RightItems>
          {/* <Navigation>
            <Navs>Home</Navs>
            <Navs>About Us</Navs>
            <Navs>Services</Navs>
            <Navs>Contact</Navs>
          </Navigation>{' '} */}
          <Navs>Sign In</Navs>
          <RegButton>Register As An Artisian</RegButton>
          <RegButton>Register As A User</RegButton>
        </RightItems>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Navigation = styled.div`
  display: flex;
  margin-right: 40px;
`;
const RegButton = styled.div`
  padding: 10px 15px;
  color: black;
  border: 2px solid black;
  display: flex;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 13px;
  margin: 0 14px;
  transition: all 550ms;
  :hover {
    cursor: pointer;
    transform: scale(0.95);
  }
`;
const Navs = styled.div`
  font-size: 14px;
  margin: 0 10px;
  cursor: pointer;
  transition: all 550ms;
  font-weight: 500;
  :hover {
    transform: scale(0.95);
  }
`;
const RightItems = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 20px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 90px;
  background-color: #ffff;
  display: flex;
  justify-content: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  /* font-family: work sans; */
`;
