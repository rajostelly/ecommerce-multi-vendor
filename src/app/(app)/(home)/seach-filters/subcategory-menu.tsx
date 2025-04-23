import Link from "next/link";

import { Category } from "@/payload-types";
import { CategoriesGetManyOutput } from "@/modules/categories/types";

type SubcategoryMenuProps = {
  category: CategoriesGetManyOutput[1];
  isOpen: boolean;
  position: { top: number; left: number };
};

export const SubcategoryMenu = ({
  category,
  isOpen,
  position,
}: SubcategoryMenuProps) => {
  if (
    !isOpen ||
    !category.subcategories ||
    category.subcategories.length === 0
  ) {
    return null;
  }

  const backgroundColor = category.color || "#F5F5F5";

  return (
    <div
      className="fixed z-1000"
      style={{ top: position.top, left: position.left }}
    >
      {/* Invisible bridge to maintain hover */}
      <div className="h-3 w-60" />
      <div
        style={{ backgroundColor }}
        className="w-60 text-black rounded-md overflow-hidden border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-[2px] -translate-y-[2px]"
      >
        {category.subcategories.map((subCategory: Category) => (
          <Link
            key={subCategory.slug}
            href={`/${category.slug}/${subCategory.slug}`}
            className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center underline font-medium"
          >
            {subCategory.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
