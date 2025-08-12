const PricingPage = () => {
  const tiers = [
    {
      name: "Starter",
      price: 99,
      features: [
        "Logo",
        "Icon",
        "Website Development",
        "Domain",
        "Hosting",
        "Tools",
        "Theme",
        "Payment Gateway (PhonePe)",
        "Mobile Development",
        "Banner",
        "Up to 5 pages",
        "Responsive design",
        "Basic SEO setup",
        "SSL & analytics",
      ],
    },
    {
      name: "Business",
      price: 199,
      features: [
        "Logo",
        "Icon",
        "Website Development",
        "Domain",
        "Hosting",
        "Tools",
        "Theme",
        "Payment Gateway (PhonePe)",
        "Mobile Development",
        "Banner",
        "Up to 10 pages",
        "Blog or CMS",
        "SEO optimization",
        "Performance tuning",
      ],
    },
    {
      name: "Business Pro",
      price: 299,
      features: [
        "Logo",
        "Icon",
        "Website Development",
        "Domain",
        "Hosting",
        "Tools",
        "Theme",
        "Payment Gateway (PhonePe)",
        "Mobile Development",
        "Banner",
        "Unlimited pages",
        "E‑commerce or web app",
        "Integrations & automations",
        "Ongoing support",
      ],
    },
  ]

  return (
    <div>
      <h1>Pricing</h1>
      <ul>
        {tiers.map((tier) => (
          <li key={tier.name}>
            <h2>{tier.name}</h2>
            <p>Price: ${tier.price}</p>
            <ul>
              {tier.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PricingPage
