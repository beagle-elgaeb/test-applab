import styled from "styled-components/macro";

function Footer() {
  return (
    <Container>
      <Copyright
        href="https://github.com/beagle-elgaeb"
        aria-label="Моя страница на GitHub"
        target="_blank"
      >
        &#169; Евгения Никонова
      </Copyright>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const Copyright = styled.a`
  font-size: 14px;
  line-height: 16px;
  font-weight: 300;
  font-style: italic;
  text-decoration: none;
  color: #73037d;
  margin: 0;
`;
