import styles from "../../styles/Home.module.css"
import Head from 'next/head'
export default function TermsAndCondition() {
    return (
        <div>

            <Head>
                <title>Terms and Conditions -Task Aggregator</title>
                <meta name="description" content="Our T&C" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Our Terms and Conditions
                </h1>
                <div className={styles.grid}>
                    <p className={styles.description}>
                        By accessing or using the Zencoder app, you agree to be bound by these terms and conditions (the "Terms"). If you do not agree to these Terms, do not use the Zencoder app.

                        Use of the Zencoder App

                        The Zencoder app is provided to you for your personal, non-commercial use. You may not use the Zencoder app for any illegal or unauthorized purpose. You may not use the Zencoder app in a manner that could damage, disable, overburden, or impair the Zencoder app or interfere with any other party's use of the Zencoder app. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the Zencoder app.

                        Intellectual Property

                        The content, design, and all intellectual property rights in and to the Zencoder app, including but not limited to text, graphics, logos, images, and software, are owned by [insert company name] or its licensors. The Zencoder app is protected by copyright and trademark laws in the United States and other countries. You may not use any content from the Zencoder app for any commercial purpose without the express written consent of [insert company name].

                        Disclaimer of Warranties

                        The Zencoder app is provided on an "as is" and "as available" basis. [Insert company name] makes no representations or warranties of any kind, express or implied, as to the operation of the Zencoder app or the information, content, materials, or products included on the Zencoder app. [Insert company name] does not warrant that the Zencoder app will be uninterrupted or error-free, and [insert company name] will not be liable for any interruptions or errors.

                        Limitation of Liability

                        [Insert company name] will not be liable for any damages of any kind arising from the use of the Zencoder app, including but not limited to direct, indirect, incidental, punitive, and consequential damages.

                        Indemnification

                        You agree to indemnify and hold [insert company name] and its affiliates, officers, agents, and employees harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of the Zencoder app, your violation of these Terms, or your violation of any rights of another.

                        Governing Law

                        These Terms shall be governed and construed in accordance with the laws of the State of [insert state], United States, without giving effect to any principles of conflicts of law.

                        Changes to These Terms

                        [Insert company name] reserves the right to modify these Terms at any time. Any changes to these Terms will be effective immediately upon posting. Your continued use of the Zencoder app after any changes have been made will constitute your acceptance of the revised Terms.

                        Termination

                        [Insert company name] reserves the right, in its sole discretion, to terminate your access to the Zencoder app at any time, without notice.

                        Miscellaneous

                        These Terms constitute the entire agreement between you and [insert company name] and govern your use of the Zencoder app. If any provision of these Terms is found to be invalid or unenforceable, that provision will beenforced to the maximum extent possible, and the remaining provisions will remain in full force and effect.

                        Contact Information

                        If you have any questions about these Terms, please contact us at [insert contact information].

                        Thank you for using Zencoder. We appreciate your business and are committed to providing you with a high-quality app experience.

                        This set of terms and conditions was last updated on [insert date].
                    </p>

                </div>

            </main>
        </div>
    )
}