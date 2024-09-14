
import Header from '..//ui/Header';
import logoUrl from '../../../public/images/resumeZ-dark-logo.png';
import darkLogoUrl from '../../../public/images/resumeZ-logo.png';
import FooterStyle2 from '../ui/Footer/FooterStyle2';
import FooterStyle3 from '../ui/Footer/FooterStyle3';
import FooterStyle4 from '../ui/Footer/FooterStyle4';
import Footer from '../ui/Footer';

export default function DefaultLayout({ children }) {
  return (
    <div className="nk-app-root">
      <Header
        darkMode={false}
        varient="is-transparent"
        logoUrl={logoUrl}
        darkLogoUrl={darkLogoUrl}
        actionBtnText="Start Writing"
        actionBtnClass="btn btn-primary"
        actionBtnUrl="/"
        menuPosition="mx-auto"
        loginBtn="Login"
      />
      <main className="nk-pages">{children}</main>
      <FooterStyle4/>
    </div>
  );
}
