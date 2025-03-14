import { Badge } from "@chakra-ui/react";

export const HealthLabels = ({ recipe }) => {
  return recipe.healthLabels.map((healthLabels) => {
    return (
      <Badge key={healthLabels} marginRight="2" colorScheme="purple">
        {healthLabels}
      </Badge>
    );
  });
};
