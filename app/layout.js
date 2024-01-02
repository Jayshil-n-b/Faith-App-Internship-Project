import "./globals.css";

export const metadata = {
  title: "Live Devotional Courses",
  description: "Purchase courses online with exciting discounts!!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
