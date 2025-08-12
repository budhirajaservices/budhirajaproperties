import Image from "next/image"
import { Smartphone, Zap, ShoppingCart, Users, Calendar, Search } from "lucide-react"

export default function MobileShowcase() {
  const mobileExamples = [
    {
      title: "E-commerce Mobile App",
      category: "Shopping",
      icon: ShoppingCart,
      image: "/mobile-ecommerce-example.png",
      features: ["Touch-friendly checkout", "Mobile payments", "Product search", "User accounts"],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      title: "Restaurant Mobile Site",
      category: "Food & Dining",
      icon: Calendar,
      image: "/mobile-restaurant-example.png",
      features: ["Online reservations", "Menu browsing", "Location finder", "Order tracking"],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
    {
      title: "Business Services App",
      category: "Professional",
      icon: Users,
      image: "/mobile-business-example.png",
      features: ["Service booking", "Client portal", "Live chat", "Payment integration"],
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
    },
    {
      title: "Local Directory Mobile",
      category: "Directory",
      icon: Search,
      image: "/mobile-directory-example.png",
      features: ["Location search", "Business listings", "Reviews & ratings", "Contact integration"],
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
    },
  ]

  return (
    <section className="bg-slate-50 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Smartphone className="h-8 w-8 text-orange-500" />
            <span className="text-sm font-medium text-orange-700 bg-orange-100 px-3 py-1 rounded-full">
              Mobile Development
            </span>
          </div>
          <h2 className="text-3xl font-bold">Mobile-First Website Examples</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Every website we build is optimized for mobile devices. Here are some examples of mobile-responsive websites
            we've created across different industries.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {mobileExamples.map((example, index) => (
            <div key={example.title} className="group">
              {/* Mobile Phone Mockup */}
              <div className="relative mx-auto w-64 h-[480px] bg-slate-900 rounded-[2.5rem] p-2 shadow-xl">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                  {/* Phone Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white">
                    <Image
                      src={example.image || "/placeholder.svg?height=400&width=300&query=mobile website mockup"}
                      alt={`${example.title} mobile view`}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Mobile UI Elements Overlay */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm border-b flex items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                      <example.icon className={`h-5 w-5 ${example.iconColor}`} />
                      <span className="text-sm font-medium text-slate-700">{example.category}</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Speed indicator */}
                  <div className="absolute top-16 right-4 flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    <Zap className="h-3 w-3" />
                    <span>Fast</span>
                  </div>
                </div>

                {/* Phone Home Button */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-slate-600 rounded-full"></div>
              </div>

              {/* Content Below Phone */}
              <div className={`mt-6 p-4 rounded-xl border-2 ${example.color} transition-all group-hover:shadow-md`}>
                <h3 className="font-semibold text-lg mb-2">{example.title}</h3>
                <ul className="space-y-1 text-sm text-slate-600">
                  {example.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Development Features */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="text-center p-6 bg-white rounded-xl border">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Responsive Design</h3>
            <p className="text-sm text-slate-600">
              Websites that look perfect on all devices - phones, tablets, and desktops.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl border">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">Fast Loading</h3>
            <p className="text-sm text-slate-600">
              Optimized for mobile networks with fast loading times and smooth interactions.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl border">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">Touch-Friendly</h3>
            <p className="text-sm text-slate-600">
              Intuitive touch interactions with mobile-optimized navigation and buttons.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Ready to get a mobile-optimized website for your business?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors"
            >
              Get Your Mobile Website
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919518126610&text=Hi%20Budhiraja%20Services%2C%20I%E2%80%99d%20like%20to%20know%20more%20about%20mobile%20website%20development."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#004274] hover:bg-[#00385f] text-white font-medium rounded-lg transition-colors"
            >
              <Smartphone className="mr-2 h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
