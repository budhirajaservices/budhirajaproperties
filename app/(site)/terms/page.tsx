import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | Budhiraja Services",
  description: "Read the terms and conditions governing your use of Budhiraja Services products and services.",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 prose prose-slate max-w-3xl">
      <h1 className="!mb-2">Terms & Conditions</h1>
      <p className="!mt-0 text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>

      <h2>1. Agreement</h2>
      <p>
        These Terms & Conditions (the “Terms”) constitute a legally binding agreement between you (“Client”) and
        Budhiraja Services (“Provider”). By using our services, you agree to be bound by these Terms.
      </p>

      <h2>2. Services</h2>
      <p>
        We provide website design, development, and related services as outlined in individual proposals or statements
        of work. Deliverables, timelines, and pricing will be specified prior to project start.
      </p>

      <h2>3. Payments</h2>
      <ul>
        <li>Projects typically require an upfront deposit to begin work.</li>
        <li>Remaining balances are due upon delivery or milestones, as agreed.</li>
        <li>Late payments may delay delivery or result in suspension of services.</li>
      </ul>

      <h2>4. Client Responsibilities</h2>
      <ul>
        <li>Provide timely feedback, content, and approvals to keep the project on schedule.</li>
        <li>Ensure you own or have rights to use all content you supply.</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>
        Upon full payment, the Client owns the final website output delivered under the agreement. Provider may retain
        ownership of underlying tools, libraries, and non‑exclusive know‑how used to produce the deliverables.
      </p>

      <h2>6. Revisions & Acceptance</h2>
      <p>
        Reasonable revisions are included as specified in the proposal. Work is considered accepted upon written
        approval or 7 days after delivery if no issues are reported.
      </p>

      <h2>7. Warranties & Limitations</h2>
      <p>
        Services are provided “as is.” To the maximum extent permitted by law, Provider disclaims all warranties and is
        not liable for indirect, incidental, or consequential damages.
      </p>

      <h2>8. Maintenance & Support</h2>
      <p>Ongoing maintenance or updates are available as a separate service unless explicitly included in your plan.</p>

      <h2>9. Termination</h2>
      <p>
        Either party may terminate with written notice if the other party materially breaches these Terms and fails to
        cure within a reasonable period.
      </p>

      <h2>10. Governing Law</h2>
      <p>These Terms are governed by the laws of the applicable jurisdiction where Budhiraja Services operates.</p>

      <h2>11. Contact</h2>
      <p>
        Questions about these Terms? Email us at{" "}
        <a href="mailto:budhirajaservices@gmail.com">budhirajaservices@gmail.com</a>.
      </p>
    </div>
  )
}
