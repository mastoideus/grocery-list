import React from "react";
import classes from "./GroceryList.module.css";
import { IoPinSharp } from "react-icons/io5";
import InputForm from "./InputForm";
import { useSelector } from "react-redux";
import GroceryItem from "./GroceryItem/GroceryItem";

const GroceryList = () => {
  const items = useSelector((state) => state.list.listItems);

  const itemsList = (
    <ul type="1" className={classes.oList}>
      {items.map((item, index) => {
        return <GroceryItem key={index} item={item} idx={index} />;
      })}
    </ul>
  );

  return (
    <React.Fragment>
      <h1 className={classes.title}>Grocery List</h1>
      <div className={classes.groceryList}>
        <div className={classes.blackMarker}></div>
        <InputForm />
        <div className={classes.paper}>
          <IoPinSharp className={classes.pinIcon} />
          {items.length > 0 ? (
            itemsList
          ) : (
            <h1 className={classes.emptyList}>Empty Grocery List</h1>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default GroceryList;
