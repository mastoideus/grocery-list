import React, { useState } from "react";
import classes from "./InputForm.module.css";
import CustomButton from "../CustomButton/CustomButton";
import { useDispatch } from "react-redux";
import { listActions } from "../../store/list-reducer";

const InputForm = () => {
  const [item, setItem] = useState("");

  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    setItem(e.target.value);
  };

  const addItemHandler = (e) => {
    e.preventDefault();
    dispatch(listActions.addItem(item));
    setItem("");
  };

  return (
    <form className={classes.inputForm} onSubmit={addItemHandler}>
      <input type="text" onChange={inputChangeHandler} value={item} />
      <CustomButton type="submit" disabled={item.length === 0}>
        Add Item
      </CustomButton>
    </form>
  );
};

export default InputForm;
