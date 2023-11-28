import React, { useState } from "react";
import App from "./App";

function Recipe({ recipe, deleteRecipe }) {

 const { name, cuisine, photo, ingredients, preparation } = recipe;

  return (
    <main>
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{cuisine}</p>
      </div>
      <div>
        <img src={photo} alt={name} />
      </div>
      <div>
        <p>{ingredients}</p>
      </div>
      <div>
        <p>{preparation}</p>
      </div>
      <div>
        <button type="submit" name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </div>
    </main>
  );
}

export default Recipe;