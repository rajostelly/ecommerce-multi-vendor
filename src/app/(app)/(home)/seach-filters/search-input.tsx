"use client";

import React, { useState } from "react";
import { BookmarkCheckIcon, ListFilterIcon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import Link from "next/link";

import { CategoriesSidebar } from "./categories-sidebar";

type SearchInputProps = {
  disabled?: boolean;
};

export const SearchInput = ({ disabled }: SearchInputProps) => {
  const trpc = useTRPC();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const session = useQuery(trpc.auth.session.queryOptions());
  return (
    <div className="flex items-center gap-2 w-full">
      <CategoriesSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
        <Input
          className="pl-8"
          placeholder="Search products"
          disabled={disabled}
        />
      </div>
      <Button
        variant="elevated"
        className="size-12 shrink-0 flex lg:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <ListFilterIcon className="size-4" />
      </Button>
      {/* TODO : Add library button */}
      {session.data?.user && (
        <Button asChild variant="elevated">
          <Link href="/library">
            <BookmarkCheckIcon /> Library
          </Link>
        </Button>
      )}
    </div>
  );
};
