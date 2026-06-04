import Image from "next/image";

import type { ServiceCatalogItem } from "./service-catalog-data";
import { cn } from "@/lib/utils";

type ServiceCatalogItemCardProps = {
  item: ServiceCatalogItem;
  index: number;
  tracking?: "tight" | "tighter" | "normal";
};

export function ServiceCatalogItemCard({
  item,
  index,
  tracking = "tight",
}: ServiceCatalogItemCardProps) {
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-[8px] border border-[#E1D2BF] bg-[#FDF8F3]">
      <Image
        src={item.image}
        alt={item.title}
        width={600}
        height={400}
        className="w-full 3xl:h-[191px] object-cover"
      />

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-bold uppercase text-[#1E1E1E] 2xl:text-xl">
          {index + 1}. {item.title}
        </h3>
        <p className={cn("mt-2 text-sm text-[#4A4A4A] font-medium leading-tight 2xl:text-lg", tracking === "tight" && "tracking-tight", tracking === "tighter" && "tracking-tighter", tracking === "normal" && "tracking-normal")}>
          {item.description}
        </p>
      </div>
    </article>
  );
}
