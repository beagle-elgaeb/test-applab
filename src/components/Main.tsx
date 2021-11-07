import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { addTask } from "../redux/toDoSlise";
import { RedaxState } from "../redux/types";
import Card from "./Card";
import { handleValidation } from "./utils";

function Main() {
  const dispatch = useDispatch();
  const { tasks, tasksDone } = useSelector((state: RedaxState) => state.toDo);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeName = (evt: React.FormEvent<HTMLInputElement>) => {
    setName(evt.currentTarget.value);
  };

  const handleChangeDescription = (evt: React.FormEvent<HTMLInputElement>) => {
    setDescription(evt.currentTarget.value);
  };

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();
    dispatch(addTask({ name, description }));
    setName("");
    setDescription("");
  }

  return (
    <Container>
      <form onSubmit={handleSubmit} noValidate>
        <Input
          aria-label="Название"
          type="text"
          name="name"
          value={name}
          placeholder="Задача"
          onChange={handleChangeName}
          autoComplete="off"
          maxLength={20}
          required
        />
        <Input
          aria-label="Описание"
          type="text"
          name="description"
          value={description}
          placeholder="Описание задачи"
          onChange={handleChangeDescription}
          autoComplete="off"
          maxLength={80}
          required
        />
        <Button type="submit" disabled={!handleValidation(name, description)}>
          Добавить
        </Button>
      </form>
      <div>
        {tasks.map((task, i) => (
          <Card key={task.id} task={task} done={false} />
        ))}
      </div>
      <div>
        {tasksDone.map((task, i) => (
          <Card key={task.id} task={task} done={true} />
        ))}
      </div>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100%;
  margin: 0;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  background: transparent;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #a0ba0250;
  border-left: 1px solid #a0ba0250;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  line-height: 18px;
  font-weight: 300;
  color: #a0ba02;
  margin: 10px 0 0 0;
  padding: 0 10px 0 10px;

  ::placeholder {
    color: #a0ba0260;
    text-transform: lowercase;
  }

  :hover {
    border: 1px solid #a0ba0250;
  }

  :focus {
    border: 1px solid #a0ba02;
    box-shadow: 0 0 3px 2px #a0ba0230;
  }
`;

const Button = styled.button<{ disabled: boolean }>`
  width: 50%;
  height: 30px;
  display: block;
  background: #a0ba0210;
  box-sizing: border-box;
  border: ${({ disabled }) => (disabled ? "none" : "1px solid #a0ba0270")};
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  line-height: 20px;
  font-weight: 300;
  color: ${({ disabled }) => (disabled ? "#7d8b2430" : "#7d8b24")};
  margin: 10px 0 0 auto;
  padding: 0;

  :hover {
    box-shadow: 0 0 3px 2px #a0ba0250;
  }
`;
