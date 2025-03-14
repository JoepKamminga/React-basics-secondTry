import {
  Center,
  WrapItem,
  Flex,
  Heading,
  Image,
  Text,
  Badge,
} from "@chakra-ui/react";
import { DietLabels } from "./DietLabels";
import { Cautions } from "./Cautions";

export const RecipeItem = ({ recipe, clickFn }) => {
  // console.log("recipe.label:", recipe.mealType);
  const mealType = recipe.mealType;
  const dishType = recipe.dishType;
  //console.log(dietLabels);
  return (
    <WrapItem>
      <Center
        flexDir={"column"}
        gap={2}
        cursor={"pointer"}
        onClick={() => clickFn(recipe)}
        w={250}
        h={"fit-content"}
        bgColor={"gray.50"}
        borderRadius={"xl"}
        padding={2}
      >
        <Image
          src={recipe.image}
          w={250}
          h={250}
          fit="cover"
          borderTopRadius={"xl"}
          alt={recipe.label}
        />
        <Flex gap={4}>
          <Text
            paddingTop={"0.5"}
            paddingBottom={"0.5"}
            paddingLeft={"1.5"}
            paddingRight={"1.5"}
            fontSize={12}
            borderRadius={10}
            bgColor={"gray.400"}
          >
            {mealType}
          </Text>
          <Text
            fontSize={12}
            paddingTop={"0.5"}
            paddingBottom={"0.5"}
            paddingLeft={"1.5"}
            paddingRight={"1.5"}
            borderRadius={10}
            bgColor={"gray.400"}
          >
            {dishType}
          </Text>
        </Flex>
        <Heading
          align={"center"}
          borderColor={"black"}
          size={"md"}
          fontWeight={"semibold"}
        >
          {recipe.label}
        </Heading>
        <Badge list={recipe.dietLabels} mb={2} />
        <DietLabels recipe={recipe} />
        <Text>Caution:</Text>
        <Cautions recipe={recipe} />
      </Center>
    </WrapItem>
  );
};
