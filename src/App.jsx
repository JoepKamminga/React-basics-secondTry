import { Center, Heading, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeChoice } from "./components/RecipeChoice";
import { RecipeSearch } from "./components/RecipeSearch";
import { RecipeItemList } from "./components/RecipeItemList";
import { data } from "./utils/data";

export const App = () => {
  const [userRecipe, setUserRecipe] = useState();
  const [gefilterdeRecepten, setGefilterdeRecepten] = useState(data.hits);

  const greeting = "Welcome to our recipe checker!";

  const clickFn = (recipe) => {
    setUserRecipe(recipe);
  };

  return (
    <Flex bgColor="teal.600" justify="center" width="100vw">
      <Center
        minHeight="100vh"
        justifyContent="start"
        flexDir="column"
        width={["100%", "80%"]}
      >
        {userRecipe ? (
          <RecipeChoice recipe={userRecipe} setRecipe={setUserRecipe} />
        ) : (
          <>
            <Heading
              align="flex-start"
              size="2xl"
              sm={4}
              mb={8}
              color="orange.500"
              textAlign="center"
            >
              {greeting}
            </Heading>
            <RecipeSearch gefilterdeReceptenInstellen={setGefilterdeRecepten} />
            <RecipeItemList clickFn={clickFn} Recipes={gefilterdeRecepten} />
          </>
        )}
      </Center>
    </Flex>
  );
};
