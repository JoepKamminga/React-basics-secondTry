import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "./ui/TextInput";

export const RecipeSearch = ({ gefilterdeReceptenInstellen }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    const zoekWaarde = event.target.value;
    setSearchField(zoekWaarde);
    const matchedRecipes = data.hits.filter(({ recipe }) => {
      return recipe.label.toLowerCase().includes(zoekWaarde.toLowerCase());
    });
    gefilterdeReceptenInstellen(matchedRecipes);
  };

  return (
    <>
      <TextInput onChange={handleChange} w={["80%", "35%"]} mb={8} />
    </>
  );
};
