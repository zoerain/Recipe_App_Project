import React, { useState } from "react";

function Recipe({name, cuisine, photo, ingredients, preparation}) {

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
       <button type="submit" name="delete" onClick={handleDelete}>Delete</button>
     </div>
 </main>
    )
}

export default Recipe;