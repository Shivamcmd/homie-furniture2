import { Search, ShieldCheck, Truck, RefreshCw } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Browse & Select",
    description:
      "Pick from 1000+ premium walnut items for every room.",
    icon: <Search size={32} className="text-blue-600" />,
    bg: "bg-blue-50",
  },
  {
    id: 2,
    title: "KYC & Security",
    description:
      "Complete quick KYC and pay a minimal refundable deposit.",
    icon: <ShieldCheck size={32} className="text-purple-600" />,
    bg: "bg-purple-50",
  },
  {
    id: 3,
    title: "Free Delivery",
    description:
      "Get free delivery and professional assembly within 48 hours.",
    icon: <Truck size={32} className="text-orange-600" />,
    bg: "bg-orange-50",
  },
  {
    id: 4,
    title: "Enjoy & Swap",
    description:
      "Live with it, love it, or swap it for something new after 6 months.",
    icon: <RefreshCw size={32} className="text-green-600" />,
    bg: "bg-green-50",
  },
];

const HowItWorksSection = () => {
  return (
<section className="py-14 px-4 md:py-24 md:px-16 bg-[#8b5e3b]">
  {/* Heading */}
  <div className="text-center mb-12 md:mb-20">
    <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
      4 Easy Steps to Your Dream Home
    </h2>
    <p className="text-sm md:text-base text-white max-w-xl md:max-w-2xl mx-auto">
      Renting with Homie is designed to be as comfortable as the furniture we provide.
    </p>
  </div>

  {/* Steps Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative">
    {steps.map((step) => (
      <div
        key={step.id}
        className="text-center group"
      >
        {/* Icon Box */}
        <div
          className={`w-16 h-16 md:w-24 md:h-24 mx-auto flex items-center justify-center 
          rounded-2xl md:rounded-3xl shadow-sm ${step.bg} relative
          transition-all duration-300 ease-out
          group-hover:-translate-y-3 group-hover:shadow-md`}
        >
          {/* Smaller icon for mobile */}
          <div className="scale-75 md:scale-100">
            {step.icon}
          </div>

          {/* Step Number Badge */}
          <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 
          w-6 h-6 md:w-8 md:h-8 flex items-center justify-center 
          bg-white shadow rounded-full 
          text-xs md:text-lg font-semibold text-[#4B2E2B]">
            {step.id}
          </div>
        </div>

        {/* Text Content */}
        <h3 className="mt-5 md:mt-8 text-base md:text-xl font-semibold text-white">
          {step.title}
        </h3>
        <p className="mt-2 md:mt-3 text-xs md:text-sm text-white leading-relaxed px-2 md:px-0">
          {step.description}
        </p>
      </div>
    ))}
  </div>
</section>
  );
};

export default HowItWorksSection;
