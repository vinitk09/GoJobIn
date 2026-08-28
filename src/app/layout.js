import "./globals.css";

export const metadata = {
  title: "GoJobin | Coming Soon",
  description:
    "GoJobin's main website is under development and coming soon.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
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
