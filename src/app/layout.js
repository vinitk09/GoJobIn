import "./globals.css";

export const metadata = {
  title: "GoJobin | Coming Soon",
  description:
    "GoJobin's main website is under development and coming soon.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
