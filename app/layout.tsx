// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "TAURA",
  description: "SOUL-FUELED | SPIRIT-DRIVEN"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script data-collect-dnt="true" async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}