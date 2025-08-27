import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowLeft, Shield, Clock, Users, Calculator, Star, Crown, Zap, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CheckoutCalculosEssenciais() {
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
                <Badge className="w-fit bg-gradient-to-r from-violet-600 to-blue-600 text-white mb-4">
                  <Crown className="mr-1 h-3 w-3" />
                  Mais Vendido
                </Badge>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-blue-100 to-violet-100">
                    <Calculator className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-slate-800">Cálculos Essenciais para Vender Consórcio</CardTitle>
                    <CardDescription className="text-lg">
                      Domine os números e demonstre valor real aos seus clientes
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">(4.8/5 - 1.892 avaliações)</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-violet-50">
                    <Clock className="h-5 w-5 text-violet-600" />
                    <div>
                      <p className="font-semibold text-sm">Duração</p>
                      <p className="text-xs text-slate-600">6 horas</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-sm">Alunos</p>
                      <p className="text-xs text-slate-600">3.127</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-green-50">
                    <Calculator className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-sm">Planilhas</p>
                      <p className="text-xs text-slate-600">15+</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-slate-800">O que você vai dominar:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Cálculos de rentabilidade e ROI</span>
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
                      <span className="text-sm text-slate-700">15+ planilhas prontas para usar</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Argumentação baseada em dados</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-violet-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Calculadora automática de propostas</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-violet-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <Calculator className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-slate-800">Ferramentas Exclusivas:</span>
                  </div>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Calculadora automática de consórcios</li>
                    <li>• Planilha comparativa de investimentos</li>
                    <li>• Templates de apresentação com gráficos</li>
                    <li>• Simulador de cenários</li>
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
                  "As planilhas e calculadoras deste curso me deram uma vantagem competitiva incrível. Agora consigo
                  demonstrar matematicamente por que o consórcio é a melhor opção!"
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=MS"
                    alt="Mariana Silva"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">Mariana Silva</p>
                    <p className="text-sm text-slate-600">Consultora - Rio de Janeiro</p>
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
                  Curso Mais Vendido - Oferta Especial
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-2xl text-slate-400 line-through">R$ 597</span>
                    <span className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                      R$ 397
                    </span>
                  </div>
                  <p className="text-green-600 font-semibold">Economia de R$ 200</p>
                  <p className="text-slate-600">ou 12x de R$ 39,70 sem juros</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Curso Cálculos Essenciais</span>
                    <span className="font-semibold">R$ 397</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-green-600">
                    <span>Desconto aplicado</span>
                    <span>-R$ 200</span>
                  </div>
                  <hr />
                  <div className="flex items-center justify-between font-bold">
                    <span>Total</span>
                    <span className="text-xl text-violet-600">R$ 397</span>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
