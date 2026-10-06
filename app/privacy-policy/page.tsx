import { placeholders, site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { LegalDocument, type LegalSection } from "@/components/sections/LegalDocument";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How RadixGlide collects, uses and protects personal information shared through this website.",
  path: "/privacy-policy",
});

const contactEmail = site.contact.email || placeholders.email;

const sections: LegalSection[] = [
  {
    title: "Who we are",
    review: true,
    paragraphs: [
      `This Privacy Policy explains how ${site.name} ("we", "us", "our") handles personal information collected through this website.`,
      "[ADD REGISTERED COMPANY NAME, REGISTRATION NUMBER AND REGISTERED ADDRESS]",
    ],
  },
  {
    title: "Information we collect",
    list: [
      "Information you provide through our contact form, such as your name, company name, email address, phone or WhatsApp number, budget range and message.",
      "Information you share when you contact us by email, phone or WhatsApp.",
      "Technical information such as browser type, device information and pages visited, collected through cookies or analytics tools where enabled.",
    ],
  },
  {
    title: "How we use your information",
    list: [
      "To respond to your enquiries and provide quotations.",
      "To deliver and support the services you request.",
      "To improve our website and services.",
      "To meet legal and regulatory obligations.",
    ],
  },
  {
    title: "Legal basis for processing",
    review: true,
    paragraphs: [
      "[CONFIRM THE LEGAL BASES THAT APPLY IN YOUR JURISDICTION — e.g. consent, contract, legitimate interests — AND THE APPLICABLE DATA PROTECTION LAW (such as the UAE PDPL, GDPR or other local regulations).]",
    ],
  },
  {
    title: "Sharing your information",
    review: true,
    paragraphs: [
      "We do not sell your personal information. We may share it with trusted service providers who help us operate our business — for example email, hosting, CRM, form-processing or analytics providers — only as needed to provide our services.",
      "[LIST THE THIRD-PARTY PROCESSORS YOU USE AND ANY INTERNATIONAL DATA TRANSFERS.]",
    ],
  },
  {
    title: "Cookies and analytics",
    review: true,
    paragraphs: [
      "[DESCRIBE ANY COOKIES, ANALYTICS OR ADVERTISING PIXELS USED ON THIS WEBSITE AND HOW VISITORS CAN MANAGE THEIR PREFERENCES.]",
    ],
  },
  {
    title: "Data retention",
    review: true,
    paragraphs: [
      "We keep personal information only for as long as necessary for the purposes described in this policy. [ADD SPECIFIC RETENTION PERIODS.]",
    ],
  },
  {
    title: "Your rights",
    review: true,
    paragraphs: [
      "Depending on your location, you may have rights to access, correct, delete or restrict the use of your personal information, and to withdraw consent. To make a request, contact us using the details below.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We use reasonable technical and organisational measures to protect personal information. However, no method of transmission over the internet is completely secure.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: ["We may update this policy from time to time. The latest version will always be available on this page."],
  },
  {
    title: "Contact us",
    paragraphs: [`For privacy questions or requests, contact us at ${contactEmail}.`],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      intro="How we collect, use and protect the information you share with us."
      updated="[ADD DATE]"
      sections={sections}
    />
  );
}
