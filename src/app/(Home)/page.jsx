import Hero from '../ui/Hero';
import SectionHeading from '../ui/SectionHeading';
import IconBox from '../ui/IconBox';
import Button from '../ui/Button';
import Accordion from '../ui/Accordion';
import Cta from '../ui/Cta';
import heroImage from '../../../public/images/a.jpg';
import VideoPlayer from '../ui/videoPlayer';
import CtaStyle3 from '../ui/Cta/CtaStyle3';
import SectionHeadingStyle2 from '../ui/SectionHeading/SectionHeadingStyle2';
import IconBoxStyle4 from '../ui/IconBox/IconBoxStyle4.jsx';
import IconBoxStyle5 from '../ui/IconBox/IconBoxStyle5.jsx';
import FeatureCardStyle3 from '../ui/FeatureCard/FeatureCardStyle3.jsx';
import FeatureCardStyle4 from '../ui/FeatureCard/FeatureCardStyle4';
import HeroStyle3 from '../ui/Hero/HeroStyle3';
import heroBanner from '../../../public/images/new/a.jpeg';
import featuredImg1 from '../../../public/images/new/car.jpeg';
import featuredImg2 from '../../../public/images/new/door.jpeg';
import featuredImg3 from '../../../public/images/new/store.jpeg';



