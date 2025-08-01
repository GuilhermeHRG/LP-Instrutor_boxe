import Image from "next/image"
import { Menu, Clock, Award, Users, MapPin, Phone, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import GoogleMap from "@/components/GoogleMap"
import banner from "../public/banner.jpg"
import instructor from "../public/instructor.jpg"
import boxe_iniciantes from "../public/boxe-iniciante.jpg"
import boxe_avancado from "../public/boxe-avançado.jpg"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-gray-100 overflow-x-hidden">
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={banner}
              alt="Boxing Training"
              fill
              className="object-cover max-sm:object-cover brightness-70 max-sm:brightness-100 max-sm:object-[-790px]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
          <div className="container relative z-50 py-32 md:py-40 lg:py-48 text-white">
            <div className=" space-y-8 mx-5 max-sm:text-center max-sm:mt-64">
              
              <h1 className="text-5xl  font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Treinamento
                </span>
                <br />
                <span className="text-red-500">de Boxe</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed">
                Transforme seu corpo e mente com aulas de boxe do iniciante ao avançado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://whatsa.me/5547991091355/?t=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20boxe."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-2xl shadow-red-600/25 border-0 h-14 px-8 text-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Começar Agora
                  </Button>
                </a>
                
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-none mx-4 max-sm:mx-4">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl blur-xl" />
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl px-2">
                  <Image
                    src={instructor}
                    alt="Instrutor de Boxe"
                    fill
                    className="object-cover "
                  />
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-red-50 text-red-700 border-red-200">
                    <Award className="w-4 h-4 mr-2" />
                    Instrutor Certificado
                  </Badge>
                  <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                    Conheça o<span className="text-red-600"> Instrutor</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Olá! Sou <strong>Adalberto Wagner</strong>, instrutor de boxe com mais de 15 anos de experiência e certificado pela Federação Catarinense de boxe. Trago
                    conhecimento técnico e paixão para cada aula, combinando fundamentos tradicionais com técnicas
                    modernas.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <Star className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">15+ Anos</p>
                      <p className="text-sm text-gray-600">de Experiência</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <Award className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Certificado</p>
                      <p className="text-sm text-gray-600">CBBoxe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="bg-red-50 text-red-700 border-red-200 mb-4">
                <Users className="w-4 h-4 mr-2" />
                Nossas Modalidades
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
                Aulas Para Todos os
                <span className="text-red-600"> Níveis</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Oferecemos treinamento personalizado para atender seus objetivos, seja fitness, autodefesa ou
                competição.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="relative max-sm:h-[450px] h-[500px] xl:w-[500px] rounded-xl overflow-hidden mb-6">
                    <Image
                      src={boxe_iniciantes}
                      alt="Boxe para Iniciantes"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300 object-[-55px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-green-600 text-white border-0">Iniciante</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Boxe para Iniciantes</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Aprenda os fundamentos do boxe em um ambiente acolhedor. Foco em técnica básica, postura e
                    movimentação segura.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="relative max-sm:h-[450px] h-[500px] xl:w-[500px] rounded-xl overflow-hidden mb-6">
                    <Image
                      src={boxe_avancado}
                      alt="Treinamento Avançado"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300 object-[-55px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-red-600 text-white border-0">Avançado</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Treinamento Avançado</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Para atletas experientes que desejam aprimorar técnicas e estratégias para competições
                    profissionais.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="bg-red-50 text-red-700 border-red-200 mb-4">
                <Clock className="w-4 h-4 mr-2" />
                Horários Disponíveis
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
                Escolha Seu
                <span className="text-red-600"> Horário</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Horários flexíveis para se adaptar à sua rotina. Aulas em grupos pequenos para atenção personalizada.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12 mx-4">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Segunda & Quarta</h3>
                  <p className="text-3xl font-bold text-red-600 mb-2">21:00 - 22:00</p>
                  <p className="text-sm text-gray-500">Noturno</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Terça & Quinta</h3>
                  <p className="text-3xl font-bold text-red-600 mb-2">18:30 - 19:30</p>
                  <p className="text-sm text-gray-500">Vespertino</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sábado</h3>
                  <p className="text-3xl font-bold text-red-600 mb-2">10:00 - 11:00</p>
                  <p className="text-sm text-gray-500">Matutino</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <a
                href="https://whatsa.me/5547991091355/?t=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20boxe."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-xl shadow-red-600/25 border-0 h-14 px-8 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Começar agora
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="bg-red-600/20 text-red-400 border-red-600/30 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  Nossa Localização
                </Badge>
                <h2 className="text-4xl font-bold tracking-tight mb-4">
                  Venha fazer um
                  <span className="text-red-500"> Treino</span>
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 max-sm:w-10/12 items-center justify-center max-sm:ml-2">
                  <GoogleMap />
                </div>

                <div className="space-y-6 w-full">
                  <div className="flex w-full max-sm:max-w-sm items-start gap-4 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Endereço</h3>
                      <p className="text-gray-300">
                        Rua Londrina (subsolo da Academia Move)
                        <br />
                        Ivaiporã, PR
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start max-sm:max-w-sm gap-4 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Contato</h3>
                      <p className="text-gray-300">(47) 9 9109-1355</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="container">
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Adalberto Wagner. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MobileNav() {
  return (
    <div className="relative">
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>
    </div>
  )
}
