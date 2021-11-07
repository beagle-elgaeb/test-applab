import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";
import checkMarck from "../images/checkMark.svg";
import { remove, update, toggleDone } from "../redux/toDoSlise";
import { TaskItem } from "../redux/types";
import { handlerData, handleValidation } from "./utils";

function Card({ task, done }: { task: TaskItem; done: boolean }) {
  const dispatch = useDispatch();

  const [updated, setUpdated] = useState(false);
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);

  const handleChangeName = (evt: React.FormEvent<HTMLInputElement>) => {
    setName(evt.currentTarget.value);
  };

  const handleChangeDescription = (evt: React.FormEvent<HTMLInputElement>) => {
    setDescription(evt.currentTarget.value);
  };

  function handleToggleDone() {
    dispatch(toggleDone({ id: task.id, done: done }));
  }

  function handleRemoveTask() {
    dispatch(remove({ id: task.id, done: done }));
  }

  function handleEdit() {
    setUpdated(true);
  }

  function handleUpdate() {
    dispatch(update({ id: task.id, done: done, name, description }));
    setUpdated(false);
  }

  return (
    <Container done={done}>
      <div>
        <label>
          <Checkbox
            type="checkbox"
            onChange={handleToggleDone}
            checked={done}
          />
          {updated ? (
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
          ) : (
            <Title done={done}>{task.name}</Title>
          )}
        </label>
        {updated ? (
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
        ) : (
          <Description>{task.description}</Description>
        )}
      </div>
      <ButtonsAndDate>
        <div>
          {updated ? (
            <ButtonSave
              onClick={handleUpdate}
              disabled={!handleValidation(name, description)}
            >
              Сохранить
            </ButtonSave>
          ) : (
            <Button onClick={handleEdit}>Изменить</Button>
          )}
          <Button onClick={handleRemoveTask}>Удалить</Button>
        </div>
        <Time done={done}>{handlerData(task.date)}</Time>
      </ButtonsAndDate>
    </Container>
  );
}

export default Card;

const Container = styled.div<{ done: boolean }>`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ done }) => (done ? "#3b0d8205" : "#a7023c05")};
  box-sizing: border-box;
  border: 1px solid ${({ done }) => (done ? "#3b0d8250" : "#a7023c50")};
  border-radius: 5px;
  outline: none;
  margin: 10px 0 0 0;
  padding: 10px;

  :hover {
    box-shadow: 0 0 3px 2px ${({ done }) => (done ? "#3b0d8250" : "#a7023c50")};
  }
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

const Input = styled.input`
  width: 100%;
  height: 24px;
  background: #ffffff;
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
  margin: 0 0 5px 0;
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

const Title = styled.div<{ done: boolean }>`
  font-size: 22px;
  line-height: 24px;
  position: relative;
  font-weight: 500;
  color: ${({ done }) => (done ? "#3b0d82" : "#a7023c")};
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
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

  :hover {
    ::before {
      border: 1px solid #a7023c;
    }
  }
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  hyphens: auto;
  word-break: break-all;
  color: #000000;
  margin: 0;
`;

const ButtonsAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Button = styled.button`
  display: inline-block;
  background: transparent;
  border: none;
  outline: none;
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;
  font-style: italic;
  color: #a0ba02;
  margin: 0 20px 0 0;
  padding: 0;
`;

const ButtonSave = styled(Button)<{ disabled: boolean }>`
  color: ${({ disabled }) => (disabled ? "#a0ba0230" : "#a0ba02")};
`;

const Time = styled.p<{ done: boolean }>`
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;
  text-align: end;
  color: ${({ done }) => (done ? "#3b0d82" : "#a7023c")};
  margin: 0;
`;
