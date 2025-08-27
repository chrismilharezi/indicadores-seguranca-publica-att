import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  ArrowLeft,
  Shield,
  Clock,
  Users,
  BookOpen,
  Calculator,
  Home,
  Star,
  Crown,
  ChevronRight,
  Gift,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CheckoutComboCompleto() {
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
          {/* Informações do Combo */}
          <div className="space-y-6">
            <Card className="border-2 border-amber-300 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-blue-600/5"></div>
              <CardHeader className="relative">
                <Badge className="w-fit bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-500 hover:to-orange-500 mb-4">
                  <Gift className="mr-1 h-3 w-3" />
                  OFERTA ESPECIAL
                </Badge>
                <CardTitle className="text-2xl text-slate-800">Combo Completo - Todos os 3 Cursos</CardTitle>
                <CardDescription className="text-lg">
                  A formação completa para se tornar um especialista em consórcios
                </CardDescription>
                <div className="flex items-center space-x-4 mt-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">(4.9/5 - 892 avaliações do combo)</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 relative">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/70 backdrop-blur">
                    <Clock className="h-5 w-5 text-violet-600" />
                    <div>
                      <p className="font-semibold text-sm">Duração Total</p>
                      <p className="text-xs text-slate-600">24+ horas</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/70 backdrop-blur">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-sm">Economia</p>
                      <p className="text-xs text-slate-600">R$ 594</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/70 backdrop-blur">
                    <Crown className="h-5 w-5 text-amber-600" />
                    <div>
                      <p className="font-semibold text-sm">Bônus</p>
                      <p className="text-xs text-slate-600">Exclusivos</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-800">Cursos Inclusos:</h3>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/70 backdrop-blur border border-violet-200">
                      <BookOpen className="h-6 w-6 text-violet-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800">Como Vender Consórcio de A a Z</h4>
                        <p className="text-sm text-slate-600 mb-2">Método completo de vendas</p>
                        <div className="flex items-center space-x-4 text-xs text-slate-500">
                          <span>8 horas</span>
                          <span>12 módulos</span>
                          <span className="line-through">R$ 497</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/70 backdrop-blur border border-blue-200">
                      <Calculator className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800">Cálculos Essenciais para Vender Consórcio</h4>
                        <p className="text-sm text-slate-600 mb-2">Domine os números e demonstre valor</p>
                        <div className="flex items-center space-x-4 text-xs text-slate-500">
                          <span>6 horas</span>
                          <span>15+ planilhas</span>
                          <span className="line-through">R$ 397</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/70 backdrop-blur border border-amber-200">
                      <Home className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800">Técnicas de Contemplação de Imóvel</h4>
                        <p className="text-sm text-slate-600 mb-2">Estratégias avançadas de contemplação</p>
                        <div className="flex items-center space-x-4 text-xs text-slate-500">
                          <span>10 horas</span>
                          <span>50+ cases</span>
                          <span className="line-through">R$ 597</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-violet-50 to-blue-50 p-4 rounded-lg border border-violet-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <Gift className="h-5 w-5 text-violet-600" />
                    <span className="font-semibold text-slate-800">Bônus Exclusivos do Combo:</span>
                  </div>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Mentoria em grupo ao vivo (R$ 297)</li>
                    <li>• Kit completo de templates (R$ 197)</li>
                    <li>• Acesso vitalício às atualizações</li>
                    <li>• Certificado de especialista</li>
                    <li>• Grupo VIP no Telegram</li>
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
                  "O combo completo foi o melhor investimento da minha carreira. Em 6 meses recuperei o valor investido
                  e hoje sou referência em consórcios na minha região!"
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=PA"
                    alt="Pedro Almeida"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">Pedro Almeida</p>
                    <p className="text-sm text-slate-600">Corretor - Minas Gerais</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Checkout */}
          <div className="space-y-6">
            <Card className="border-2 border-amber-400 bg-white shadow-xl sticky top-6">
              <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-t-lg">
                <CardTitle className="text-xl flex items-center">
                  <Crown className="mr-2 h-5 w-5" />
                  Combo Completo - Máxima Economia
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="text-center space-y-2">
                  <p className="text-sm text-slate-600 mb-2">Valor individual dos cursos:</p>
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-3xl text-slate-400 line-through">R$ 1.491</span>
                    <span className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                      R$ 897
                    </span>
                  </div>
                  <p className="text-green-600 font-semibold text-lg">Economia de R$ 594!</p>
                  <p className="text-slate-600">ou 12x de R$ 89,70 sem juros</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Curso A-Z (R$ 497)</span>
                    <span className="line-through text-slate-400">R$ 497</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Cálculos Essenciais (R$ 397)</span>
                    <span className="line-through text-slate-400">R$ 397</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Contemplação (R$ 597)</span>
                    <span className="line-through text-slate-400">R$ 597</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-green-600">
                    <span>Desconto do combo</span>
                    <span>-R$ 594</span>
                  </div>
                  <hr />
                  <div className="flex items-center justify-between font-bold">
                    <span>Total</span>
                    <span className="text-xl text-amber-600">R$ 897</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-lg py-6 shadow-lg">
                    <Crown className="mr-2 h-5 w-5" />
                    Comprar Combo Completo
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
                    Ao clicar em "Comprar Combo Completo", você será redirecionado para a plataforma de pagamento
                    segura.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Urgência */}
            <Card className="border-2 border-red-200 bg-red-50">
              <CardContent className="p-4 text-center">
                <p className="text-red-800 font-semibold mb-2">🔥 Oferta por tempo limitado!</p>
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
                <p className="text-sm text-red-700">Depois volta ao preço normal de R$ 1.491</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
