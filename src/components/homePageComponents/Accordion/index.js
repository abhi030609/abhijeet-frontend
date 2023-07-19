import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
// import chevronDown from "./chevron-down.svg";
import styles from "./styles.module.css";
import { TfiArrowCircleDown } from "react-icons/tfi";
import "./index.css";

const ProductMarketingandManagement = [
  "Develop and execute product marketing strategies to drive awareness, generate leads, and increase product adoption.",
  "Analyze and track product performance, including key metrics and market trends, to inform strategic decisions and optimize marketing campaigns.",
  "Conduct market research and competitor analysis to identify market opportunities, understand customer needs, and differentiate products.",
  "Manage the product lifecycle from ideation to launch, including pricing, positioning, and go-to-market strategies.",
  "Create and maintain product documentation, including user guides, FAQs, and case studies.",
  "Collaborate with cross-functional teams, including sales, product development, and customer service, to ensure alignment and maximize product success.",
  "Deliver compelling product demos and presentations to prospects, customers, and internal stakeholders.",
  "Train internal teams on product features, updates, and value propositions.",
];
const MarketingStrategist = [
  "Managed and maintained the company's official website, ensuring it was up-to-date, informative, and user-friendly.",
  "Assisted in creating targeted and personalized email campaigns that effectively drove conversions.",
  "Collaborated with the design team to develop visually appealing mock-ups for marketing materials and campaigns.",
  "Utilized various marketing strategies to generate high-quality leads for the company's products.",
  "Developed and executed result-driven marketing strategies and plans aligned with business goals.",
  "Identified specific target markets and devised marketing campaigns to effectively reach and engage those markets.",
  "Conducted comprehensive market research to gather valuable customer insights and understand current market trends.",
  "Efficiently managed marketing budgets and allocated resources to maximize the impact of marketing efforts.",
  "Collaborated with sales, product development, and customer service teams to align marketing initiatives with overall business objectives.",
  "Developed and nurtured strong relationships with customers, partners, and stakeholders to drive business growth.",
  "Analyzed marketing data and metrics to measure campaign effectiveness and gain insights for future strategies.",
  "Stayed abreast of industry trends and best practices to ensure marketing efforts remained current and impactful.",
];

const MAMS = [
  "Collaborated closely with the Director and Principal of a school to execute marketing campaigns promoting the TEDx event.",
  "Developed and implemented innovative strategies as a social media marketing intern to drive engagement and enhance brand awareness on platforms like Facebook, Instagram, and LinkedIn.",
  "Achieved a remarkable 25% increase in website traffic from social media channels and a substantial 30% growth in social media followers.",
  "Produced captivating and compelling content, identifying new opportunities to effectively connect with and engage the target audience through social media.",
  "Attained an average of 50% more likes and a significant 20% increase in post engagement on social media platforms.",
  "Played a pivotal role in shaping the online presence of the TEDxMAMS brand, resulting in a notable 10% improvement in customer satisfaction as measured by online reviews and surveys.",
  "Analyzed and interpreted data to continuously monitor the performance of social media campaigns, utilizing insights to optimize strategies.",
  "Successfully decreased social media ad spend by 15% while maintaining a high level of engagement and generating quality leads.",
];

const BafnaCarsPvtLtd = [
  "Conducted thorough market research to collect and analyze data on competitors, customers, and market trends.",
  "Assisted in the development and execution of comprehensive marketing strategies, including conducting research, developing campaigns, and analyzing performance.",
  "Created and updated various marketing content, such as brochures, presentations, and social media posts, with a particular focus on YouTube.",
  "Engaged with a wide audience of over 5,000 individuals through social media platforms, resulting in a notable 20% increase in service sales within a span of 6 months, specifically through YouTube content creation.",
  "Performed various administrative tasks to support the formulation and implementation of effective marketing campaigns.",
];

