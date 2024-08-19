import strategyDevelopmentImage from "@/assets/strategy.svg";
import messagingAlignmentImage from "@/assets/messagingAlignment.svg";
import testingImage from "@/assets/testing.svg";
import audienceTargetingImage from "@/assets/Audience.svg";
import accountStructureImage from "@/assets/accountStructure.svg";

export const navigation = [
  {
    id: 0,
    title: "Home",
    url: "/",
  },
  {
    id: 1,
    title: "Services",
    url: "#services",
  },
  {
    id: 2,
    title: "Our Process",
    url: "#process",
  },
  {
    id: 3,
    title: "About Us",
    url: "/about",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];

export const tabs = [
  {
    id: 1,
    title: "Strategy Development",
    image: strategyDevelopmentImage,
    description:
      "We develop a customized social media strategy that is fully aligned with your business goals and brand vision. This strategic blueprint ensures every effort is purposeful, driving meaningful growth and engagement.",
    point1: "Analyze brand and market",
    point2: "Set clear objectives and KPIs",
    point3: "Develop a detailed action plan",
  },
  {
    id: 2,
    title: "Messaging Alignment",
    image: messagingAlignmentImage,
    description:
      "We refine and harmonize your brand’s messaging across all social media platforms to create a consistent, authentic voice that deeply resonates with your audience, fostering trust and loyalty.",
    point1: "Craft a unified message",
    point2: "Align with audience values",
    point3: "Adapt tone per platform",
  },
  {
    id: 3,
    title: "Account Structure",
    image: testingImage,
    description:
      "We optimize the organization and structure of your social media accounts to enhance performance, streamline management, and ensure brand consistency across all touchpoints.",
    point1: "Optimize profiles",
    point2: "Implement consistent branding",
    point3: "Organize content themes",
  },
  {
    id: 4,
    title: "Audience Targeting",
    image: audienceTargetingImage,
    description:
      "We leverage data-driven insights to precisely identify and target the most relevant audience segments, ensuring your content reaches those who are most likely to engage and convert.",
    point1: "Define target audience",
    point2: "Use advanced targeting tools",
    point3: "Tailor content to audience",
  },
  {
    id: 5,
    title: "Testing",
    image: testingImage,
    description:
      "We continuously test, analyze, and optimize your social media strategy to ensure maximum effectiveness, allowing for data-driven adjustments that keep your campaigns ahead of the curve.",
    point1: "Conduct A/B testing",
    point2: "Analyze performance data",
    point3: "Optimize based on results",
  },
];
