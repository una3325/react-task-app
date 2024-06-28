import React, { FC, useState } from 'react';
import DropDownFrom from './DropdownForm/DropDownFrom';
import { IoIosAdd } from 'react-icons/io';
import { listButton, taskButton } from './ActionButton.css';

type TActionButtonProps = {
  boardId: string;
  listId: string;
  list?: boolean;
};

const ActionButton: FC<TActionButtonProps> = ({ boardId, listId, list }) => {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const buttonText = list ? '새로운 리스트 등록' : '새로운 일 등록';

  return isFormOpen ? (
    <DropDownFrom
      setIsFormOpen={setIsFormOpen}
      list={list ? true : false}
      boardId={boardId}
      listId={listId}
    />
  ) : (
    <div
      className={list ? listButton : taskButton}
      onClick={() => setIsFormOpen(true)}
    >
      <IoIosAdd />
      <p>{buttonText}</p>
    </div>
  );
};

export default ActionButton;
