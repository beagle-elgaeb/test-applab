import styled from "styled-components/macro";
import Card from "./Card";

function Main() {
  return (
    <Container>
      <Input type="text" />
      <Input type="text" />
      <Cards>
        <Card />
      </Cards>
    </Container>
  );
}

export default Main;

const Container = styled.main`
  width: 100%;
  margin: 0;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  background: transparent;
  box-sizing: border-box;
  border: 1px solid #00000030;
  border-radius: 5px;
  outline: none;
  margin: 10px 0 0 0;
  padding: 0;
`;

const Cards = styled.div``;
