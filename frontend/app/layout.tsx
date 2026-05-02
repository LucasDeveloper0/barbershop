import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "BarberShop",
  description: "Sistema de Agendamento para Barbearia",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body className="bg-zinc-50 text-zinc-900 font-sans antialiased flex flex-col min-h-screen">
        
        {/* BARRA DE NAVEGAÇÃO SUPERIOR */}
        <nav className="bg-zinc-950 text-white p-4 sticky top-0 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-2xl font-black tracking-tighter">
              BARBER<span className="text-amber-500">SHOP</span>
            </Link>
            
            {/* Links do Menu */}
            <div className="hidden md:flex space-x-8 items-center font-medium">
              <Link href="/about" className="hover:text-amber-500 transition-colors">Sobre</Link>
              <Link href="/prices" className="hover:text-amber-500 transition-colors">Serviços</Link>
              <Link href="/gallery" className="hover:text-amber-500 transition-colors">Galeria</Link>
              <Link href="/login" className="hover:text-amber-500 transition-colors">Login</Link>
              <Link href="/profile" className="hover:text-amber-500 transition-colors">Perfil</Link>
              <Link href="/admin" className="hover:text-amber-500 transition-colors">Admin</Link>

              {/* Botão de Destaque */}
              <Link href="/appointment" className="bg-amber-500 text-zinc-950 px-5 py-2.5 rounded-md font-bold hover:bg-amber-400 transition-transform hover:scale-105">
                Agendar
              </Link>
            </div>
          </div>
        </nav>

        {/* CONTEÚDO DAS OUTRAS PÁGINAS ENTRA AQUI */}
        <main className="flex-grow">
          {children}
        </main>

        {/* RODAPÉ */}
        <footer className="bg-zinc-950 text-zinc-400 text-center py-8 text-sm mt-auto">
          <p>© 2026 BarberShop. Todos os direitos reservados.</p>
        </footer>

      </body>
    </html>
  );
}