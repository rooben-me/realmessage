import "./globals.css";
import Header from "./Header";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body className="relative mx-auto max-w-5xl bg-grey-bg">
        <Header />
        {children}
      </body>
    </html>
  );
}
