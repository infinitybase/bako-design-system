import {
  Box,
  type BoxProps,
  Button,
  type ButtonProps,
  Divider,
  HStack,
} from "@chakra-ui/react";

export interface DialogActionsProps extends BoxProps {
  hideDivider?: boolean;
}
export interface DialogActionProps extends ButtonProps {}

export const DialogActions = ({
  children,
  hideDivider,
  ...rest
}: DialogActionsProps) => (
  <Box w="full" {...rest}>
    <Divider hidden={hideDivider} my={[3, 6]} />
    <HStack spacing={4} justifyContent="center">
      {children}
    </HStack>
  </Box>
);

export const DialogPrimaryAction = (props: DialogActionProps) => (
  <Button w="full" variant="primary" {...props} />
);

export const DialogSecondaryAction = (props: DialogActionProps) => (
  <Button
    variant="secondary"
    bgColor="transparent"
    border="1px solid white"
    _hover={{
      borderColor: "brand.500",
      color: "brand.500",
    }}
    {...props}
  />
);

export const DialogTertiaryAction = (props: DialogActionProps) => (
  <Button variant="tertiary" bgColor="error.900" border="none" {...props} />
);
