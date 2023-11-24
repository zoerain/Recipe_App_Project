import React, { useState } from "react";

function RecipeCreate({addRecipes}) {
  
  const initialRecipeForm = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  
  const [formData, setFormData] = useState({...initialRecipeForm});
  
  const handleChange = ({target}) => {
    setFormData({...formData, [target.name]: target.value,})
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipes(formData);
    setFormData({...initialRecipeForm});
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td>
                <input
                  id="name"
                  type="text"
                  required={true}
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={formData.name}
                />
            </td>
            <td>
                <input
                  id="cuisine"
                  type="text"
                  required={true}
                  name="cuisine"
                  placeholder="Cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                />
            </td>
            <td>
                <input
                  id="photo"
                  type="url"
                  required={true}
                  name="photo"
                  placeholder="URL"
                  onChange={handleChange}
                  value={formData.photo}
                />
            </td>
            <td>
               <textarea
                 id="ingredients"
                 type="textarea"
                 required={true}
                 name="ingredients"
                 placeholder="Ingredients"
                 rows={2}
                 onChange={handleChange}
                 value={formData.ingredients}
               />
            </td>
            <td>
               <textarea
                 id="preparation"
                 type="textarea"
                 required={true}
                 name="preparation"
                 placeholder="Preparation"
                 rows={2}
                 onChange={handleChange}
                 value={formData.preparation}
               />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
