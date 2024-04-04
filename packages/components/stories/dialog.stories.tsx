import { Box } from "@chakra-ui/react";
import { Dialog, useModal } from "../src";

export default {
  component: Dialog,
  title: "(UI) Dialog",
  argTypes: {},
};

export const Usage = () => {
  const modal = useModal();

  return (
    <Box width="full">
      <button onClick={modal.onOpen}>Open dialog</button>
      <Dialog.Modal isOpen={modal.isOpen} onClose={modal.onClose}>
        <Dialog.Header title="Dialog title" description="Dialog description" />
        <Dialog.Body>Content</Dialog.Body>
        <Dialog.Actions>
          <Dialog.PrimaryAction>Save</Dialog.PrimaryAction>
          <Dialog.SecondaryAction>Cancel</Dialog.SecondaryAction>
        </Dialog.Actions>
      </Dialog.Modal>
    </Box>
  );
};
