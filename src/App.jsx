import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'
import "./style.css"
import ListCart from './ListCart'
import Checkout from './assets/Checkout'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Cta from './components/Cta'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <TodoList/> */}
     {/* <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-7">
                    <ListCart />
                  </div>
                  <div className="col-lg-5">
                    <Checkout />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}

<main className="min-h-screen">
      <Header />
      <Hero/>
      <Features />
      <Testimonials />
      <Pricing />
      <Cta />
      <Footer />
    </main>
    </>
  )
}

export default App
