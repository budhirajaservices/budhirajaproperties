import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Shield, Users, Zap, Award, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Get your website live in days, not months. We work efficiently without compromising quality.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "SSL certificates, regular backups, and security best practices keep your site protected.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our experienced developers and designers create websites that convert visitors into customers.",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description: "Lightning-fast loading speeds and optimized performance for better user experience and SEO.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "We stand behind our work with revisions and support to ensure you're completely satisfied.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description: "We're here to help even after launch with maintenance, updates, and technical support.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-3xl font-bold">Why choose Budhiraja Services?</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We combine technical expertise with creative design to deliver websites that not only look great but also
          drive results for your business.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-3">
              <feature.icon className="h-6 w-6 text-orange-500" />
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
