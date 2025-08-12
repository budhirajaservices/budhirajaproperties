import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us | Budhiraja Services",
  description:
    "Learn about our mission, values, and the team behind Budhiraja Services. We craft websites that help businesses grow.",
}

const team = [
  { name: "Tarun Kumar", role: "Founder & Web Developer", image: "/images/team/tarun-kumar.png" },
  { name: "Sangeeta", role: "Lead Developer", image: "/images/team/sangeeta.png" },
  { name: "Rinku Durga", role: "Marketing Manager", image: "/images/team/rinku-durga-gents.png" },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Our mission</h1>
          <p className="text-slate-600">
            We empower businesses with websites that are fast, beautiful, and effective. Our team blends strategy,
            design, and engineering to create tailored solutions that drive measurable results.
          </p>
          <h2 className="text-2xl font-semibold">Our vision</h2>
          <p className="text-slate-600">
            To be your long‑term digital partner—advising, building, and optimizing experiences that elevate your brand.
          </p>
        </div>
        <div>
          <Image src="/web-agency-team.png" alt="Our team" width={720} height={480} className="rounded-xl border" />
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Meet the team</h2>
        <p className="mt-2 text-slate-600">Experienced designers, developers, and strategists.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t) => (
            <div key={t.name} className="rounded-xl border p-6">
              <Image
                src={t.image || "/placeholder.svg"}
                alt={`Photo of ${t.name}`}
                width={96}
                height={96}
                className="mb-3 h-24 w-24 rounded-full object-cover ring-1 ring-slate-200"
              />
              <p className="font-medium">{t.name}</p>
              <p className="text-sm text-slate-600">{t.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
