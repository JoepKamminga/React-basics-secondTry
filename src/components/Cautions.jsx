import { Badge } from "@chakra-ui/react";

export const Cautions = ({ recipe }) => {
  //console.log(recipe.label);
  return recipe.cautions.map((cautions) => {
    return (
      <Badge key={cautions} marginRight="2" colorScheme="red">
        {cautions}
      </Badge>
    );
  });
};
