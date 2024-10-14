// import './css/style.css';
import './css/style-s3.css';
import './css/custom.css';
// import 'leaflet/dist/leaflet.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: {
    absolute: '',
    default: 'Pickerington Local Locksmith',
    template:
      '%s | Pickerington Local Locksmith',
  },
  description: 'Local Locksmith Around Locksmith',
  openGraph: {
    title: 'Pickerington Local Locksmith',
    description:
      'Pickerington Local Locksmith',
    images: ['/openGraphImage.jpeg'],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Laralink" />
      </head>
      <body data-menu-collapse="lg">{children}
 <Analytics />
      </body>
    </html>
  );
}
