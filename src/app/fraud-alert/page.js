import PolicyPage from "../components/PolicyPage";

const sections = [
  {
    heading: "Fraud Alert",
    paragraphs: [
      "We have observed that from time to time, fake job postings are listed online and non-existing job offers are sent via email to illegally collect personal information and/or money from unsuspecting job seekers.",
      "Please note that GoJobin does not approve of, or represent any employer or recruiter sending such fraudulent communication, which in fact are a violation of our Terms of Use.",
      "GoJobin website is committed to providing the safest possible environment for you to search and apply to jobs and manage your career.",
      "Here are some tips to help you deal with suspicious Job offers, Links or mails:",
    ],
    items: [
      {
        label: "i.",
        text: "Any offer appearing too good to be true, must be cross checked before any communication with the originator of such offers / contents.",
      },
      {
        label: "ii.",
        text: "Do not give your identification information unless you are confident that the other party is who they claim to be. For example, you could ask them for a call-back number to use for verification purposes.",
      },
      {
        label: "iii.",
        text: "Be careful when providing credit card or bank information, or engaging in any monetary transactions. Be sure to verify the legitimacy of the employer with whom you are interacting.",
      },
      {
        label: "iv.",
        text: "Do not provide any non-work-related personal information, such as Identification no, eye color, marital status, etc., over the phone or online.",
      },
      {
        label: "v.",
        text: "Be aware of any job offerings which arrive in e-mail unsolicited and ultimately require anyone to pay a fee in advance, particularly if the fee is asked to be paid through a financial services or if one must pay the amount to a bank or person in a third country that is suspiciously unrelated to either party.",
      },
    ],
  },
  {
    heading: "Educate yourself about Internet and Email Fraud/Scams",
    paragraphs: [
      "In our effort to curb the practice of fraudulent usage of information over the Internet, we want our users to be aware of the most common kinds of Internet fraud.",
      "We encourage you to read the following and make yourself aware of the warning signs. There are two types of email scams - Phishing and Spoofing. In both the cases, the from address is forged to make it appear as if it came from a source that it actually did not come from.",
    ],
  },
  {
    heading: "What is Phishing?",
    paragraphs: [
      "Phishing is an attempt by fraudsters to fish for your personal details.",
      "A phishing attempt is usually in the form of an e-mail, which encourages you to click a link that takes you to a fraudulent log-on page designed to capture your account/password/personal details.",
      "These emails can also be used to lure the recipient into downloading harmful software. Please note that Gojobin.com will never ask you to download software in order to access your account.",
    ],
  },
  {
    heading: "What is Spoofing?",
    paragraphs: [
      "Spoof emails usually include a fraudulent offer of employment and/or an invitation to perform a monetary transaction.",
      "Such email scams are, unfortunately, common across the world and could target anyone - including unsuspecting jobseekers who have registered with Gojobin.com.",
      "The sender's address is often disguised and/or the sender may not have provided the entire contact information, such as, the correct physical address, phone numbers and email ID.",
      "The precautionary measures jobseekers could take to protect themselves against suspected spoof emails have been mentioned above.",
    ],
  },
];

export const metadata = {
  title: "Fraud Alert | GoJobin",
  description:
    "GoJobin fraud alert and safety tips for suspicious job offers, links, emails, phishing, and spoofing.",
};

export default function FraudAlert() {
  return (
    <PolicyPage
      eyebrow="Safety"
      title="Fraud Alert"
      intro="Important guidance to help jobseekers identify suspicious job offers, links, emails, phishing attempts, and spoof messages."
      sections={sections}
    />
  );
}
