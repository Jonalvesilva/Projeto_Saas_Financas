"use client";
import { PencilIcon } from "lucide-react";
import { Button } from "../../_components/ui/button";
import { useState } from "react";
import UpsertTransactionDialog from "@/app/_components/upsert-transaction-dialog";
import { Transaction } from "@prisma/client";

interface Props {
  transaction: Transaction;
}

export default function EditTransactionButton({ transaction }: Props) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setDialogIsOpen(true)}>
        <PencilIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        defaultValues={{ ...transaction, amount: Number(transaction.amount) }}
        transactionId={transaction.id}
      />
    </>
  );
}
