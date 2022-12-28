import styles from "../../styles/Home.module.css"
import Head from 'next/head'
export default function PrivacyPolicy() {
    return (
        <div >
            <Head>
                <title>Privacy Policy-Task Aggregator</title>
                <meta name="description" content="Our Privacy Policy" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Our Privacy Policy
                </h1>
                <div className={styles.grid}>
                    <p className={styles.description}>
                        At Zencoder, we are committed to protecting your privacy and personal information. This privacy policy explains how we collect, use, and share your personal information when you use our app, Zencoder.
                    </p>
                    <h1 className={styles.h2_title}>
                        Information We Collect
                    </h1>
                    <p className={styles.description}>
                        When you use Zencoder, we may collect the following types of information:
                    </p>
                    <ol className={styles.description}>
                        <li>1. Personal information that you provide to us: This may include your name, email address, and any other personal information that you choose to provide to us when you create an account or use our app.</li>
                        <li>2. Information about your use of Zencoder: This may include information about how you use our app, such as which features you access and how often you access them.</li>
                        <li>3. Information from third-party APIs: We may collect information from third-party APIs, such as Google Cloud APIs, Notion APIs, and Slack API, in order to provide the custom collection of deadlines feature in Zencoder. This may include information about your deadlines and tasks.</li>
                    </ol>
                    <h1 className={styles.h2_title}>
                        How We Use Your Information
                    </h1>
                    <p className={styles.description}>
                        We use the information that we collect from you for the following purposes:
                    </p>
                    <ol className={styles.description}>
                        <li>1. To provide and improve our app: We use the information we collect to provide and improve Zencoder, including to personalize your experience and to help us understand how users are using our app.</li>
                        <li>2. To communicate with you: We may use your personal information to communicate with you about your account, to respond to your inquiries, and to provide you with information about our app and its features.</li>
                        <li>3. For research and development: We may use the information we collect for research and development purposes, in order to improve and enhance Zencoder.</li>
                    </ol>
                    <h1 className={styles.h2_title}>
                        How We Share Your Information
                    </h1>
                    <p className={styles.description}>
                        We will not sell, rent, or share your personal information with third parties for their marketing purposes without your consent. We may share your personal information with third parties in the following circumstances:
                    </p>
                    <ol className={styles.description}>
                        <li>1. With service providers: We may share your personal information with service providers who perform services on our behalf, such as hosting and maintenance, data analysis, and customer service. These service providers are required to maintain the confidentiality of your personal information and are prohibited from using it for any other purpose.</li>
                        <li>2. As required by law: We may disclose your personal information if we are required to do so by law or if we believe in good faith that such action is necessary to comply with legal proceedings, to respond to claims, or to protect the rights, property, or safety of our company, our users, or the public.</li>
                    </ol>
                    <h1 className={styles.h2_title}>
                        Your Choices
                    </h1>
                    <p className={styles.description}>
                        You have the following choices with respect to your personal information:
                    </p>
                    <ol className={styles.description}>
                        <li>1. You may opt out of receiving promotional communications from us by following the unsubscribe instructions in the communication or by contacting us at [contact information].</li>
                        <li>2. You may update your personal information or delete your account at any time by logging into your account and making the necessary changes. Please note that if you delete your account, we may retain certain information as required by law or for legitimate business purposes.</li>
                        <li>3. You may object to the processing of your personal information, request that your personal information be erased, or request that the processing of your personal information be restricted. You may also have the right to data portability, which allows you to receive a copy of your personal information in a structured, commonly used, and machine-readable format. To exercise any of these rights, please contact us at [contact information].</li>
                    </ol>
                    <h1 className={styles.h2_title}>
                        Data Security
                    </h1>
                    <p className={styles.description}>
                        We have implemented appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or method of electronic storage is completely secure, and we cannot guarantee the security of your personal information.
                    </p>
                    <h1 className={styles.h2_title}>Changes to This Privacy Policy</h1>
                    <p className={styles.description}>
                        We may update this privacy policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons. We encourage you to review this privacy policy periodically for the latest information on our privacy practices.
                    </p>
                    <h1 className={styles.h2_title}>Contact Us</h1>
                    <p className={styles.description}>
                        If you have any questions about this privacy policy or our privacy practices, please contact us at [contact information].

                        This privacy policy was last updated on [insert date].

                        Thank you for choosing Zencoder. We appreciate your trust in us and are committed to protecting your privacy.
                    </p>


                </div>

            </main>
        </div>
    )
}