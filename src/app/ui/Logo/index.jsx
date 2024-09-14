import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ logoUrl, darkLogoUrl, linkClasses, width }) {
  return (
    <Link href="/" className={`${linkClasses ? linkClasses : 'logo-link'}`}>
      <div className="logo-wrap">
        <Image className="logo-img logo-light" src={darkLogoUrl} alt="Logo" width={width}/>
        <Image className="logo-img logo-dark" src={logoUrl} alt="Logo" />
      </div>
    </Link>
  );
}
