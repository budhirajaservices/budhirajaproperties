import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Budhiraja Services",
  description:
    "Learn how Budhiraja Services collects, uses, and protects your personal information when you use our website and services.",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 prose prose-slate max-w-3xl">
      <h1 className="!mb-2">Privacy Policy</h1>
      <p className="!mt-0 text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>

      <p>
        Your privacy is important to us. This Privacy Policy explains what information we collect, how we use it, and
        the choices you have. By using our website and services, you agree to the practices described here.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          Personal Information: such as your name, email address, phone number, and any details you provide via contact
          forms.
        </li>
        <li>
          Usage Data: including pages visited, time on site, and interactions, collected via analytics tools and
          cookies.
        </li>
        <li>Technical Data: device type, browser type, IP address, and referral information.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To respond to inquiries and provide requested services.</li>
        <li>To improve our website, services, and user experience.</li>
        <li>To communicate updates, offers, or important notices (you can opt out anytime).</li>
        <li>To maintain security, prevent fraud, and comply with legal obligations.</li>
      </ul>

      <h2>3. Cookies & Analytics</h2>
      <p>
        We use cookies and similar technologies to analyze site performance and personalize content. You can control
        cookies through your browser settings. Disabling cookies may impact certain features.
      </p>

      <h2>4. Sharing of Information</h2>
      <p>
        We do not sell your personal information. We may share limited data with trusted service providers (e.g.,
        analytics, hosting) who assist us in operating our website and delivering services, under appropriate
        confidentiality and security obligations, or when required by law.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain personal information only as long as necessary to fulfill the purposes described in this Policy or as
        required by law.
      </p>

      <h2>6. Your Rights</h2>
      <ul>
        <li>Access, update, or delete your personal information.</li>
        <li>Object to or restrict certain processing activities.</li>
        <li>Withdraw consent where processing is based on consent.</li>
      </ul>
      <p>
        To exercise these rights, contact us using the details below. We may need to verify your identity before
        fulfilling your request.
      </p>

      <h2>7. Security</h2>
      <p>
        We implement reasonable administrative, technical, and physical safeguards to protect your information. However,
        no method of transmission or storage is 100% secure.
      </p>

      <h2>8. Third‑Party Links</h2>
      <p>
        Our website may contain links to third‑party sites. We are not responsible for their content or privacy
        practices. We recommend reviewing their policies.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The “Last updated” date reflects the latest revision.
        Continued use of our site after changes indicates acceptance of the updated Policy.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        Questions about this Privacy Policy? Email{" "}
        <a href="mailto:budhirajaservices@gmail.com">budhirajaservices@gmail.com</a> or call{" "}
        <a href="tel:7015054260">7015054260</a>.
      </p>
    </div>
  )
}
