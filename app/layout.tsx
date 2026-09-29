import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Agudike Uchechukwu Maryrose | Portfolio',
  description:
    'Official portfolio of Agudike Uchechukwu Maryrose. Computer Science Graduate, UI/UX Designer, Web Developer, Database Specialist, and Digital Marketer based in Enugu State, Nigeria.',
  openGraph: {
    title: 'Agudike Uchechukwu Maryrose | Portfolio',
    description:
      'Computer Science Graduate, UI/UX Designer, Web Developer, Database Specialist, and Digital Marketer.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agudike Uchechukwu Maryrose | Portfolio',
    description:
      'Computer Science Graduate, UI/UX Designer, Web Developer, Database Specialist, and Digital Marketer.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${plusJakartaSans.variable}`}>
      <body className="bg-[#070D1E] text-slate-100 min-h-screen selection:bg-[#7C3AED] selection:text-white font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}


