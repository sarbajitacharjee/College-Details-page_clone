import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>College Dunia - Harvard University</title>
        <meta name="description" content="Harvard University information and details." />
      </head>
      <body suppressHydrationWarning >{children}</body>
    </html>
  );
}
