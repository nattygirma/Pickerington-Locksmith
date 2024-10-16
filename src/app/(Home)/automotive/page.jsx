import Hero from '../../ui/Hero';
import SectionHeading from '../../ui/SectionHeading';
import IconBox from '../../ui/IconBox';
import Button from '../../ui/Button';
import Accordion from '../../ui/Accordion';
import Cta from '../../ui/Cta';
import CtaStyle3 from '../../ui/Cta/CtaStyle3';
import SectionHeadingStyle2 from '../../ui/SectionHeading/SectionHeadingStyle2';
import IconBoxStyle4 from '../../ui/IconBox/IconBoxStyle4.jsx';
import IconBoxStyle5 from '../../ui/IconBox/IconBoxStyle5.jsx';
import FeatureCardStyle3 from '../../ui/FeatureCard/FeatureCardStyle3.jsx';
import FeatureCardStyle4 from '../../ui/FeatureCard/FeatureCardStyle4';
import HeroStyle3 from '../../ui/Hero/HeroStyle3';
import heroBanner from '../../../../public/images/new/a.jpeg';
import featuredImg1 from '../../../../public/images/new/car.jpeg';
import featuredImg2 from '../../../../public/images/new/door.jpeg';
import featuredImg3 from '../../../../public/images/new/store.jpeg';



export default function HomeTest() {
  return (
    <>
     <>
      <section className="section section-0 has-shape ">
        <div className="nk-shape bg-shape-blur-d start-50 bottom-0" />
        <div className="nk-shape bg-shape-blur-e mt-n12 me-n10 end-50" />
      </section>
      <section className="section section-lg section-bottom-0 has-shape margin-bottom">
        <div className="nk-shape bg-shape-blur-g mt-n20p start-50" />
        <div className="nk-shape bg-shape-blur-h translate-middle-y top-50 end-50" />
        <div className="nk-shape bg-shape-blur-i mb-n30p bottom-0 start-50" />
        <div className="container">
          <FeatureCardStyle3
            number="01"
            title="Ignition Repair & Replacement"
            subtitle="Did you try to turn your car over but found your key is stuck? 
            There is a good chance your ignition switch is bad and needs replaced. Our auto locksmith services can come to you and rekey to the original ignition. 
            Our fast mobile service will help get you back on the road again, pronto."
            imgUrl={featuredImg1}
            svgBgUrl="/images/svgbg/1.svg"
            svgBgUrlClass="position-absolute top-0 start-0 mt-n5 ms-n3 me-6 z-index-n1"
          />
          <FeatureCardStyle4
            number="02"
            title="Broken Car Key & Extract"
            subtitle="Sometimes a key will break off into the cylinder
             of your car door or trunk. Maybe you have a spare but are 
             stuck with a key in the cylinder. In any situation, our 
             locksmith technician is fast, mobile, and able to extract your key. 
             With a trained auto locksmith you can have your broken key replaced, fixed,
             and extracted in a timely manner. Contact us today!"
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
             Westerville Mobile Locksmith technicians will bring their experience to 
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
        btnLink="/login"
      />
    </>
    </>
  );
}
