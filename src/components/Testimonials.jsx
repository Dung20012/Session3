import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Whitepace has transformed how our team collaborates. The intuitive interface and powerful features have increased our productivity by 40%.",
    stars: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO at StartupX",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "As a fast-growing startup, we needed a solution that could scale with us. Whitepace has been the perfect fit, helping us stay organized and focused.",
    stars: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Team Lead at DesignStudio",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The document management and collaboration features in Whitepace have streamlined our design process. We can't imagine working without it now.",
    stars: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Teams Worldwide</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">See what our customers have to say about Whitepace</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  {[...Array(5 - testimonial.stars)].map((_, i) => (
                    <Star key={i + testimonial.stars} className="h-5 w-5 text-gray-300" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    {/* Thay thế thẻ <Image> bằng <img /> */}
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