const FrozenCreation = [
  "Successfully applied knowledge and skills to various business ventures, including event management companies, edtech startups, medical firms, home-based bakeries, college clubs, and educational events.",
  "Served as a marketer, brand manager, and lead generator, contributing to the growth and success of these ventures.",
  "Worked with over 10,000 targeted demographics, resulting in remarkable achievements such as increased brand awareness and lead generation for MSMEs.",
  "Delivered comprehensive market research and analysis to inform businesses' marketing strategies and goals.",
  "Manage and curate content across various media platforms, including social media handles, website, YouTube channel, emails, and more, at Frozen Creation.",
  "Oversee ongoing tasks and responsibilities at all levels, ensuring smooth operations and effective content management.",
  "Analyze data insights, perform SEO (Search Engine Optimization), and implement SEM (Search Engine Marketing) practices to optimize online visibility and performance.",
  "Proficient in Google AdWords, including on-page and off-page SEO strategies.",
  "Experienced in social media marketing, leveraging platforms to engage with the target audience and drive brand awareness.",
  "Skilled in email marketing, utilizing effective strategies to engage subscribers and drive conversions.",
  "Knowledgeable in ad servers, ensuring efficient delivery and management of digital ads.",
  "Proficient in using Google Analytics to monitor website traffic, user behavior, and campaign performance.",
  "Familiar with mobile marketing techniques to reach and engage mobile users effectively.",
  "Competent in social media monitoring, staying updated on conversations and trends to inform marketing strategies.",
  "Experienced in video optimization techniques to enhance visibility and engagement on platforms like YouTube.",
  "Proficient in affiliate marketing, collaborating with partners to drive referrals and conversions.",
  "Skilled in CRO (Conversion Rate Optimization) techniques to improve website performance and maximize conversions.",
  "Proven ability in content creation, developing engaging and compelling content across various media channels.",
];
/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        {/* <img className={styles.chevron} src={""} alt=">" /> */}
        <TfiArrowCircleDown className={styles.chevron} />
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

