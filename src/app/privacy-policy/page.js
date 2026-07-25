import PolicyPage from "../components/PolicyPage";

const sections = [
  {
    heading: "Collection of information",
    items: [
      "When you use GoJobin, we may collect information that you share with us to provide job search, recruitment, enquiry, account, and related services.",
      "Personal information may include your name, phone number, email address, contact details, address, username, demographic details, city, PIN code, location preference, resume details, transaction details, usage logs, server logs, cookies, and other information you provide while using the website.",
      "We may also collect non-personal information such as browser information, IP address, URLs visited before or after our website, location signals, session duration, date and time of access, web beacons, aggregate usage data, and transaction data.",
      "Cookies may be used to improve website functionality. You may choose to disable cookies in your browser, but some website features may not work properly.",
    ],
  },
  {
    heading: "Use of information",
    items: [
      "Information provided by users may be used to respond to enquiries, provide customer support, improve website features, customize user experience, process requests, and communicate important service updates.",
      "We may use your information to communicate offers, invoices, policies, surveys, advertisements, administrative information, and marketing communications that may be relevant to you.",
      "Information may also be used to detect and prevent fraud, diagnose server issues, administer the website, protect website integrity, support lawful investigations, and comply with applicable legal obligations.",
    ],
  },
  {
    heading: "Sharing and disclosure",
    items: [
      "We may share information with corporate entities, affiliates, service providers, payment processors, customer support providers, hosting providers, analytics providers, IT service providers, and other parties that support our business or services.",
      "We do not sell, trade, or rent personal information except as described in this policy or where consent is obtained.",
      "We may disclose information if required by law, court order, legal process, law enforcement request, government authority, or where necessary to investigate illegal activities, suspected fraud, safety threats, or violations of our terms and policies.",
      "If our business or assets are merged, acquired, reorganized, or transferred, user information may be shared with the relevant business entity, which would be required to follow this policy.",
    ],
  },
  {
    heading: "Security precautions",
    items: [
      "We strive to protect personal information against unauthorized access, alteration, disclosure, or destruction through reasonable security practices.",
      "We may conduct internal reviews of data collection, storage, processing practices, and security measures to check for vulnerabilities.",
      "No internet-based service can guarantee absolute security. GoJobin cannot warrant that user information will be 100% secure in every circumstance.",
      "GoJobin shall not be responsible for loss, damage, or misuse of information caused by events beyond reasonable control, including force majeure events, hacking, system failure, unauthorized access, or security breaches.",
    ],
  },
  {
    heading: "User discretion, consent, and updates",
    items: [
      "Users should be careful while sharing information online, as information posted or submitted through website features may be read, collected, or used by other users or third parties.",
      "Users may opt out of non-essential promotional or marketing communications where such options are made available.",
      "By accessing or using GoJobin, you acknowledge that you have read, understood, and agreed to this Privacy Policy and consent to the use and disclosure of information in accordance with it.",
      "This Privacy Policy may be updated from time to time due to changes in law, business, or regulatory requirements. Users are encouraged to review it periodically.",
    ],
  },
  {
    heading: "Grievance contact",
    items: [
      "For complaints or grievances related to privacy, users may contact the GoJobin team at info@gojobin.com.",
    ],
  },
];

const paragraphs = sections.flatMap((section) => section.items);

export const metadata = {
  title: "Privacy Policy | GoJobin",
  description: "GoJobin privacy policy for collection, use, and protection of user information.",
};

export default function PrivacyPolicy() {
  return (
    <PolicyPage
      eyebrow="Policy"
      title="Privacy Policy"
      intro="This Privacy Policy explains how GoJobin collects, uses, shares, protects, and manages user information."
      paragraphs={paragraphs}
    />
  );
}
