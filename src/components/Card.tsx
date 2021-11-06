import styled from "styled-components/macro";
import checkMarck from "../images/checkMark.svg";

function Card() {
  return (
    <Container>
      <div>
        <label>
          <Checkbox type="checkbox" />
          <Title>Сделать ToDoList</Title>
        </label>
        <Description>
          Какое-то описание на 2 строки не более. Какое-то описание на 2 строки
          не более
        </Description>
      </div>
      <Time>6 ноя 15:16</Time>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #a7023c05;
  box-sizing: border-box;
  border: 1px solid #a7023c50;
  border-radius: 5px;
  outline: none;
  margin: 10px 0 0 0;
  padding: 10px;
`;

const Checkbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin: 0 10px 0 0;

  :checked + ::before {
    background-image: url(${checkMarck});
    background-position: center;
    background-size: 80%;
    background-repeat: no-repeat;
    border: 1px solid #3b0d8260;
  }
`;

const Title = styled.div`
  font-size: 22px;
  line-height: 24px;
  position: relative;
  font-weight: 500;
  color: #a7023c;
  cursor: pointer;
  margin: 0 10px 5px 0;
  padding: 0 0 0 30px;

  ::before {
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #a7023c50;
    border-radius: 5px;
    content: "";
  }
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: #000000;
  margin: 0;
`;

const Time = styled.p`
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;
  font-style: italic;
  text-align: end;
  color: #000000;
  margin: 0;
`;
