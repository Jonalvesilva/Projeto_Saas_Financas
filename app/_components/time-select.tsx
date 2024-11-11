"use client";
import { Select, SelectContent, SelectItem, SelectValue } from "./ui/select";
import { monthYearsObjCreate } from "../_constants/constants";
import { SelectTrigger } from "@radix-ui/react-select";
import { ArrowDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function TimeSelect() {
  const { push } = useRouter();

  const handleMonthChange = (monthYear: string) => {
    const handle = monthYear.split("/");
    push(`/?month=${handle[0]}&year=${handle[1]}`);
  };

  const searchParams = useSearchParams();
  const [selectedValue, setSelectedValue] = useState<string>("");

  useEffect(() => {
    const month = searchParams.get("month");
    const year = searchParams.get("year");

    if (month && year) {
      setSelectedValue(`${month}/${year}`);
    } else {
      setSelectedValue(""); // Resetando o select caso não tenha month/year na URL
    }
  }, [searchParams]); // Dependendo do searchParams, ele vai atualizar o select

  return (
    <Select
      value={selectedValue}
      onValueChange={(value) => handleMonthChange(value)}
    >
      <SelectTrigger className="border-2 w-[140px] h-12 mt-2 min-[450px]:w-fit min-[450px]:h-8 min-[450px]:mt-0 border-white rounded-full flex items-center justify-center gap-x-2 px-4">
        <SelectValue placeholder="Mês - Ano" />
        <ArrowDown size={20} />
      </SelectTrigger>
      <SelectContent>
        {monthYearsObjCreate(Number(new Date().getFullYear()) - 1).map(
          (item) => (
            <SelectItem
              key={`${item.month}/${item.year}`}
              value={`${item.month}/${item.year}`}
              className="cursor-pointer"
            >
              {`${item.label}`}
            </SelectItem>
          ),
        )}
      </SelectContent>
    </Select>
  );
}
