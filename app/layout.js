import "./globals.css";

export const metadata = {
  title: "Henry Ameen Charles | Business Automation",
  description:
    "Smarter systems, less manual work, and more room for business growth. Explore business automation solutions by Henry Ameen Charles."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
