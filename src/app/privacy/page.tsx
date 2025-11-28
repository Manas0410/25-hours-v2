export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-200 mt-32">
      <h1 className="text-4xl font-bold mb-6 text-white">Privacy Policy</h1>
      <p className="mb-4 text-gray-400">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

      <p className="mb-4 text-gray-300">
        This Privacy Policy describes how{" "}
        <strong className="text-white">25hour</strong> (“we”, “our”, or “us”),
        owned by <strong className="text-white">Manas Srivastava</strong>,
        collects, uses, protects, and shares your information when you use the
        25hour mobile application and website located at{" "}
        <a href="https://25hours.site" className="text-blue-400 underline">
          https://25hours.site
        </a>
        .
      </p>

      <SectionTitle title="Information We Collect" />
      <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-300">
        <li>Email address</li>
        <li>Username</li>
        <li>Connected app tokens like Google Calendar</li>
        <li>Task, reminder, productivity & scheduling data created by you</li>
      </ul>

      <SectionTitle title="How We Use Your Information" />
      <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-300">
        <li>Create and manage your account</li>
        <li>Provide task planning, automation & productivity tracking</li>
        <li>Enable integrations such as Google Calendar</li>
        <li>Improve app performance and features</li>
        <li>Analyze behavior for UX improvement</li>
        <li>Enable future advertisements</li>
      </ul>

      <SectionTitle title="Third-Party Services We Use" />
      <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-300">
        <li>Clerk – Authentication & identity</li>
        <li>Stripe – Payments & subscriptions (upcoming)</li>
        <li>Google Analytics – Usage insights (upcoming)</li>
        <li>Google AdMob – Advertising (upcoming)</li>
        <li>Custom Ad Partners – Future advertisement integrations</li>
        <li>MongoDB Atlas – Cloud storage</li>
        <li>AI APIs – Task automation & recommendations</li>
      </ul>

      <SectionTitle title="Data Storage & Security" />
      <p className="mb-4 text-gray-300">
        Your data is securely stored on{" "}
        <strong className="text-white">MongoDB Atlas</strong> with encryption
        and protective measures to prevent unauthorized access and misuse.
      </p>

      <SectionTitle title="Account & Data Deletion" />
      <p className="mb-4 text-gray-300">
        You can delete your account and data anytime inside the app or by
        emailing:
      </p>
      <p className="font-semibold text-white mb-4">
        manasshrivastava0410@gmail.com
      </p>

      <SectionTitle title="Advertising" />
      <p className="mb-4 text-gray-300">
        We may show ads in the future using Google AdMob and custom ad networks.
        These may use anonymized device or behavioral information but never
        personally identifiable data.
      </p>

      <SectionTitle title="Children’s Privacy" />
      <p className="mb-4 text-gray-300">
        25hour is intended for general use with no specific age restriction. We
        do not knowingly collect data from children under 13.
      </p>

      <SectionTitle title="Changes to This Policy" />
      <p className="mb-4 text-gray-300">
        We may update this policy occasionally. Continued use of the app
        indicates acceptance of updates.
      </p>

      <SectionTitle title="Contact Us" />
      <p className="text-gray-300 mb-2">For privacy inquiries, reach us at:</p>
      <p className="font-semibold text-white">manasshrivastava0410@gmail.com</p>
      <p className="text-gray-400 mt-2">Kanpur, Uttar Pradesh, India</p>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">{title}</h2>
  );
}
