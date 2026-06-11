export const membershipPlans = [
  {
    number: 1,
    name: "Access",
    heading: "Everyday Convenience.",
    description: "For those moments when an extra hand makes all the diffference.",
    features: [
      "Housekeeping",
      "Laundry/Dry Cleaning/Tailor",
      "Restaurant & Events Reservations",
      "Private Transportation",
      "Flowers & Home Decoration",
      "Gifts & Special Delivery",
      "Furniture Assembly",
    ],
    price: 0,
    highlighted: false,
    icon: "/membership/1.png"
  },
  {
    number: 2,
    name: "Preferred",
    heading: "Your time, protected.",
    description: "Expanded services and priority support to simplify your weekly life.",
    features: [
      "Babysitting",
      "Wellness & Beauty",
      "Moving Services",
      "Pet Care",
      "Shoe & Bag Repair",
      "Home Organization & Closet Styling",
      "Returns & Shipping Service",
    ],
    price: 59,
    highlighted: true,
    badge: "Most Popular",
    icon: "/membership/2.png"
  },
  {
    number: 3,
    name: "Dedicated",
    heading: "Life Fully Managed.",
    description: "Full-service lifestyle management with discretion, precision & care.",
    features: [
      "Personal Shopping",
      "Travel Planning (Domestic & International)",
      "Event Planning & Catering/Private Chef & Bartender",
      "Members Only Events",
      "Doctors Appointment",
      "Vehicle Care Services",
      "Restaurant Access/Last Minute Requests",
    ],
    price: 99,
    highlighted: false,
    icon: "/membership/3.png"
  },
] as const;

export type MembershipPlan = (typeof membershipPlans)[number];
