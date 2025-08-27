import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowLeft, Shield, Clock, Users, BookOpen, Star, Crown, Zap, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CheckoutCursoAZ() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-blue-600">
              <Crown className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                Viviane
              </span>
              <p className="text-xs text-violet-600 font-medium">Especialista em Consórcios</p>
            </div>
          </Link>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <Shield className="mr-1 h-3 w-3" />
            Compra 100% Segura
          </Badge>
        </div>
      </header>

      <div className="container px-4 md:px-6 py-8">
        <Link href="/" className="inline-flex items-center text-violet-600 hover:text-violet-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o site
        </Link>

        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Informações do Curso */}
          <div className="space-y-6">
            <Card className="border-2 border-violet-200 bg-white/80 backdrop-blur">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-violet-100 to-blue-100">
                    <BookOpen className="h-8 w-8 text-violet-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-slate-800">Como Vender Consórcio de A a Z</CardTitle>
                    <CardDescription className="text-lg">
                      O método completo para dominar todas as etapas da venda de consórcios
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">(4.9/5 - 1.247 avaliações)</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-violet-50">
                    <Clock className="h-5 w-5 text-violet-600" />
                    <div>
                      <p className="font-semibold text-sm">Duração</p>
                      <p className="text-xs text-slate-600">8 horas</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-sm">Alunos</p>
                      <p className="text-xs text-slate-600">2.341</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-green-50">
                    <BookOpen className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-sm">Módulos</p>
                      <p className="text-xs text-slate-600">12</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-slate-800">O que você vai aprender:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Prospecção eficiente de clientes qualificados</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Técnicas de apresentação persuasiva</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Como tratar objeções com segurança</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Estratégias de fechamento de vendas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Pós-venda e fidelização de clientes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Scripts prontos para usar</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-violet-50 to-blue-50 p-4 rounded-lg border border-violet-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <Crown className="h-5 w-5 text-violet-600" />
                    <span className="font-semibold text-slate-800">Bônus Exclusivos Inclusos:</span>
                  </div>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Planilha de controle de vendas</li>
                    <li>• Templates de apresentação</li>
                    <li>• Grupo VIP no Telegram</li>
                    <li>• Certificado de conclusão</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Depoimento */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "Este curso mudou completamente minha abordagem de vendas. Em 2 meses aumentei minhas comissões em
                  300%. A Viviane ensina de forma prática e objetiva!"
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=RC"
                    alt="Roberto Carlos"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">Roberto Carlos</p>
                    <p className="text-sm text-slate-600">Corretor - São Paulo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Checkout */}
          <div className="space-y-6">
            <Card className="border-2 border-violet-300 bg-white shadow-xl sticky top-6">
              <CardHeader className="bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-xl flex items-center">
                  <Zap className="mr-2 h-5 w-5" />
                  Oferta Especial - Por Tempo Limitado
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-2xl text-slate-400 line-through">R$ 697</span>
                    <span className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                      R$ 497
                    </span>
                  </div>
                  <p className="text-green-600 font-semibold">Economia de R$ 200</p>
                  <p className="text-slate-600">ou 12x de R$ 49,70 sem juros</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Curso Como Vender Consórcio A-Z</span>
                    <span className="font-semibold">R$ 497</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-green-600">
                    <span>Desconto aplicado</span>
                    <span>-R$ 200</span>
                  </div>
                  <hr />
                  <div className="flex items-center justify-between font-bold">
                    <span>Total</span>
                    <span className="text-xl text-violet-600">R$ 497</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-lg py-6 shadow-lg"
                    href="https://pay.kiwify.com.br/St8OgmJ"
                    target="_blank"
                  >
                    <Crown className="mr-2 h-5 w-5" />
                    Comprar Agora
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="space-y-3 text-center text-sm text-slate-600">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span>Compra Segura</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Acesso Imediato</span>
                    </div>
                  </div>
                  <p>🔒 Seus dados estão protegidos com criptografia SSL</p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-800">Garantia de 7 Dias</span>
                  </div>
                  <p className="text-sm text-green-700">
                    Se não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xs text-slate-500">
                    Ao clicar em "Comprar Agora", você será redirecionado para a plataforma de pagamento segura.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Urgência */}
            <Card className="border-2 border-red-200 bg-red-50">
              <CardContent className="p-4 text-center">
                <p className="text-red-800 font-semibold mb-2">⏰ Oferta expira em:</p>
                <div className="grid grid-cols-3 gap-2 text-center mb-3">
                  <div className="bg-red-600 text-white rounded p-2">
                    <p className="text-lg font-bold">02</p>
                    <p className="text-xs">Dias</p>
                  </div>
                  <div className="bg-red-600 text-white rounded p-2">
                    <p className="text-lg font-bold">14</p>
                    <p className="text-xs">Horas</p>
                  </div>
                  <div className="bg-red-600 text-white rounded p-2">
                    <p className="text-lg font-bold">35</p>
                    <p className="text-xs">Min</p>
                  </div>
                </div>
                <p className="text-sm text-red-700">Depois volta ao preço normal de R$ 697</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
