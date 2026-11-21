import "./styles.css";

export const metadata = {
  title: "Hexagonal Work Index | Huzaifa Jayyad",
  description: "Selected work by Huzaifa Jayyad, full-stack developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
