import PolicyPage from "../components/PolicyPage";

const paragraphs = [
  "This is to inform all concerned that Vidi Meth Digital Service (OPC) Private Limited provides gojobin.com as a free service to jobseekers.",
  "GoJobin.com does not guarantee any interview/meeting/discussion with any employer basis any amount of initial monetary payment by the jobseeker.",
  "GoJobin.com is not responsible for, and expressly disclaims all liability for, any such communication via email, sms or phone call by a frivolous source claiming to have got the contact details of the person concerned through or representing GoJobin.com.",
  "Jobseekers are advised not to indulge in any monetary engagement with such sources in the name of guaranteed interviews with employers.",
];

export const metadata = {
  title: "Disclaimer | GoJobin",
  description:
    "GoJobin disclaimer about free services for jobseekers and warning against monetary engagement for guaranteed interviews.",
};

export default function Disclaimer() {
  return (
    <PolicyPage
      title="Disclaimer"
      paragraphs={paragraphs}
      variant="document"
    />
  );
}
