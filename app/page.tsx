"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Star,
  Truck,
  Recycle,
  Shield,
  Users,
  CheckCircle,
  Clock,
  Award,
  Leaf,
  Factory,
  Scale,
  ArrowRight,
  Zap,
  Target,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)

    // Mouse tracking para el hero
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        setMousePosition({ x: x * 20, y: y * 20 }) // Multiplicar por 20 para el efecto
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[rgb(37,150,190)]/20 rounded-full animate-pulse" />
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-[rgb(37,150,190)]/30 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-1 h-1 bg-[rgb(37,150,190)]/40 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-2 h-2 bg-[rgb(37,150,190)]/25 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      {/* Header with Glassmorphism - Cambiado para mejor contraste */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-100/50 shadow-lg shadow-gray-100/20"
            : "bg-slate-900/70 backdrop-blur-xl"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div
              className={`text-2xl font-bold ${
                scrollY > 50
                  ? "bg-gradient-to-r from-[rgb(37,150,190)] to-[rgb(45,170,210)] bg-clip-text text-transparent"
                  : "text-white"
              }`}
            >
              QuilmenioDelSur
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["inicio", "nosotros", "servicios", "proceso", "clientes", "contacto"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative transition-all duration-300 group ${
                    scrollY > 50
                      ? "text-gray-700 hover:text-[rgb(37,150,190)]"
                      : "text-white hover:text-[rgb(37,150,190)]"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[rgb(37,150,190)] to-[rgb(45,170,210)] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100/20 transition-colors duration-200"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-0 left-0 w-6 h-0.5 ${scrollY > 50 ? "bg-gray-600" : "bg-white"} transition-all duration-300 ${isMenuOpen ? "rotate-45 top-3" : ""}`}
                />
                <span
                  className={`absolute top-2 left-0 w-6 h-0.5 ${scrollY > 50 ? "bg-gray-600" : "bg-white"} transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`absolute top-4 left-0 w-6 h-0.5 ${scrollY > 50 ? "bg-gray-600" : "bg-white"} transition-all duration-300 ${isMenuOpen ? "-rotate-45 top-3" : ""}`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-64 py-4" : "max-h-0"}`}
          >
            <div className="flex flex-col space-y-4 border-t border-gray-100/20 pt-4">
              {["inicio", "nosotros", "servicios", "proceso", "clientes", "contacto"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-left hover:translate-x-2 transform transition-all duration-200 ${
                    scrollY > 50
                      ? "text-gray-700 hover:text-[rgb(37,150,190)]"
                      : "text-white hover:text-[rgb(37,150,190)]"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Mouse Tracking */}
      <section ref={heroRef} id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-[rgb(37,150,190)]/20 z-10" />
        <div
          className="absolute inset-0 scale-110 transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
          }}
        >
          <Image
            src="/images/hero-scrap.jpg"
            alt="Chatarra y materiales reciclables"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 z-15">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div
          className={`relative z-20 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light mb-6 tracking-tight">
            <span className="inline-block animate-fade-in-up">Quilmenio</span>
            <span
              className="inline-block animate-fade-in-up bg-gradient-to-r from-white to-[rgb(37,150,190)] bg-clip-text text-transparent"
              style={{ animationDelay: "0.2s" }}
            >
              DelSur
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl font-light mb-8 opacity-90 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Compra-venta de rezagos ferrosos y no ferrosos • Gestión integral de chatarra, papel y vidrio
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <a href="https://wa.me/5491133952291" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-[rgb(37,150,190)] to-[rgb(45,170,210)] hover:from-[rgb(32,130,165)] hover:to-[rgb(40,160,195)] text-white px-8 py-3 text-lg shadow-2xl hover:shadow-[rgb(37,150,190)]/25 transition-all duration-300 hover:scale-105"
              >
                Consultar Servicios
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[rgb(37,150,190)] to-[rgb(45,170,210)] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <p className="text-lg opacity-90">Años de experiencia</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">2000+</div>
              <p className="text-lg opacity-90">Clientes satisfechos</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <p className="text-lg opacity-90">Toneladas procesadas</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <p className="text-lg opacity-90">Disponibilidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with 3D Cards */}
      <section id="nosotros" className="py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-light text-slate-800 mb-6 relative">
                Más de 50 años en el mercado
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-[rgb(37,150,190)] to-[rgb(45,170,210)] rounded-full" />
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Somos una empresa familiar fundada por Roberto Cottet con más de 50 años de experiencia en el rubro. Nos
                especializamos en compra-venta de rezagos ferrosos y no ferrosos, gestión integral de chatarra, papel y
                vidrio, brindando soluciones completas para industrias y particulares.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-[rgb(37,150,190)] to-[rgb(45,170,210)] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Recycle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-medium text-slate-800 group-hover:text-[rgb(37,150,190)] transition-colors duration-200">
                    Sustentable
                  </h3>
                </div>
                <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-[rgb(37,150,190)] to-[rgb(45,170,210)] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-medium text-slate-800 group-hover:text-[rgb(37,150,190)] transition-colors duration-200">
                    Certificado
                  </h3>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(37,150,190)]/20 to-[rgb(45,170,210)]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/scrap-parts.jpg"
                  alt="Materiales para reciclaje"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Hover Effects */}
      <section id="servicios" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-[rgb(37,150,190)] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-[rgb(45,170,210)] rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-800 mb-4 relative inline-block">
              Nuestros Servicios
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[rgb(37,150,190)] to-[rgb(45,170,210)] rounded-full" />
            </h2>
            <p className="text-lg text-slate-600">Soluciones integrales para el reciclado industrial</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Recycle,
                title: "Compra-Venta de Rezagos",
                description:
                  "Compramos y vendemos rezagos ferrosos y no ferrosos. Evaluación profesional y precios competitivos del mercado.",
                color: "from-green-400 to-green-600",
              },
              {
                icon: Truck,
                title: "Retiro con Volquetes",
                description:
                  "Servicio de retiro con volquetes e hidrogrúa en fábricas, talleres y oficinas. Equipos especializados y personal capacitado.",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: Scale,
                title: "Gestión de Reciclado",
                description:
                  "Gestión integral y reciclado de chatarra, papel y vidrio. Procesos certificados y trazabilidad completa.",
                color: "from-purple-400 to-purple-600",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/80 backdrop-blur-sm overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(37,150,190)]/5 to-[rgb(45,170,210)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[rgb(37,150,190)] to-[rgb(45,170,210)] rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-medium group-hover:text-[rgb(37,150,190)] transition-colors duration-200">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-center text-slate-600 group-hover:text-slate-700 transition-colors duration-200">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[rgb(37,150,190)] to-[rgb(45,170,210)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Timeline */}
      <section id="proceso" className="py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-800 mb-4 relative inline-block">
              Nuestro Proceso
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[rgb(37,150,190)] to-[rgb(45,170,210)] rounded-full" />
            </h2>
            <p className="text-lg text-slate-600">Metodología probada para resultados óptimos</p>
          </div>

          <div className="relative">
            {/* Timeline line - solo desktop */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[rgb(37,150,190)] to-[rgb(45,170,210)] transform -translate-y-1/2 hidden lg:block z-0" />

            {/* Mobile: 2x2 grid, Desktop: 1x4 grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  step: 1,
                  title: "Evaluación",
                  description: "Evaluación profesional del material y cotización al mejor precio del mercado",
                  icon: Target,
                },
                {
                  step: 2,
                  title: "Retiro",
                  description: "Retiro con volquetes e hidrogrúa según las necesidades del cliente",
                  icon: Truck,
                },
                {
                  step: 3,
                  title: "Clasificación",
                  description: "Clasificación y separación de materiales ferrosos, no ferrosos, papel y vidrio",
                  icon: Factory,
                },
                {
                  step: 4,
                  title: "Gestión",
                  description: "Gestión integral y reciclado responsable de todos los materiales",
                  icon: Recycle,
                },
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-4 lg:mb-6">
                    <div className="w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-[rgb(37,150,190)] to-[rgb(45,170,210)] rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-all duration-300 relative z-10">
                      <span className="text-lg lg:text-2xl font-bold text-white">{item.step}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgb(37,150,190)]/30 to-[rgb(45,170,210)]/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                  </div>
                  <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 relative z-10">
                    <item.icon className="w-6 h-6 lg:w-8 lg:h-8 text-[rgb(37,150,190)] mx-auto mb-2 lg:mb-3 group-hover:scale-110 transition-transform duration-200" />
                    <h3 className="text-base lg:text-lg font-medium text-slate-800 mb-2 group-hover:text-[rgb(37,150,190)] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs lg:text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Animated Cards */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-800 mb-4 relative inline-block">
              ¿Por qué elegirnos?
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[rgb(37,150,190)] to-[rgb(45,170,210)] rounded-full" />
            </h2>
            <p className="text-lg text-slate-600">Ventajas que nos distinguen en el mercado</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Experiencia Comprobada",
                description: "Más de 15 años en el sector del reciclado industrial",
              },
              {
                icon: Clock,
                title: "Respuesta Rápida",
                description: "Atención inmediata y tiempos de respuesta optimizados",
              },
              { icon: Award, title: "Certificaciones", description: "Cumplimos con todas las normativas ambientales" },
              {
                icon: Leaf,
                title: "Compromiso Ambiental",
                description: "Procesos sustentables que cuidan el medio ambiente",
              },
              {
                icon: Factory,
                title: "Equipamiento Moderno",
                description: "Maquinaria de última generación para mejores resultados",
              },
              {
                icon: Users,
                title: "Equipo Especializado",
                description: "Personal capacitado y con amplia experiencia",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[rgb(37,150,190)]/10 to-[rgb(45,170,210)]/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500" />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(37,150,190)] to-[rgb(45,170,210)] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-800 mb-2 group-hover:text-[rgb(37,150,190)] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with 3D Effect */}
      <section id="clientes" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-800 mb-4 relative inline-block">
              Nuestros Clientes
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[rgb(37,150,190)] to-[rgb(45,170,210)] rounded-full" />
            </h2>
            <p className="text-lg text-slate-600">Empresas líderes confían en nuestro servicio</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Juan Pérez",
                company: "Metalúrgica Industrial",
                rating: 5,
                comment: "Excelente servicio y precios justos. Muy profesionales en la evaluación de materiales.",
              },
              {
                name: "María López",
                company: "Taller Mecánico Sur",
                rating: 5,
                comment: "Siempre puntuales con el retiro. El servicio de volquetes es impecable.",
              },
              {
                name: "Carlos Ruiz",
                company: "Fábrica Textil",
                rating: 5,
                comment: "Trabajamos con ellos hace años. Confianza total en su gestión de reciclado.",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/90 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(37,150,190)]/5 to-[rgb(45,170,210)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-[rgb(37,150,190)] to-[rgb(45,170,210)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-base group-hover:text-[rgb(37,150,190)] transition-colors duration-200">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="text-sm">{testimonial.company}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[rgb(37,150,190)] text-[rgb(37,150,190)] group-hover:scale-110 transition-transform duration-200"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-slate-600 italic">"{testimonial.comment}"</p>
                </CardContent>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[rgb(37,150,190)] to-[rgb(45,170,210)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Glassmorphism */}
      <section id="contacto" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-[rgb(37,150,190)]/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-20 w-60 h-60 bg-[rgb(45,170,210)]/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl font-light mb-8 relative">
                Contactanos
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-[rgb(37,150,190)] to-[rgb(45,170,210)] rounded-full" />
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Dirección",
                    info: "Cmo Gral Belgrano 3649/55 (km 15.200) e/833 y 834, Villa Florida, Quilmes Oeste",
                  },
                  { icon: Phone, title: "Teléfono", info: "4200-9892" },
                  { icon: Mail, title: "Email", info: "info@quilmeniodelsur.com" },
                  { icon: Phone, title: "Claudio Cottet", info: "+54 9 11 3395-2291" },
                  { icon: Phone, title: "Ciro Giménez", info: "+54 9 11 4175-7953" },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-[rgb(37,150,190)] to-[rgb(45,170,210)] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                      <contact.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="font-medium text-lg">{contact.title}</p>
                      <p className="text-slate-300 group-hover:text-white transition-colors duration-200">
                        {contact.info}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="font-medium mb-4 text-lg">Seguinos en redes</p>
                <div className="flex gap-4">
                  <Button
                    size="icon"
                    className="bg-white/20 text-white border-2 border-white hover:bg-[rgb(37,150,190)] hover:border-[rgb(37,150,190)] transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button
                    size="icon"
                    className="bg-white/20 text-white border-2 border-white hover:bg-[rgb(37,150,190)] hover:border-[rgb(37,150,190)] transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-xl">¿En qué podemos ayudarte?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Nombre"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 transition-all duration-200"
                />
                <Input
                  placeholder="Email"
                  type="email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 transition-all duration-200"
                />
                <Input
                  placeholder="Teléfono"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 transition-all duration-200"
                />
                <Textarea
                  placeholder="Mensaje"
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 transition-all duration-200"
                />
                <Button className="w-full bg-gradient-to-r from-[rgb(37,150,190)] to-[rgb(45,170,210)] hover:from-[rgb(32,130,165)] hover:to-[rgb(40,160,195)] shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                  Enviar Consulta
                  <Zap className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer simplificado */}
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="hover:text-white transition-colors duration-200">
            &copy; 2024 QuilmenioDelSur. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
