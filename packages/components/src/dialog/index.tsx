import { useDisclosure } from "@chakra-ui/react";
import {
  DialogActions,
  DialogPrimaryAction,
  DialogSecondaryAction,
  DialogTertiaryAction,
} from "./actions";
import { DialogBody } from "./body";
import { DialogHeader } from "./header";
import { DialogModal } from "./modal";
import { DialogSection } from "./section";

export const Dialog = {
  Header: DialogHeader,
  Modal: DialogModal,
  Body: DialogBody,
  Actions: DialogActions,
  PrimaryAction: DialogPrimaryAction,
  SecondaryAction: DialogSecondaryAction,
  TertiaryAction: DialogTertiaryAction,
  Section: DialogSection,
};

export const useModal = useDisclosure;

export type DialogType = typeof Dialog;
