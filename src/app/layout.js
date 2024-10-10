// import './css/style.css';
import './css/style-s3.css';
import './css/custom.css';
// import 'leaflet/dist/leaflet.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: {
    absolute: '',
    default: 'ResumeZ - Free resume builder powered by AI',
    template:
      '%s | ResumeZ - Free resume builder powered by AI',
  },
  description: 'Free resume builder powered by AI',
  openGraph: {
    title: 'ResumeZ - Free resume builder powered by AI',
    description:
      'ResumeZ - Free resume builder powered by AI',
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
