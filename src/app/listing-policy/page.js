import PolicyPage from "../components/PolicyPage";

const sections = [
  {
    heading: "Prohibited items and listings",
    items: [
      "Users must not list, post, or provide information relating to goods, services, content, or information that is illegal under the laws of India or prohibited by this policy.",
      "GoJobin prohibits listings relating to alcoholic beverages, tobacco products, drugs, narcotics, intoxicants, medicines, palliative or curative substances, or any goods or services prohibited under applicable law.",
      "Listings involving human remains, body parts, blood, bodily fluids, prostitution, obscene material, mature-audience material, offensive sexual material, or content that violates standards of morality and decency are not permitted.",
      "Users may not post religious items or descriptions likely to affect religious sentiments, defamatory or abusive material, fraudulent information, counterfeit goods, pirated goods, stolen goods, or unauthorized illegal services.",
      "Listings must not infringe intellectual property, publicity, privacy, moral rights, trade secrets, or proprietary rights of any third party.",
    ],
  },
  {
    heading: "Restricted and unlawful content",
    items: [
      "Users must not transmit computer viruses, hacking tools, malicious programs, or any content intended to damage computer systems, intercept personal data, or compromise network security.",
      "Hate content, derogatory or slanderous content, threats, harassment, or content advocating violence against individuals or groups is prohibited.",
      "Hazardous chemicals, pesticides, fireworks, explosives, destructive devices, weapons, ammunition, identity documents, personal financial records, lottery tickets, sweepstakes entries, and items prohibited under applicable Indian law are not allowed.",
      "Listings relating to securities, financial instruments, protected wildlife, animal parts, government insignia, uniforms, badges, emblems, or restricted government items are prohibited.",
    ],
  },
  {
    heading: "Advertisement and listing standards",
    items: [
      "Your listing, information, or advertisement must not be defamatory, misleading, fraudulent, unlawfully threatening, unlawfully harassing, or related to counterfeit, stolen, illegal, or unauthorized goods or services.",
      "Duplicate advertisements with the same content or title in the same city and category are not allowed. Repeated duplicate listings may be removed and users may be penalized.",
      "Listings must be placed in the correct category and city. International listings, incorrect locations, wrong categories, spam, abusive listings, and fraud schemes are not permitted.",
      "Users must ensure that all information submitted is accurate, lawful, and posted only with proper authority.",
    ],
  },
  {
    heading: "Consequences of breach",
    items: [
      "Users who violate this Listing Policy may face suspension or termination of membership.",
      "GoJobin may permanently block access to the site for users who breach prohibited or restricted listing policies.",
      "Where required, violations may be reported to law enforcement agencies or appropriate authorities.",
    ],
  },
];

const paragraphs = sections.flatMap((section) => section.items);

export const metadata = {
  title: "Listing Policy | GoJobin",
  description: "GoJobin listing policy and prohibited listing standards.",
};

export default function ListingPolicy() {
  return (
    <PolicyPage
      eyebrow="Policy"
      title="Listing Policy"
      intro="This policy explains the standards users must follow while posting, listing, or sharing information on GoJobin."
      paragraphs={paragraphs}
    />
  );
}
