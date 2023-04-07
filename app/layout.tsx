import Link from 'next/link';
import "../styles/globals.css";

export default function RootLayout({ 
  children
}: { 
  children: React.ReactNode 
}) {

  const header = (
    <header>
      <div>
        <Link href="/">
        <h1>Akbar's Blog</h1>
        </Link>
        <p>Welcome to my tech blog.</p>
        <br />
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div>
        <br />
        <h3>Developed by Akbar</h3>
      </div>
    </footer>
  )

  return (
    <html>
      <head />
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}