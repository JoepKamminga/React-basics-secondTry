import { Box, Text, Flex } from "@chakra-ui/react";

export const TotalNutrients = ({ recipe }) => {
  const fatLabel = recipe.FAT.label;
  const fatQuantity = recipe.FAT.quantity.toFixed(({ quantity }) => {
    return quantity;
  });

  const choleLabel = recipe.CHOLE.label;
  const choleQuantity = recipe.CHOLE.quantity.toFixed(({ quantity }) => {
    return quantity;
  });

  const naLabel = recipe.NA.label;
  const naQuantity = recipe.NA.quantity.toFixed(({ quantity }) => {
    return quantity;
  });

  const procntLabel = recipe.PROCNT.label;
  const procntQuantity = recipe.PROCNT.quantity.toFixed(({ quantity }) => {
    return quantity;
  });

  const carbLabel = recipe.CHOCDF.label;
  const carbQuantity = recipe.CHOCDF.quantity.toFixed(({ quantity }) => {
    return quantity;
  });

  const calLabel = "calories";

  return (
    <Flex flexWrap="wrap" gap="30px">
      <Box>
        <Text>{fatLabel}</Text>
        <Text>{fatQuantity}</Text>
      </Box>
      <Box>
        <Text>{choleLabel}</Text>
        <Text>{choleQuantity}</Text>
      </Box>
      <Box>
        <Text>{naLabel}</Text>
        <Text>{naQuantity}</Text>
      </Box>
      <Box>
        <Text>{procntLabel}</Text>
        <Text>{procntQuantity}</Text>
      </Box>
      <Box>
        <Text>{carbLabel}</Text>
        <Text>{carbQuantity}</Text>
      </Box>
      <Box>
        <Text>{calLabel}</Text>
        <Text>{choleQuantity}</Text>
      </Box>
    </Flex>
  );
};
