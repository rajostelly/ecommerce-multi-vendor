import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { CustomCategory } from "../types";

type CategoriesSidebarProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: CustomCategory[]; // TODO : Remove this later
};

const CategoriesSidebar = ({
  open,
  onOpenChange,
  data,
}: CategoriesSidebarProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="p-0 transition-none"
        style={{ backgroundColor: "white" }}
      >
        <SheetHeader className="border-b">
          <SheetTitle>Categories</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CategoriesSidebar;
