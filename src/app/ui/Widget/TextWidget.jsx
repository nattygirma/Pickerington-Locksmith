import Logo from '../Logo';

export default function TextWidget({
  logoUrl,
  darkLogoUrl,
  title,
  subTitle,
  variant,
  titleClass,
}) {
  return (
    <div className={variant ? `block-text ${variant}` : 'block-text'}>
      {/* <Logo
        logoUrl={logoUrl}
        darkLogoUrl={darkLogoUrl}
        width={165}
        href="/"
        linkClasses="logo-link mb-4"
      /> */}
      <h2>Pickerington Local Locksmith</h2>
      {title && <h4 className={`title ${titleClass}`}>{title}</h4>}
      <p>{subTitle}</p>
    </div>
  );
}
