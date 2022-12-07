import { useState } from "react";

export const GiftExpertApp = () => {
  //RGHLs0xVKnCl5TX5DCkuvLH2LW5WqvtZ
  // No debo poner condicionalmente mis hooks
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = () => {
    setCategories((current) => [...current, "Valorant"]);
  };

  console.log(categories);
  return (
    <>
      <h1>GiftExpertApp</h1>

      <button onClick={onAddCategory}>Add</button>

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
