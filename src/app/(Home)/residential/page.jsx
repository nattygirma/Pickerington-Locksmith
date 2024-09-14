import Hero from '../../ui/Hero/index.jsx';
import SectionHeading from '../../ui/SectionHeading/index.jsx';
import IconBox from '../../ui/IconBox/index.jsx';
import Button from '../../ui/Button/index.jsx';
import Accordion from '../../ui/Accordion/index.jsx';
import Cta from '../../ui/Cta/index.jsx';
import CtaStyle3 from '../../ui/Cta/CtaStyle3.jsx';
import SectionHeadingStyle2 from '../../ui/SectionHeading/SectionHeadingStyle2.jsx';
import IconBoxStyle4 from '../../ui/IconBox/IconBoxStyle4.jsx';
import IconBoxStyle5 from '../../ui/IconBox/IconBoxStyle5.jsx';
import FeatureCardStyle3 from '../../ui/FeatureCard/FeatureCardStyle3.jsx';
import FeatureCardStyle4 from '../../ui/FeatureCard/FeatureCardStyle4.jsx';
import HeroStyle3 from '../../ui/Hero/HeroStyle3.jsx';
import heroBanner from '../../../../public/images/new/a.jpeg';
import featuredImg1 from '../../../../public/images/new/r1.jpeg';
import featuredImg2 from '../../../../public/images/new/door.jpeg';
import featuredImg3 from '../../../../public/images/new/r2.jpeg';



export default function HomeTest() {
  return (
    <>
     <>
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
            title="New Locks & Key Extract"
            subtitle="Are you looking to get a new lock or perhaps you have broken a key in your door.
             Our residential locksmiths take the safety and security of your home serious. Whether you have 
             a broken key stuck inside the front door of your home or just want to change your locks,
              we are ready to help. We can do service calls, new lock installation, and home key extract
               to repair your locks."
            imgUrl={featuredImg1}
            svgBgUrl="/images/svgbg/1.svg"
            svgBgUrlClass="position-absolute top-0 start-0 mt-n5 ms-n3 me-6 z-index-n1"
          />
          <FeatureCardStyle4
            number="02"
            title="Residential Rekey & Master Rekey"
            subtitle="Sometimes you just need to have your home lock re-keyed. Our residential 
            and home locksmiths can have your door re-keyed and ready to keep you safe and secure.
             With an experienced technician, we work fast, efficient, and affordable. Get in touch 
             today to get started!"
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
            title="Residential Lock Repair"
            subtitle="Time and nature can take it’s course on any lock, let alone the
             wear and tear from locking your door. Home should always feel safe and secure,
             but having a broken lock can disturb your peace at home. We specialize 
             in residential home lock repair offering both fast and affordable solutions in 
             Westerville,
              Ohio. Contact us today for all your residential lock repair needs."
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
        btnLink="/login"
      />
    </>
    </>
  );
}
