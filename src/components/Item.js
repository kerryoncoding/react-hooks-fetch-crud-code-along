import React from "react";

function Item({ item, onUpdateItem }) {

  function cartButton(){
    console.log("button clicked")
    console.log(item.isInCart)
    // PATCH - update data on Json server
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        isInCart: !item.isInCart
      }),
    })
    .then(resp => resp.json())
    .then(data => onUpdateItem(data))
    }



  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"} onClick={cartButton}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove">Delete</button>
    </li>
  );
}

export default Item;
