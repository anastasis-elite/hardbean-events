import "./globals.css";

export const metadata = {
  title: "Hard Bean Event Center",
  description: "Warm and welcoming event space for gatherings and celebrations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
