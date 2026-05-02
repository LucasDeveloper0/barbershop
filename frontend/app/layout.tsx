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

        {/* Rodapé com texto em português */}
        <footer className="bg-zinc-950 text-zinc-400 text-center py-8 text-sm mt-auto">
          <p>© 2026 BarberPro. Todos os direitos reservados.</p>
        </footer>

      </body>
    </html>
  );
}