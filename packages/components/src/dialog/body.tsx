import { Box, type BoxProps } from "@chakra-ui/react";
import React from "react";

export interface DialogBodyProps extends BoxProps {}

export const DialogBody = ({ children, ...rest }: DialogBodyProps) => (
  <Box w="full" {...rest}>
    {children}
  </Box>
);
