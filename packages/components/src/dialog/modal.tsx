import {
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  type ModalProps,
  Text,
} from "@chakra-ui/react";

export interface DialogModalProps extends ModalProps {
  hideCloseButton?: boolean;
}

const DialogModal = (props: DialogModalProps) => {
  const { children, ...rest } = props;

  const hideCloseButton = props?.hideCloseButton ?? false;

  return (
    <Modal
      variant="glassmorphic"
      size="2xl"
      blockScrollOnMount={false}
      isCentered
      {...rest}
    >
      <ModalOverlay />
      <ModalContent rounded="3xl">
        {!hideCloseButton && (
          <Flex w="full" align="center" justifyContent="flex-end">
            <HStack
              onClick={props.onClose}
              cursor="pointer"
              spacing={2}
              zIndex={1}
            >
              <Text fontWeight="normal" color="white">
                Close
              </Text>
              {/*<CloseIcon />*/}
            </HStack>
          </Flex>
        )}
        <ModalBody
          w="full"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { DialogModal };
