import './globals.css'
import { Inter } from 'next/font/google'
import ThemeRegistry from './Theme/ThemeRegistry';

const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: 'K Store',
  description: 'K Store for Electronics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
