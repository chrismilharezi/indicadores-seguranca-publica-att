"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Star,
  Users,
  TrendingUp,
  Award,
  BookOpen,
  Target,
  Shield,
  Play,
  ChevronRight,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Calculator,
  Home,
  DollarSign,
  Send,
  MessageCircle,
  Zap,
  Sparkles,
  Crown,
  Rocket,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function VivianeCursos() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-blue-600">
              <Crown className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                Viviane
              </span>
              <p className="text-xs text-violet-600 font-medium">Especialista em Consórcios</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#cursos" className="text-sm font-medium hover:text-violet-600 transition-colors">
              Cursos
            </Link>
            <Link href="#sobre" className="text-sm font-medium hover:text-violet-600 transition-colors">
              Sobre Viviane
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium hover:text-violet-600 transition-colors">
              Depoimentos
            </Link>
            <Link href="#contato" className="text-sm font-medium hover:text-violet-600 transition-colors">
              Contato
            </Link>
          </nav>

          <Button
            className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700"
            onClick={() => document.getElementById("cursos")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Quero Me Capacitar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-violet-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-blue-600/5"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="w-fit bg-gradient-to-r from-violet-100 to-blue-100 text-violet-800 hover:from-violet-100 hover:to-blue-100 border-0">
                  <Crown className="mr-2 h-4 w-4" />
                  Mais de 15 anos de experiência
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-800">
                  Domine o Mercado de
                  <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    Consórcios
                  </span>
                </h1>
                <p className="text-xl text-slate-600 max-w-[600px] leading-relaxed">
                  Transforme sua carreira com os métodos comprovados da <strong>Viviane</strong>, a maior especialista
                  em consórcios do Brasil. Aprenda as técnicas que geraram <strong>mais de R$1.5 Bi </strong> em vendas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => document.getElementById("cursos")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Ver Cursos Disponíveis
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 border-2 border-violet-600 text-violet-600 hover:bg-violet-50 bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Assistir Apresentação
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center p-4 rounded-xl bg-white/50 backdrop-blur border border-violet-100">
                  <p className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                    15+
                  </p>
                  <p className="text-sm text-slate-600">Anos de Experiência</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/50 backdrop-blur border border-violet-100">
                  <p className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                    1.500+
                  </p>
                  <p className="text-sm text-slate-600">Profissionais Formados</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/50 backdrop-blur border border-violet-100">
                  <p className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                    R$ 1.5Bi
                  </p>
                  <p className="text-sm text-slate-600">{"Sob Gestão"}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/40656EAE-763C-4E67-B6B4-0D8E9AADFA8F%20%281%29-lFF5BR8aEedbRCfPmPZ9xv5v7Bivgl.jpeg"
                  alt="Viviane - Especialista em Consórcios"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-violet-400 to-blue-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Section */}
      <section id="cursos" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="w-fit mx-auto bg-gradient-to-r from-violet-100 to-blue-100 text-violet-800 hover:from-violet-100 hover:to-blue-100 border-0">
              <Sparkles className="mr-2 h-4 w-4" />
              Cursos Exclusivos
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-800">
              Três Pilares para o Seu Sucesso
            </h2>
            <p className="text-xl text-slate-600 max-w-[800px] mx-auto">
              Metodologias testadas e aprovadas por milhares de corretores que multiplicaram suas vendas
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto">
            {/* Curso 1 */}
            <Card className="border-2 border-slate-200 hover:border-violet-300 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="pb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-violet-100 to-blue-100 mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-8 w-8 text-violet-600" />
                </div>
                <CardTitle className="text-xl text-slate-800">Como Vender Consórcio de A a Z</CardTitle>
                <CardDescription className="text-slate-600">
                  O método completo para dominar todas as etapas da venda de consórcios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                    <span className="text-sm text-slate-700">Prospecção eficiente de clientes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                    <span className="text-sm text-slate-700">Técnicas de apresentação persuasiva</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                    <span className="text-sm text-slate-700">Tratamento de objeções</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                    <span className="text-sm text-slate-700">Fechamento de vendas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                    <span className="text-sm text-slate-700">Pós-venda e fidelização</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-slate-800">R$ 497</span>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Oferta Limitada</Badge>
                  </div>
                  <Button className="w-full bg-gray-400 text-white cursor-not-allowed text-lg py-6" disabled>
                    Em Breve
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Curso 2 */}
            <Card className="border-2 border-violet-300 hover:border-violet-400 transition-all duration-300 hover:shadow-xl relative group">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-violet-600 to-blue-600 text-white">
                <Crown className="mr-1 h-3 w-3" />
                Mais Vendido
              </Badge>
              <CardHeader className="pb-4 pt-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-blue-100 to-violet-100 mb-4 group-hover:scale-110 transition-transform">
                  <Calculator className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-slate-800">Cálculos Essenciais para Vender Consórcio</CardTitle>
                <CardDescription className="text-slate-600">
                  Domine os números e demonstre valor real aos seus clientes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                    <span className="text-sm text-slate-700">Cálculos de rentabilidade</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                    <span className="text-sm text-slate-700">Comparativos com financiamentos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                    <span className="text-sm text-slate-700">Simulações personalizadas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                    <span className="text-sm text-slate-700">Planilhas exclusivas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                    <span className="text-sm text-slate-700">Argumentação baseada em dados</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-slate-800">R$ 599</span>
                    <Badge className="bg-violet-100 text-violet-800 hover:bg-violet-100">Best Seller</Badge>
                  </div>
                  <Link href="https://pay.kiwify.com.br/St8OgmJ" target="_blank">
                    <Button className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-lg py-6 shadow-lg hover:shadow-xl transition-all">
                      Quero Este Curso
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Curso 3 */}
            <Card className="border-2 border-slate-200 hover:border-violet-300 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="pb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-amber-100 to-orange-100 mb-4 group-hover:scale-110 transition-transform">
                  <Home className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl text-slate-800">Técnicas de Contemplação de Imóvel</CardTitle>
                <CardDescription className="text-slate-600">
                  Estratégias avançadas para acelerar contemplações
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                    <span className="text-sm text-slate-700">Análise de perfil do cliente</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                    <span className="text-sm text-slate-700">Estratégias de lances</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                    <span className="text-sm text-slate-700">Timing ideal para contemplação</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                    <span className="text-sm text-slate-700">Negociação com administradoras</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                    <span className="text-sm text-slate-700">Cases de sucesso reais</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-slate-800">R$ 597</span>
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Avançado</Badge>
                  </div>
                  <Button className="w-full bg-gray-400 text-white cursor-not-allowed text-lg py-6" disabled>
                    Em Breve
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Oferta Combo */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-2 border-amber-300 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-blue-600/5"></div>
              <CardHeader className="text-center pb-4 relative">
                <Badge className="w-fit mx-auto bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-500 hover:to-orange-500 text-lg px-4 py-2">
                  <Zap className="mr-2 h-5 w-5" />
                  OFERTA ESPECIAL
                </Badge>
                <CardTitle className="text-2xl text-slate-800 mt-4">Somente este mês </CardTitle>
                <CardDescription className="text-lg text-slate-600">
                   
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6 relative">
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-3xl font-bold text-slate-400 line-through">R$ 799,00</span>
                  <span className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                    R$ 599,00 
                  </span>
                </div>
                <p className="text-slate-600">Ou 12x de R$ 49,91 sem juros</p>
                <Link href="https://pay.kiwify.com.br/St8OgmJ" target="_blank">
                  <Button
                    size="lg"
                    className="text-xl px-12 py-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-xl hover:shadow-2xl transition-all"
                  >
                    <Crown className="mr-2 h-6 w-6" />
                    Quero o Combo Completo
                    <DollarSign className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre Viviane */}
      <section id="sobre" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-violet-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/452118C6-11C7-4434-96A3-8448CC6AC92A-ZjxsJ6T8W3sCVYO5QYQTBEmIsFRXwq.jpeg"
                alt="Viviane palestrando"
                width={400}
                height={500}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-violet-100">
                <div className="text-center">
                  <p className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                    Top 1%
                  </p>
                  <p className="text-sm text-slate-600">Vendedores Brasil</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge className="w-fit bg-gradient-to-r from-violet-100 to-blue-100 text-violet-800 hover:from-violet-100 hover:to-blue-100 border-0 mb-4">
                  <Award className="mr-2 h-4 w-4" />
                  Sobre a Especialista
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-800 mb-6">
                  Conheça Viviane, a Maior Autoridade em Consórcios do Brasil
                </h2>
              </div>

              <div className="space-y-4 text-slate-600">
                <p className="text-lg leading-relaxed">
                  Com mais de <strong>15 anos de experiência</strong> no mercado de consórcios, Viviane é reconhecida
                  como a maior especialista do segmento no país. Sua trajetória inclui:
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/50 backdrop-blur border border-violet-100">
                    <Award className="h-6 w-6 text-violet-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-800">Certificações</p>
                      <p className="text-sm">
                        MBA em Gestão e Liderança do Futuro, Coach Business Febracis, ABAC Educação Financeira KLA{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/50 backdrop-blur border border-violet-100">
                    <Users className="h-6 w-6 text-violet-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-800">Experiência</p>
                      <p className="text-sm">1.500+ Profissionais formados</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/50 backdrop-blur border border-violet-100">
                    <TrendingUp className="h-6 w-6 text-violet-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-800">Resultados</p>
                      <p className="text-sm">R$1.5Bi+ Sob Gestão </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/50 backdrop-blur border border-violet-100">
                    <Target className="h-6 w-6 text-violet-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-800">Reconhecimento</p>
                      <p className="text-sm">Top 1% vendedores</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">
                  Seus métodos já transformaram a carreira de milhares de profissionais, elevando suas vendas e
                  estabelecendo-os como referências em suas regiões.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="w-fit mx-auto bg-gradient-to-r from-violet-100 to-blue-100 text-violet-800 hover:from-violet-100 hover:to-blue-100 border-0">
              <MessageCircle className="mr-2 h-4 w-4" />
              Depoimentos
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-800">
              O Que Nossos Alunos Dizem
            </h2>
            <p className="text-xl text-slate-600 max-w-[800px] mx-auto">
              Resultados reais de profissionais que transformaram suas carreiras
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-violet-50/30">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-slate-600">
                  {
                    "Boa tarde, Vivi! 🩷\n\nQuero expressar minha profunda gratidão por ter você como líder e, acima de tudo, por dedicar seu tempo para ensinar e compartilhar suas experiências. Tudo o que tenho aprendido ao seu lado tem me transformado não apenas como profissional, mas também como pessoa. Seus ensinamentos, repletos de conhecimento e histórias de superação, me inspiram diariamente. Louvo a Deus pela oportunidade de trabalhar com você e aprender a cada dia, aplicando na prática tudo o que me transmite. Sua liderança tem me impulsionado a crescer continuamente e acreditar ainda mais no meu potencial.\nVocê não só ensina, você marca vidas… e a minha é uma delas. \n\nObrigada por tudo sempre 🙌🏻"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=RC"
                    alt="Roberto Carlos"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">Karina Mulato</p>
                    <p className="text-sm text-slate-600">Vendedora </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-slate-600">
                  {
                    "Viviane \nPassando aqui pra dizer que tudo que sei sobre consórcio você que me ensinou, hoje eu sou gerente de consórcio em um grande banco pois tive uma mentora extraordinária e pra todos os meus gestores do banco sempre falo do seu nome. \nObrigada por tanto."
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=MS"
                    alt="Mariana Silva"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">Lara Fernandes</p>
                    <p className="text-sm text-slate-600">Consultora </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-violet-50/30">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-slate-600">
                  {
                    "Vivi boa noite ! \n\nVocê sabia que ......\n\nTem pessoas que Deus coloca em nossas Vidas que literalmente aceleram muito nosso processo, elas nos mostram, nos ensinam coisas que fazem com que a gente consiga naturalmente alcançar desejos e metas  que a gente Sonha muito mais rápido !!!!\n\nObrigado de todo meu coração por ter entrado na minha Vida !!!! ✌🏽👍🏽🤝\n#gratidão\n\nAbraço."
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=PA"
                    alt="Pedro Almeida"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">Adriano Barrelotti</p>
                    <p className="text-sm text-slate-600">Corretor </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-violet-50/30">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-slate-600">
                  {
                    "Oi Vi, passando para te dizer o quanto sou grata por seus ensinamentos.\nAmo a sua mentoria semanal me faz ter Técnica, criar conexão com cada cliente.\nVocê nasceu pra isso obrigada 🥰🥰"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=AC"
                    alt="Ana Costa"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">Renata Moura</p>
                    <p className="text-sm text-slate-600">Consultora </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-violet-50/30">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-slate-600">
                  "Metodologia clara e objetiva. Em 3 meses já estava entre os top performers da minha empresa."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=LS"
                    alt="Lucas Santos"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">Lucas Santos</p>
                    <p className="text-sm text-slate-600">Corretor - Paraná</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-violet-50/30">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-slate-600">
                  "Investimento que se paga sozinho! Recuperei o valor do curso na primeira venda após aplicar as
                  técnicas."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=CF"
                    alt="Carla Ferreira"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">Carla Ferreira</p>
                    <p className="text-sm text-slate-600">Consultora - Santa Catarina</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="py-20 md:py-32 bg-gradient-to-br from-violet-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge className="w-fit mx-auto bg-gradient-to-r from-violet-100 to-blue-100 text-violet-800 hover:from-violet-100 hover:to-blue-100 border-0">
                <MessageCircle className="mr-2 h-4 w-4" />
                Entre em Contato
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-800">
                Tem Dúvidas? Fale Conosco!
              </h2>
              <p className="text-xl text-slate-600">
                Nossa equipe está pronta para ajudar você a escolher o melhor curso para sua carreira
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Informações de Contato */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-100 to-blue-100">
                        <Phone className="h-6 w-6 text-violet-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">Telefone</h3>
                        <p className="text-slate-600">11 96192-6186</p>
                        <p className="text-sm text-slate-500">Segunda a Sexta, 9h às 18h</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-100 to-blue-100">
                        <Mail className="h-6 w-6 text-violet-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">E-mail</h3>
                        <p className="text-slate-600">contato@vivianecursos.com.br</p>
                        <p className="text-sm text-slate-500">Resposta em até 24h</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-100 to-blue-100">
                        <Instagram className="h-6 w-6 text-violet-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">Redes Sociais</h3>
                        <p className="text-slate-600">@sou_vivilopes</p>
                        <p className="text-sm text-slate-500">Siga para dicas diárias</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Formulário */}
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">Envie sua Mensagem</CardTitle>
                  <CardDescription>Nos envie uma mensagem e nossa equipe entrará em contato em breve</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-lg py-6"
                    onClick={() => window.open("https://wa.me/5511961926186", "_blank")}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-violet-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <div className="flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-violet-100 to-blue-100">
                  <Shield className="h-12 w-12 text-violet-600" />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-800">
                  Garantia Incondicional de 7 Dias
                </h2>
                <p className="text-xl text-slate-600 max-w-[600px] mx-auto">
                  Estamos tão confiantes na qualidade dos nossos cursos que oferecemos uma garantia total
                </p>
              </div>

              <Card className="border-2 border-violet-200 bg-white/80 backdrop-blur max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Check className="h-6 w-6 text-violet-600 flex-shrink-0" />
                      <span className="text-left">Se não ficar 100% satisfeito em 7 dias</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-6 w-6 text-violet-600 flex-shrink-0" />
                      <span className="text-left">Devolvemos todo o seu dinheiro</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-6 w-6 text-violet-600 flex-shrink-0" />
                      <span className="text-left">Sem perguntas, sem burocracia</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-6 w-6 text-violet-600 flex-shrink-0" />
                      <span className="text-left">Risco zero para você</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <p className="text-lg text-slate-600">
                <strong>Sua satisfação é nossa prioridade.</strong> Teste nossos métodos por 7 dias completos. Se não
                ver resultados, devolvemos 100% do seu investimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/90 to-blue-600/90"></div>
        <div className="container px-4 md:px-6 text-center relative">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Não Perca Esta Oportunidade Única
            </h2>
            <p className="text-xl text-violet-100 max-w-[700px] mx-auto">
              Milhares de profissionais já transformaram suas carreiras. Agora é a sua vez de se tornar um especialista
              em consórcios e multiplicar seus resultados.
            </p>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
              <div className="space-y-4 mb-6">
                <p className="text-2xl font-bold flex items-center justify-center">
                  <Zap className="mr-2 h-6 w-6" />
                  Oferta por Tempo Limitado
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-3xl font-bold">02</p>
                    <p className="text-sm">Dias</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-3xl font-bold">14</p>
                    <p className="text-sm">Horas</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-3xl font-bold">35</p>
                    <p className="text-sm">Minutos</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://pay.kiwify.com.br/St8OgmJ" target="_blank">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 bg-white text-violet-600 hover:bg-gray-100 shadow-lg"
                  >
                    <Crown className="mr-2 h-5 w-5" />
                    Quero o Combo Completo
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-violet-600 bg-transparent"
                  onClick={() => document.getElementById("cursos")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ver Cursos Individuais
                </Button>
              </div>
            </div>

            <p className="text-sm text-violet-200 flex items-center justify-center space-x-4">
              <span className="flex items-center">
                <Check className="mr-1 h-4 w-4" />
                Acesso imediato
              </span>
              <span className="flex items-center">
                <Check className="mr-1 h-4 w-4" />
                Garantia de 7 dias
              </span>
              <span className="flex items-center">
                <Check className="mr-1 h-4 w-4" />
                Suporte especializado
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-blue-600">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                    Viviane
                  </span>
                  <p className="text-xs text-violet-400 font-medium">Especialista em Consórcios</p>
                </div>
              </div>
              <p className="text-gray-400">
                Transformando carreiras no mercado de consórcios há mais de 15 anos. Métodos comprovados, resultados
                garantidos.
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-violet-400">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-violet-400">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Cursos</h3>
              <div className="space-y-2">
                <Link
                  href="https://pay.kiwify.com.br/St8OgmJ"
                  target="_blank"
                  className="block text-gray-400 hover:text-violet-400 transition-colors"
                >
                  Como Vender Consórcio de A a Z
                </Link>
                <Link
                  href="https://pay.kiwify.com.br/St8OgmJ"
                  target="_blank"
                  className="block text-gray-400 hover:text-violet-400 transition-colors"
                >
                  Cálculos Essenciais
                </Link>
                <Link
                  href="https://pay.kiwify.com.br/St8OgmJ"
                  target="_blank"
                  className="block text-gray-400 hover:text-violet-400 transition-colors"
                >
                  Técnicas de Contemplação
                </Link>
                <Link
                  href="https://pay.kiwify.com.br/St8OgmJ"
                  target="_blank"
                  className="block text-gray-400 hover:text-violet-400 transition-colors"
                >
                  Combo Completo
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Suporte</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-violet-400 transition-colors">
                  Central de Ajuda
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-violet-400 transition-colors">
                  Política de Reembolso
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-violet-400 transition-colors">
                  Termos de Uso
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-violet-400 transition-colors">
                  Privacidade
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-violet-400" />
                  <span className="text-gray-400">11 96192-6186</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-violet-400" />
                  <span className="text-gray-400">contato@vivianecursos.com.br</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Viviane Cursos. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">CNPJ: 00.000.000/0001-00</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
