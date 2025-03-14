import { Flex } from "@chakra-ui/react";
export const Ingredients = ({ recipe }) => (
  <Flex direction={"column"}>
    {recipe?.ingredientLines?.map((line) => <li key={line}>{line}</li>) || (
      <li>Geen ingredienten beschikbaar</li>
    )}
  </Flex>
);
