"use client";
import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface AddTransactionButtonProps {
  userCanAddTransaction: boolean;
}

export default function UpsertTransactionButton({
  userCanAddTransaction,
}: AddTransactionButtonProps) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  console.log(userCanAddTransaction);
  return (
    <>
      {userCanAddTransaction ? (
        <Button
          variant="outline"
          className="rounded-full max-[370px]:p-0 max-[370px]:px-2"
          onClick={() => setDialogIsOpen(true)}
        >
          Adicionar Transação
          <ArrowDownUpIcon className="max-[370px]:hidden"></ArrowDownUpIcon>
        </Button>
      ) : (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="cursor-pointer">
                <Button
                  variant="outline"
                  className="rounded-full max-[370px]:p-0 max-[370px]:px-2"
                  disabled={!userCanAddTransaction}
                  onClick={() => setDialogIsOpen(true)}
                >
                  Adicionar Transação
                  <ArrowDownUpIcon className="max-[370px]:hidden"></ArrowDownUpIcon>
                </Button>
              </div>
            </TooltipTrigger>

            <TooltipContent>
              {!userCanAddTransaction &&
                "Você atingiu o limite de transações. Atualize seu plano"}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
}
