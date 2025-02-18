export const metadata = {
  title: "AFC Fire - Studio",
  description: "Content Management System for AFC Fire",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
