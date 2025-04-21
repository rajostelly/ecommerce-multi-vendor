"use client";

import React, { useState } from "react";
import { ListFilterIcon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { CustomCategory } from "../types";
import { CategoriesSidebar } from "./categories-sidebar";

type SearchInputProps = {
  disabled?: boolean;
  data: CustomCategory[];
};

export const SearchInput = ({ disabled, data }: SearchInputProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <div className="flex items-center gap-2 w-full">
      <CategoriesSidebar
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
        data={data}
      />
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
        <Input
          className="pl-8"
          placeholder="Search products"
          disabled={disabled}
        />
      </div>
      {/* TODO : Add categories view all button */}
      <Button
        variant="elevated"
        className="size-12 shrink-0 flex lg:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <ListFilterIcon className="size-4" />
      </Button>
      {/* TODO : Add library button */}
    </div>
  );
};
