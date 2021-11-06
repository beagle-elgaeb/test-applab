import styled from "styled-components/macro";
import logo from "../images/logo.png";

function Header() {
  return (
    <Container>
      <Logo src={logo} alt="Logo" />
    </Container>
  );
}

export default Header;

const Container = styled.header`
  width: 100%;
  height: 70px;
  margin: 0;
`;

const Logo = styled.img`
  height: 100%;
  display: block;
  margin: 0 auto;
`;
