import { Badge } from "@chakra-ui/react";

export const DietLabels = ({ recipe }) => {
  //console.log(recipe.label);
  return recipe.dietLabels.map((dietLabels) => {
    return (
      <Badge key={dietLabels} marginRight="2" colorScheme="purple">
        {dietLabels}
      </Badge>
    );
  });
};
