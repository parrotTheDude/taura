// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "TAURA",
  description: "Welcome to Taura",
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