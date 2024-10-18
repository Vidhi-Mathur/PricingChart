"use client";
import { useState } from "react";
import { Column } from "@/components/UI/Column";
import { ToggleButton } from "@/components/UI/ToggleButton";

const plans = [{
    heading: "Trial",
    subheading: "Try now",
    tagline: "Get personalized template",
    points: [
      "25+ data sources",
      "GPT4, LinkedIn and others",
      "Access to slack community",
      "10+ templates to scale your outbound",
    ],
    ending: ["Explore product capabilities"],
    buttonTxt: "Try Now",
  },{
    heading: "Growth",
    subheading: "$229/month",
    tagline: "$459",
    points: [
      "8,000 Credits",
      "Webhook, HTTP API",
      "Credit rollover (up to 2x plan credits)",
      "Outbound email integrations like Instantly, Smartlead.",
      "Dedicated 3 hours from Bitscale expert",
    ],
    ending: [
      "Unlimited leads search",
      "Fully enriched 5000 leads",
      "Personalized outreach at scale",
    ],
    buttonTxt: "Continue with Growth",
    badge: true,
    badgeTxt: ["50% off"],
  }, {
    heading: "Booster",
    subheading: "$499/month",
    tagline: "$999",
    points: [
      "25,000 Credits",
      "Webhook, HTTP API",
      "Credit rollover (up to 2x plan credits)",
      "Outbound email integrations like Instantly, Smartlead.",
      "Dedicated 3 hours from Bitscale expert",
      "Advanced models like Claude Sonnet",
      "Dedicated 8 hours from Bitscale expert",
      "2 way Hubspot integration",
    ],
    ending: [
      "Unlimited leads search",
      "Fully enriched 15000 leads",
      "Personalized outreach at scale",
    ],
    buttonTxt: "Continue with Booster",
    booster: true,
    badge: true,
    badgeTxt: ["50% off", "Popular"],
  },{
    heading: "Enterprise",
    subheading: "Contact Us",
    tagline: "For individual pricing",
    points: [
      "Data privacy certification",
      "Priority Support",
      "Dedicated Bitscale expert",
      "Private Slack Channel",
      "Collaborative workspace and templates",
    ],
    ending: [
      "Perfect for High-Volume End-to-End CRM Data Enrichment",
      "Unlimited list of leads with unlimited data points",
    ],
    buttonTxt: "Try Now",
  },
];

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(false);
  const annualToggler = () => {
    setIsAnnual(prev => !prev)
  }
  return (
    <div className="w-full max-w-7xl mx-auto p-5">
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-2 border border-black rounded-md p-1">
          <ToggleButton label="Monthly" isActive={!isAnnual} onClick={annualToggler} />
          <button className={`w-10 h-6 rounded-full p-1 ${isAnnual ? "bg-black" : "bg-gray-300"}`} onClick={annualToggler}>
            <div className={`w-4 h-4 rounded-full bg-white transform transition-transform ${isAnnual ? "translate-x-4" : "" }`}/>
          </button>
          <ToggleButton label="Annual" isActive={isAnnual} onClick={() => setIsAnnual(true)} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-2 border-black rounded-lg p-6">
        {plans.map((plan, index) => (
          <Column key={index} {...plan} />
        ))}
      </div>
    </div>
  );
}
