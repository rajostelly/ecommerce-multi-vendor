import configPromise from "@payload-config";
import { getPayload } from "payload";

import { Footer } from "./footer";
import { Navbar } from "./navbar";
import SearchFilters from "./seach-filters";
import { Category } from "@/payload-types";
import { format } from "path";
import { CustomCategory } from "./types";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1, // Populate the subcategories field
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
    sort: "name",
  });

  const formattedData: CustomCategory[] = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      // Because of "depth 1", we are confident that doc is a type of Category
      ...(doc as Category),
      subcategories: undefined, // to make sure we don't have a child category inside a child category
    })),
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
