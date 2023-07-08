import React, { useState } from "react";

function ItemForm({onAddItem}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");


  function handleFormSubmit(e) {
    e.preventDefault()
    // console.log("submitted")
    // console.log(e.target.name.value)
    console.log(name, category)
    
    const itemData = {
      name: name,
      category: category,
      isInCart: false,
    };
    console.log(itemData);

    //POST REQUEST - Create data (modify our json server)
    fetch("http://localhost:4000/items", {
      method: "POST", 
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(itemData),
    })
    .then(resp => resp.json())
    //this is prop passing to shoppingList
    .then(itemData => onAddItem(itemData))
  }
  


  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
