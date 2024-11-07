"use client";
import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";

export default function UpsertTransactionButton() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        className="rounded-full max-[370px]:p-0 max-[370px]:px-2"
        onClick={() => setDialogIsOpen(true)}
      >
        Adicionar Transação
        <ArrowDownUpIcon className="max-[370px]:hidden"></ArrowDownUpIcon>
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
}
