import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { input, StateType } from "../redux/todoSlise";
import Card from "./Card";

function Main() {
  const dispatch = useDispatch();
  const todoItem = useSelector((state: StateType) => state);

  const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
    dispatch(
      input({
        field: evt.currentTarget.name as keyof StateType,
        value: evt.currentTarget.value as keyof StateType,
      })
    );
  };

  return (
    <Container>
      <Input
        aria-label="Название"
        type="text"
        name="name"
        value={todoItem.name}
        onChange={handleChange}
        maxLength={20}
      />
      <Input
        aria-label="Описание"
        type="text"
        name="description"
        value={todoItem.description}
        onChange={handleChange}
        maxLength={60}
      />
      <Button type="button">Добавить</Button>
      <div>
        <Card />
      </div>
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
  border: 1px solid #a0ba0250;
  border-radius: 5px;
  outline: none;
  margin: 10px 0 0 0;
  padding: 0;
`;

const Button = styled.button`
  width: 50%;
  height: 30px;
  display: block;
  background: #a0ba0210;
  box-sizing: border-box;
  border: 1px solid #a0ba0270;
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  line-height: 20px;
  font-weight: 300;
  color: #7d8b24;
  margin: 10px 0 0 auto;
  padding: 0;
`;
