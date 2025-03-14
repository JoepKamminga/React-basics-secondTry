import { Flex } from "@chakra-ui/react";
import { RecipeItem } from "./RecipeItem";

export const RecipeItemList = ({ Recipes, clickFn }) => {
  return (
    <Flex gap={16} w="80%" flexWrap="wrap" justify="center" marginBottom={8}>
      {Recipes.map((recipe) => {
        return (
          <RecipeItem
            key={recipe.recipe.label}
            recipe={recipe.recipe}
            clickFn={clickFn}
            image={recipe.recipe.image}
          />
        );
      })}
    </Flex>
  );
};
