import React, { useState } from "react";
import CustomButton from "../../CustomButton/CustomButton";
import classes from "./GroceryItem.module.css";
import { listActions } from "../../../store/list-reducer";
import { useDispatch } from "react-redux";

const GroceryItem = (props) => {
  const [editModal, setEditModal] = useState(false);
  const [editedText, setEditedText] = useState(props.item);

  const dispatch = useDispatch();

  const deleteItemHandler = () => {
    dispatch(listActions.deleteItem(props.item));
  };

  const openEditModal = () => {
    setEditModal(true);
  };
  const closeEditModal = () => {
    setEditModal(false);
  };

  const editedTextHandler = (e) => {
    setEditedText(e.target.value);
  };

  const submitEditedText = () => {
    dispatch(listActions.editItem({ item: props.item, newText: editedText }));
    setEditModal(false);
  };
  return (
    <li className={classes.item}>
      <div className={`${classes.editModal} ${editModal && classes.editOpen}`}>
        <input type="text" value={editedText} onChange={editedTextHandler} />
        <CustomButton btnClass={classes.editBtn} onClick={submitEditedText}>
          Confirm
        </CustomButton>
        <CustomButton btnClass={classes.editBtn} onClick={closeEditModal}>
          Cancel
        </CustomButton>
      </div>
      <h2 className={classes.text}>
        {props.idx + 1}. {props.item}
      </h2>
      <div className={classes.actions}>
        <CustomButton btnClass={classes.btn} onClick={openEditModal}>
          Edit item
        </CustomButton>
        <CustomButton btnClass={classes.btn} onClick={deleteItemHandler}>
          Delete item
        </CustomButton>
      </div>
    </li>
  );
};

export default GroceryItem;