export default function HomeTest() {
  return (
    <>
     <>
      <HeroStyle3
        title="Professional Locksmith
in <span className='text-gradient-primary'>Pickerington aand Surroundings</span>"
        subTitle="Automotive, Residential, & Commercial Lock & Key Services"
        bnt1Text="Call Us"
        btn1Url="/contact"
        btn2Text="Email Us"
        btn2Url="/contact"
        alertMessage="<span className='text-primary'>*100% free </span> to get started. No credit card required."
        thumbImg={heroBanner}
      />
      <section className="section section-0 has-shape">
        <div className="nk-shape bg-shape-blur-d start-50 bottom-0" />
        <div className="nk-shape bg-shape-blur-e mt-n12 me-n10 end-50" />
      </section>
      <section className="section section-lg section-bottom-0 has-shape">
        <div className="nk-shape bg-shape-blur-g mt-n20p start-50" />
        <div className="nk-shape bg-shape-blur-h translate-middle-y top-50 end-50" />
        <div className="nk-shape bg-shape-blur-i mb-n30p bottom-0 start-50" />
        <div className="container">
          <FeatureCardStyle3
            number="01"
            title="Automotive Locksmith"
            subtitle="Our mobile locksmith services are fast, affordable, and can be at your location immediately,
             typically arriving within the hour or less. Providing automotive locksmith services in Columnus,
             Ohio is one of our specialties. Contact us or learn more on our automotive locksmith services."
            imgUrl={featuredImg1}
            svgBgUrl="/images/svgbg/1.svg"
            svgBgUrlClass="position-absolute top-0 start-0 mt-n5 ms-n3 me-6 z-index-n1"
          />
          <FeatureCardStyle4
            number="02"
            title="Residential Locksmith"
            subtitle="From lockouts to new keys, our local locksmiths provide best in class lock 
            and key solutions at an affordable cost. We can repair, rekey, and make sure your locks
             provide peace-of-mind having a secure house or apartment.
             Learn more about our residential locksmith services."
            // featureList={[
            //   'At vero eos et accusamus et iusto',
            //   'At vero eos et accusamus et iusto',
            // ]}
            imgUrl={featuredImg2}
            svgBgUrl="/images/svgbg/2.svg"
            svgBgUrlClass="position-absolute top-0 start-0 mt-n5 mt-lg-n6 mt-xl-n7 ms-2 ms-sm-3 ms-md-0 ms-lg-1 me-5 me-sm-6 me-md-2 me-lg-0 me-xl-2 z-index-n1"
          />
          <FeatureCardStyle3
            number="03"
            title="Commercial Locksmith"
            subtitle="We want to ensure your business is locked tight and secure.
             Pickerington aand Surroundings Locksmith technicians will bring their experience to 
             provide the best in service at an affordable cost.
             Learn more about our commercial locksmith services."
            imgUrl={featuredImg3}
            svgBgUrl="/images/svgbg/3.svg"
            svgBgUrlClass="position-absolute top-0 start-0 mt-n5 ms-n5 z-index-n1"
          />
        </div>
      </section>
      <section className="section section-lg section-bottom-0">
        <div className="container">
          <SectionHeadingStyle2
            title="Services"
            variant="h1"
          />
          <div className="section-content">
            <div className="row g-gs">
              <div className="col-md-6 col-xl-4">
                <IconBoxStyle4
                  iconBoxBgClass="bg-primary"
                  iconClass="globe"
                  title="Emergency Lockout Service:"
                  subTitle="Rapid response to get you back inside your property in case of a lockout emergency."
                  variant="h-100"
                />
              </div>
              <div className="col-md-6 col-xl-4">
                <IconBoxStyle4
                  iconBoxBgClass="bg-info"
                  iconClass="flag"
                  title="Transponder Chip Keys and Remotes Replaced"
                  subTitle="Quick replacement of malfunctioning or lost transponder keys and remote fobs for all vehicle types."
                  variant="h-100"
                />
              </div>
              <div className="col-md-6 col-xl-4">
                <IconBoxStyle4
                  iconBoxBgClass="bg-purple"
                  iconClass="edit"
                  title="All Types of Automotive Locks Replaced"
                  subTitle="Comprehensive replacement services for any automotive lock, ensuring your vehicle’s security."
                  variant="h-100"
                />
              </div>
              <div className="col-md-6 col-xl-4">
                <IconBoxStyle4
                  iconBoxBgClass="bg-warning"
                  iconClass="signal"
                  title="Broken Keys Extracted"
                  subTitle="Expert removal of broken keys from locks and ignition systems without causing damage."
                  variant="h-100"
                />
              </div>
              <div className="col-md-6 col-xl-4">
                <IconBoxStyle4

                  iconBoxBgClass="bg-danger"
                  iconClass="briefcase"
                  title="Residential & Commercial"
                  subTitle="Professional lock and key services tailored for both home and business security needs."
                  variant="h-100"
                />
              </div>
              <div className="col-md-6 col-xl-4">
                <IconBoxStyle4
                  iconBoxBgClass="bg-success"
                  iconClass="chat-msg"
                  title="Trunks Opened"
                  subTitle="Efficient unlocking of car trunks, whether due to lost keys or malfunctioning locks."
                  variant="h-100"
                />
                </div>
                <div className="col-md-6 col-xl-4">
                                <IconBoxStyle4
                  iconBoxBgClass="bg-success"
                  iconClass="chat-msg"
                  title="High Security Ignition Keys Replaced"
                  subTitle="Replacement of high-security ignition keys with precision for enhanced vehicle protection."
                  variant="h-100"
                />
                </div>
                <div className="col-md-6 col-xl-4">
                                <IconBoxStyle4
                  iconBoxBgClass="bg-success"
                  iconClass="chat-msg"
                  title="Ignitions Replaced"
                  subTitle="Complete ignition system replacement to restore your vehicle’s functionality and security."
                  variant="h-100"
                />
                </div>
                <div className="col-md-6 col-xl-4">
                                <IconBoxStyle4
                  iconBoxBgClass="bg-success"
                  iconClass="chat-msg"
                  title="Locks Re-Keyed"
                  subTitle="Re-keying services to update your locks and ensure only authorized individuals have access."
                  variant="h-100"
                />
                </div>
                <div className="col-md-6 col-xl-4">
                                <IconBoxStyle4
                  iconBoxBgClass="bg-success"
                  iconClass="chat-msg"
                  title="Ignition Stuck Repair"
                  subTitle="Skilled repair of stuck ignition systems to get your vehicle running smoothly again."
                  variant="h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaStyle3
        title="Ready to get started?"
        subTitle="We will be here to help you"
        btnText="Call Us"
        btnLink="/contact"
      />
      {/* <GoogleMapComponent /> */}
      {/* <MapComponent /> */}
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97966.24141379677!2d-82.74547864975526!3d39.88666709136412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88387ae56aa4f7e9%3A0x10fcb9f0430f407b!2sPickerington%2C%20OH!5e0!3m2!1sen!2sus!4v1728600787368!5m2!1sen!2sus"
  // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196735.6177041502!2d-83.03711933608328!3d39.91812775023101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88387ae56aa4f7e9%3A0x10fcb9f0430f407b!2sPickerington%2C%20OH!5e0!3m2!1sen!2sus!4v1728600230523!5m2!1sen!2sus"
  width="100%"
  height="350"
  style={{ border: 10 }}  // Correct JSX style prop format
  allowFullScreen=""  // Use camelCase for allowFullScreen in JSX
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"  // Also camelCase
></iframe>
    </>
    </>
  );
}
