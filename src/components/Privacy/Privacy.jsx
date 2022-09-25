import React from "react";
import styles from './Privacy.module.css';

const Privacy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <h2 className={styles.subTitle}>Investation Inc. Privacy Policy</h2>
      </div>
        <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from https://investation.com/ (the “Site”).</p>
      <div className='mt-4'>
        <h2>Personal Information We Collect</h2>
        <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages, searches you run, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”</p>
        <p className='mt-4'>We collect Device Information using the following technologies:</p>
        <div className='mt-4'>
          <ul>
            <li>“Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.</li>
            <li>“Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
            <li>“Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.</li>
          </ul>
        </div >
        <p>Additionally when you create an account, make a purchase, or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, email address, and phone number.) We refer to this information as “Order Information.”</p>
        <p>When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.</p>
      </div >
      <div className='mt-4'>
        <h2>How Do We Use Your Personal Information?</h2>
        <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, providing you with invoices, and/or order confirmations).  Additionally, we use this Order Information to:</p>
        <ul>
          <li>Communicate with you</li>
          <li>Screen our orders for potential risk or fraud</li>
          <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
        </ul>
        <p>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our subscribers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>
      </div>
      <div className='mt-4'>
        <h2>Sharing Your Personal Information</h2>
        <p>All subscriber information collected by Investation is held confidential. We do not sell our subscriber list nor give out personal contact information. Information is collected for the sole purpose of providing services to our subscribers and for notifying them of improvements to our products and services.</p>
        <p>We may share your Personal Information with third party service providers as necessary to: provide you with the services that we offer you through our Site; conduct quality assurance testing; facilitate creation of accounts; process any payments; provide technical support; and/or provide other services.</p>
        <p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>
      </div>
      <div className='mt-4'>
        <h2>Behavioral Advertising</h2>
        <p>As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you.  For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.</p>
        <p className='mb-2'>You can opt out of targeted advertising by:</p>
        <p className='mb-2'><b>FACEBOOK</b> – https://www.facebook.com/settings/?tab=ads</p>
        <p className='mb-2'><b>GOOGLE</b> – https://www.google.com/settings/ads/anonymous</p>
        <p className='mb-2'><b>BING</b> – https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</p>
        <p>Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at:  http://optout.aboutads.info/.</p>
      </div>
      <div className='mt-4'>
        <h2>Do Not Track</h2>
        <p>Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.</p>
      </div>
      <div className='mt-4'>
        <h2>Data Retention</h2>
        <p>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>
      </div>
      <div className='mt-4'>
        <h2>Changes</h2>
        <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>
      </div>
      <div className='mt-4'>
        <h2>Contact Us</h2>
        <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at support@investation.com</p>
      </div>
      <div className='mt-4'>
        <h2>Last Update: 09/25/2022</h2>
      </div>
    </div>
  );
};

export default Privacy;
