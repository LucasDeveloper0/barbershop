import type { Metadata } from "next";
import Navbar from "./components/ui/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "BarberPro | Barbearia Premium",
  description: "Sistema de Agendamento para Barbearia",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-50 text-zinc-900 font-sans antialiased flex flex-col min-h-screen">
        
        {/* Usando o nosso novo componente de Navegação */}
        <Navbar />

        {/* Conteúdo das outras páginas */}
        <main className="flex-grow">
          {children}
        </main>

        {/* RODAPÉ */}
        <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900 mt-auto">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Bloco 2: Contato */}
            <div>
              <h4 className="text-white font-bold mb-4">Contato & Endereço</h4>
              <ul className="space-y-2 text-sm">
                <li>📍 Sitio Tatus, 05 - Zona Rural</li>
                <li>📞 (81) 99906-9172</li>
                <li>✉️ contatctmarcioflima@gmail.com</li>
              </ul>
            </div>

            {/* Bloco 3: Horários */}
            <div>
              <h4 className="text-white font-bold mb-4">Horário de Funcionamento</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>Segunda - Sexta:</span> <span>08:00 - 18:00</span></li>
                <li className="flex justify-between"><span>Sábado:</span> <span>09:00 - 13:00</span></li>
                <li className="flex justify-between text-amber-600 font-bold"><span>Domingo:</span> <span>Fechado</span></li>
              </ul>
            </div>
          </div>

          {/* Direitos Autorais e Redes Sociais */}
          <div className="max-w-6xl mx-auto px-4 mt-12 p-16 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} BarberPro. Todos os direitos reservados.</p>          
          </div>
        </footer>

      </body>
    </html>
  );
}