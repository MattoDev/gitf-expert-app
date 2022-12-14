import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {
  //RGHLs0xVKnCl5TX5DCkuvLH2LW5WqvtZ
  // No debo poner condicionalmente mis hooks
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories((current) => [...current, newCategory]);
  };

  console.log(categories);
  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      <button onClick={onAddCategory}>Add</button>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
