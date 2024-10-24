import { UnAuthunticatedNav } from "./_components/UnauthenticatedNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body
        >
          <UnAuthunticatedNav />
          {children}
        </body>
      </html>
  );
}
