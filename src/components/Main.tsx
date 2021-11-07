import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { addTask, reorder } from "../redux/toDoSlise";
import { ReduxState } from "../redux/types";
import Card from "./Card";
import { validateForm } from "./utils";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function Main() {
  // Управление инпутами
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeName = (evt: React.FormEvent<HTMLInputElement>) => {
    setName(evt.currentTarget.value);
  };

  const handleChangeDescription = (evt: React.FormEvent<HTMLInputElement>) => {
    setDescription(evt.currentTarget.value);
  };

  // Состояние инпутов
  const [focusIsLost, setFocusIsLost] = useState(false);

  function lossFocus() {
    setFocusIsLost(true);
  }

  // Использование данных из стейта
  const { tasks, tasksDone } = useSelector((state: ReduxState) => state.toDo);

  // Передача данных в стейт
  const dispatch = useDispatch();

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();
    dispatch(addTask({ name, description }));
    setName("");
    setDescription("");
    setFocusIsLost(false);
  }

  const checkValidation = validateForm(name, description, tasks, tasksDone);

  // Перемещение карточек
  function onDragEnd(
    result: { source: { index: number }; destination?: { index: number } },
    done: boolean
  ) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    dispatch(
      reorder({
        startIndex: result.source.index,
        endIndex: result.destination.index,
        done: done,
      })
    );
  }

  return (
    <Container>
      <form onSubmit={handleSubmit} noValidate>
        <Input
          aria-label="Название"
          type="text"
          name="name"
          value={name}
          placeholder="Название - от 1 до 20 символов и уникальное"
          onChange={handleChangeName}
          onBlur={lossFocus}
          autoComplete="off"
          maxLength={20}
          required
          valid={focusIsLost ? checkValidation.nameIsValid : true}
        />
        <Input
          aria-label="Описание"
          type="text"
          name="description"
          value={description}
          placeholder="Описание - от 1 до 70 символов"
          onChange={handleChangeDescription}
          onBlur={lossFocus}
          autoComplete="off"
          maxLength={70}
          required
          valid={focusIsLost ? checkValidation.descriptionIsValid : true}
        />

        <Button
          type="submit"
          disabled={focusIsLost ? !checkValidation.isValid : false}
        >
          Добавить
        </Button>
      </form>

      <DragDropContext onDragEnd={(result) => onDragEnd(result, false)}>
        <Droppable droppableId="list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((task, i) => (
                <Draggable
                  draggableId={task.id.toString()}
                  index={i}
                  key={task.id}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...(provided.draggableProps as any)}
                      {...provided.dragHandleProps}
                    >
                      <Card key={task.id} task={task} done={false} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <DragDropContext onDragEnd={(result) => onDragEnd(result, true)}>
        <Droppable droppableId="list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {tasksDone.map((task, i) => (
                <Draggable
                  draggableId={task.id.toString()}
                  index={i}
                  key={task.id}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...(provided.draggableProps as any)}
                      {...provided.dragHandleProps}
                    >
                      <Card key={task.id} task={task} done={true} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100%;
  margin: 0;
`;

const Input = styled.input<{ valid: boolean }>`
  width: 100%;
  height: 30px;
  background: transparent;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid ${({ valid }) => (valid ? "#a0ba0250" : "#D3366E50")};
  border-left: 1px solid ${({ valid }) => (valid ? "#a0ba0250" : "#D3366E50")};
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  line-height: 18px;
  font-weight: 300;
  color: #a0ba02;
  margin: 10px 0 0 0;
  padding: 0 10px 0 10px;

  ::placeholder {
    font-size: 13px;
    color: #a0ba0280;
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
