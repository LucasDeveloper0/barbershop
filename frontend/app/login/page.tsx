import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-zinc-900">Bem vindo!</h2>
          <p className="text-zinc-500 mt-2">logue na sua conta para agendar o seu corte</p>
        </div>

        <form className="space-y-5">
          {/* Campo de Email */}
          <div>
            <label className="block text-sm font-bold text-zinc-700 mb-1" htmlFor="email">
              Email
            </label>
            <input 
              type="email" 
              id="email"
              className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" 
              placeholder="name@example.com" 
            />
          </div>

          {/* Campo de Senha */}
          <div>
            <label className="block text-sm font-bold text-zinc-700 mb-1" htmlFor="password">
              Senha
            </label>
            <input 
              type="password" 
              id="password"
              className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" 
              placeholder="••••••••" 
            />
          </div>

          {/* Opções extras */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-amber-500 w-4 h-4" />
              <span className="text-zinc-600">Permanecer Logado</span>
            </label>
            <Link href="#" className="text-amber-600 font-semibold hover:underline">
              Esqueceu a senha?
            </Link>
          </div>

          {/* Botão de Envio */}
          <button 
            type="button" 
            className="w-full bg-zinc-950 text-white font-bold py-3 rounded-lg hover:bg-zinc-800 transition-colors mt-2"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-zinc-600">
          Ainda não tem uma contato?{' '}
          <Link href="#" className="text-amber-600 font-bold hover:underline">
            Cadastre-se Agora
          </Link>
        </div>

      </div>
    </div>
  );
}