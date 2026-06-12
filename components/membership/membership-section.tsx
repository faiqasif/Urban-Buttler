import { MembershipCard } from "./membership-card";
import { membershipPlans } from "./membership-data";

const MembershipSection = () => {
  return (
    <section className="bg-[#FDF8F2] border-b border-[#E1D2BF]">
      <div className="mx-auto max-w-7xl w-full px-6 py-10 sm:px-10 xl:max-w-[1820px] 3xl:px-16 xl:py-11.25">
        <div className="mx-auto text-center">
          <p className="text-xs font-semibold uppercase text-primary sm:text-sm lg:text-base xl:text-lg">
            Membership
          </p>

          <h2 className="mt-3 font-heading text-[2rem] leading-[1.15] font-medium text-[#1E1E1E] sm:text-4xl">
            Choose how much of your life you want handled.
          </h2>

          <p className="mt-4 text-base text-[#545454] font-medium tracking-[-0.015em] sm:text-lg xl:text-2xl">
            Flexible plans. Personalized service. Always on your terms.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-6 xl:gap-8 2xl:max-w-[1660px] 3xl:px-[80px]">
          {membershipPlans.map((plan) => (
            <MembershipCard key={plan.name} plan={plan} />
          ))}
        </div>
        <div className="text-center px-5 text-lg lg:text-xl 3xl:text-2xl font-medium text-[#545454] self-center w-full mt-8">
          Service fees are applied and vary by membership level.
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