export default function AccordionComponent() {
  return (
    <div>
      <div className={styles.accordion}>
        {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
        <Accordion transition transitionTimeout={250}>
          {/* item 1 */}
          <AccordionItem
            header={
              <div className="accordian-item-div">
                <img
                  alt="img"
                  className="accordian-item-img"
                  src="images/Original_Logo_Symbol-removebg-preview 1.png"
                />
                <div>
                  <p className="accordianItemhead">
                    Innovation Hacks AI
                  </p>
                  <p className="accordian-item-div-para-2">
                    Product Marketing & Management
                  </p>
                </div>
              </div>
            }
          // initialEntered
          >
            <div>
              <div className="Professional-accordionSection-content-card-div">
                <h1 className="heading-1">Innovation Hacks AI Pvt. Ltd.</h1>
                <div>
                  <div className="professional-accordion-disply-flex-row">
                    <h4 className="heading-3">
                      Product Marketing & Management
                    </h4>{" "}
                    <div>
                      <h4 className="heading-3">Feb. 2022 - Present</h4>{" "}
                    </div>
                  </div>
                  <div className="professional-accordion-disply-flex-row">
                    <h4 className="heading-3">Marketing Executive</h4>{" "}
                    <div>
                      <h4 className="heading-3">Aug. 2022 - Jan. 2022</h4>{" "}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="primary-para">
                    <span className="heading-3">Overview:</span> A
                    Product/Service based Artificial intelligence startup with a
                    uniqueness of better understanding of data. Specialized in
                    data science, cloud computing, modern applications, and
                    comprehensive data services such as data warehousing.
                    Flagship Products: DataWise and MarketWatcher.
                  </p>
                </div>
                <div className="profession-section-my-role-content">
                  <div>
                    <h4 className="heading-3 professional-accordion-secton-my-role-text">
                      My Role:
                    </h4>
                  </div>
                  <div>
                    <h4 className="heading-3">
                      Product Marketing and Management | Fulltime (Feb. 2023 –
                      Present)
                    </h4>

                    <ul className="primary-para professional-accordion-secton-my-role-ul">
                      {ProductMarketingandManagement.map((eachItem) => (
                        <li>{eachItem}</li>
                      ))}
                    </ul>
                    <br />
                    <h4 className="heading-3">
                      Marketing Strategist | Fulltime (Aug. 2022 – Jan. 2023)
                    </h4>
                    <ul className="primary-para professional-accordion-secton-my-role-ul">
                      {MarketingStrategist.map((eachItem) => (
                        <li>{eachItem}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AccordionItem>
          {/* item 2 */}
          <AccordionItem
            header={
              <div className="accordian-item-div">
                <img
                  alt="img"
                  className="accordian-item-img"
                  src="/images/experiance-images/Beige Ivory Minimalist Typography Logo (5).png"
                />
                <div>
                  <p className="accordianItemhead">MAMS</p>
                  <p className="accordian-item-div-para-2">
                    Social Media Marketing Intern
                  </p>
                </div>
              </div>
            }
          // initialEntered
          >
            <div>
              <div className="Professional-accordionSection-content-card-div">
                <h1 className="heading-1">MAMS </h1>
                <div>
                  <div className="professional-accordion-disply-flex-row">
                    <h4 className="heading-3">Social Media Marketing Intern</h4>
                    <div>
                      <h4 className="heading-3">Aug. 2020 - Nov. 2020</h4>{" "}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="primary-para">
                    <span className="heading-3">Overview:</span> A Established
                    in 1985 as a non-profit, Maa Anandmayee Memorial School
                    (MAMS) is a co-educational K12 High School that was founded
                    in the memory of Divine Maa by her followers. After hectic
                    Utsavas, Maa often retired here in the village Gohri Mafi,
                    where the school is located. She had once remarked that the
                    place would become valuable one day, and what can be more
                    valuable than imparting knowledge.
                  </p>
                </div>
                <div className="profession-section-my-role-content">
                  <div>
                    <h4 className="heading-3 professional-accordion-secton-my-role-text">
                      My Role:
                    </h4>
                  </div>
                  <div>
                    <h4 className="heading-3">
                      Social Media Marketing Intern | Internship (Aug. 2020 -
                      Nov. 2020)
                    </h4>

                    <ul className="primary-para professional-accordion-secton-my-role-ul">
                      {MAMS.map((eachItem) => (
                        <li>{eachItem}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AccordionItem>
          {/* item 3 */}
          <AccordionItem
            header={
              <div className="accordian-item-div">
                <img
                  alt="img"
                  className="accordian-item-img"
                  src="/images/experiance-images/BAFNA_LOGO-removebg-preview 1.png"
                />
                <div>
                  <p className="accordianItemhead">Bafna Cars</p>
                  <p className="accordian-item-div-para-2">
                    Marketing & Brand Management Intern
                  </p>
                </div>
              </div>
            }
          // initialEntered
          >
            <div>
              <div className="Professional-accordionSection-content-card-div">
                <h1 className="heading-1">Bafna Cars Pvt. Ltd. </h1>
                <div>
                  <div className="professional-accordion-disply-flex-row">
                    <h4 className="heading-3">
                      Marketing & Brand Management Intern
                    </h4>{" "}
                    <div>
                      <h4 className="heading-3">Oct. 2019 - Mar. 2020</h4>{" "}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="primary-para">
                    <span className="heading-3">Overview:</span> A Since 1995,
                    ‘Bafna Cars’ have been the trusted choice, providing
                    complete solutions in car audio and accessories. A leading
                    Automotive brand in Pune. Redefining the boundaries of
                    customization and luxury, refurbishing old cars and
                    transforming new ones into personalized masterpieces.
                    Creating driving experiences that are unmatched with
                    exceptional range of premium accessories and meticulous
                    installations.
                  </p>
                </div>
                <div className="profession-section-my-role-content">
                  <div>
                    <h4 className="heading-3 professional-accordion-secton-my-role-text">
                      My Role:
                    </h4>
                  </div>
                  <div>
                    <h4 className="heading-3">
                      Marketing & Brand Management Intern | Internship (Oct.
                      2019 - Mar. 2020)
                    </h4>

                    <ul className="primary-para professional-accordion-secton-my-role-ul">
                      {BafnaCarsPvtLtd.map((eachItem) => (
                        <li>{eachItem}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AccordionItem>
          {/* item 4 */}
          <AccordionItem
            header={
              <div className="accordian-item-div">
                <img
                  alt="img"
                  className="accordian-item-img"
                  src="/images/experiance-images/Frozen Creation Logo 1.png"
                />
                <div>
                  <p className="accordianItemhead">Frozen Creation</p>
                  <p className="accordian-item-div-para-2">Co-Founder</p>
                </div>
              </div>
            }
          // initialEntered
          >
            <div>
              <div className="Professional-accordionSection-content-card-div">
                <h1 className="heading-1">Frozen Creation </h1>
                <div>
                  <div className="professional-accordion-disply-flex-row">
                    <h4 className="heading-3">Co-Founder</h4>{" "}
                    <div>
                      <h4 className="heading-3">Aug. 2019 – Nov. 2021</h4>{" "}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="primary-para">
                    <span className="heading-3">Overview:</span>
                    At Frozen Creation, we are a passionate and driven
                    full-service strategic media house that fuels the growth of
                    small businesses by helping them thrive digitally and
                    generate valuable leads. As an umbrella brand, we offer an
                    extensive range of premium media products and compelling
                    content across diverse channels, including print, digital,
                    audio, and social media. Our core media offerings cater to a
                    broad audience, ensuring maximum reach and engagement.
                    <br />
                    <br />
                    Operating with a mission to create impactful content and
                    operate media platforms, we deliver direct and tangible
                    results for our clients. Through our expertise in digital
                    marketing, lead generation, and media production, we provide
                    targeted business opportunities that drive success. With
                    Frozen Creation, small businesses gain access to a
                    comprehensive suite of strategic media solutions, unlocking
                    their digital potential and achieving significant growth.
                  </p>
                </div>
                <div className="profession-section-my-role-content">
                  <div>
                    <h4 className="heading-3 professional-accordion-secton-my-role-text">
                      My Role:
                    </h4>
                  </div>
                  <div>
                    <h4 className="heading-3">
                      Co-Founder | Self-Employed (Aug. 2019 – Nov. 2021)
                    </h4>

                    <ul className="primary-para professional-accordion-secton-my-role-ul">
                      {FrozenCreation.map((eachItem) => (
                        <li>{eachItem}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
