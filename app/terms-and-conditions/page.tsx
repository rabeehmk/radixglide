import { placeholders, site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { LegalDocument, type LegalSection } from "@/components/sections/LegalDocument";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description: "The terms that apply when you use the RadixGlide website and engage our services.",
  path: "/terms-and-conditions",
});

const contactEmail = site.contact.email || placeholders.email;

const sections: LegalSection[] = [
  {
    title: "Introduction",
    review: true,
    paragraphs: [
      `These Terms & Conditions govern your use of this website operated by ${site.name}. By using the website you agree to these terms.`,
      "[ADD REGISTERED COMPANY NAME, REGISTRATION NUMBER AND REGISTERED ADDRESS]",
    ],
  },
  {
    title: "Use of this website",
    list: [
      "You may use this website for lawful purposes only.",
      "You must not attempt to gain unauthorised access to the website, its servers or any connected systems.",
      "You must not use the website to transmit harmful, offensive or unlawful material.",
    ],
  },
  {
    title: "Services and quotations",
    review: true,
    paragraphs: [
      "Information on this website about our services and packages is for general guidance only. Any engagement is governed by a separate written proposal, quotation or agreement, which takes precedence over these terms.",
    ],
  },
  {
    title: "Intellectual property",
    review: true,
    paragraphs: [
      `All content on this website — including text, graphics, logos and design — belongs to ${site.name} or its licensors unless stated otherwise, and may not be reproduced without permission.`,
      "Ownership of work delivered under a client project is defined in the relevant project agreement.",
    ],
  },
  {
    title: "Third-party links",
    paragraphs: [
      "This website may link to third-party websites. We are not responsible for the content or practices of those websites.",
    ],
  },
  {
    title: "Limitation of liability",
    review: true,
    paragraphs: [
      "[INSERT LIMITATION OF LIABILITY WORDING APPROVED BY YOUR LEGAL ADVISOR.]",
    ],
  },
  {
    title: "Governing law",
    review: true,
    paragraphs: ["[SPECIFY GOVERNING LAW AND JURISDICTION.]"],
  },
  {
    title: "Changes to these terms",
    paragraphs: ["We may update these terms from time to time. Continued use of the website means you accept the updated terms."],
  },
  {
    title: "Contact",
    paragraphs: [`Questions about these terms can be sent to ${contactEmail}.`],
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms & Conditions"
      intro="The terms that apply when you use our website and services."
      updated="[ADD DATE]"
      sections={sections}
    />
  );
}
