import Image from "next/image";
import { ServingFoodIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const ContactStandardSection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 xl:max-w-[1820px] xl:px-11.25 xl:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)] xl:gap-6 2xl:gap-8 3xl:grid-cols-[minmax(0,1fr)_739px_minmax(0,1fr)] 3xl:gap-10">
          <div className="flex flex-col justify-center lg:pr-4 xl:pr-6 3xl:pr-10">
            <p className="text-xs font-bold uppercase text-primary sm:text-sm">
              Expect More.
            </p>

            <h2 className="mt-2 font-heading text-[1.75rem] font-medium leading-snug text-[#1E1E1E] sm:text-3xl xl:text-4xl">
              Experience the{" "}
              <span className="text-primary">Urban Butler standard.</span>
            </h2>

            <p className="mt-4 text-sm font-medium tracking-tight text-[#545454] sm:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl">
              Discretion. Precision. Care. That&apos;s not just how we
              work—it&apos;s who we are.
            </p>
          </div>

          <Image
            src="/contact/last.png"
            alt="Urban Butler concierge opening a luxury car door in white gloves"
            width={739}
            height={243}
            className="h-auto w-full min-w-0 rounded-sm object-cover lg:justify-self-end xl:justify-self-center"
          />

          <div className="flex flex-col justify-center border-t border-[#E1D2BF] pt-8 lg:col-span-2 xl:col-span-1 xl:border-t-0 xl:border-l xl:pt-0 xl:pl-6 3xl:pl-10">
            <HugeiconsIcon
              icon={ServingFoodIcon}
              size={56}
              strokeWidth={1.25}
              className="text-primary"
            />

            <p className="mt-4 max-w-xl text-sm font-medium tracking-tight text-[#545454] sm:text-base xl:max-w-none 3xl:max-w-[226px]">
              Once you connect with us, your concierge experience begins the
              moment you need it.
            </p>

            <p className="mt-4 text-xs font-bold uppercase text-primary sm:text-sm xl:text-base 3xl:mt-1 3xl:max-w-[180px]">
              We look forward to serving you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactStandardSection;
