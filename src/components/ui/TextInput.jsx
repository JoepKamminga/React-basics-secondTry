import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => (
  <Input
    placeholder="search for recipes"
    variant="filled"
    onChange={changeFn}
    {...props}
  />
);
