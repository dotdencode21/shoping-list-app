import { ReactNode } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

interface BaseModalProps {
  modalTrigger: ReactNode;
  title: string;
  children: ReactNode;
  onSubmit: () => void;
  submitButtonLabel?: string;
  disableSubmitButton?: boolean;
}

export default function BaseModal({
  modalTrigger,
  title,
  children,
  submitButtonLabel = "Save",
  disableSubmitButton = false,
  onSubmit,
}: BaseModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{modalTrigger}</DialogTrigger>
      <DialogContent className="flex flex-col gap-4 bg-neutral-100">
        <DialogHeader>
          <DialogTitle className="text-2xl text-slate-800">{title}</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter>
          <DialogClose asChild>
            <Button
              onClick={onSubmit}
              disabled={disableSubmitButton}
              className="bg-purple-600 text-base text-neutral-100"
            >
              {submitButtonLabel}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
