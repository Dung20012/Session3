import Image from "next/image"
import { Calendar, FileText, Users, Lock } from "lucide-react"

const features = [
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: "Project Planning",
    description: "Create, assign, and manage tasks with ease. Track progress and stay on schedule.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Document Management",
    description: "Store, organize, and share documents securely. Access from anywhere, anytime.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Team Collaboration",
    description: "Work together seamlessly with real-time updates and communication tools.",
  },
  {
    icon: <Lock className="h-10 w-10 text-primary" />,
    title: "Secure Workspace",
    description: "Keep your data safe with enterprise-grade security and compliance features.",
  },
]

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 bg-white" id="products">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Your Workflow</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whitepace comes with all the tools you need to manage projects efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Together, Anywhere</h2>
            <p className="text-lg text-gray-600 mb-6">
              Whitepace helps teams move work forward faster and more efficiently by providing a central hub for all
              your projects.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Real-time collaboration and communication</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Customizable workflows for any team</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Integrations with your favorite tools</span>
              </li>
            </ul>
            <Button className="bg-primary text-white hover:bg-primary/90">Learn More</Button>
          </div>
          <div className="order-1 lg:order-2 relative h-[300px] md:h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Collaboration Feature"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
