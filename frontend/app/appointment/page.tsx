import Link from "next/link";

export default function Appointment() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 min-h-[80vh]">
      
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-black text-zinc-50 mb-2">
          Faça seu <span className="text-amber-500">Agendamento</span>
        </h1>
        <p className="text-zinc-600">Selecione o serviço que deseja, escolha o barbeiro de sua preferência, e o melhor dia e horário para você.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COLUNA ESQUERDA: Formulário de Seleção (Ocupa 2 partes da tela) */}
        <div className="lg:col-span-2 space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
          
          {/* Passo 1: Serviço */}
          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <span className="bg-amber-500 text-zinc-950 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
              Selecione o serviço
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Opções simuladas */}
              <label className="border-2 border-amber-500 bg-amber-50 rounded-xl p-4 cursor-pointer relative transition-all">
                <input type="radio" name="service" className="hidden" defaultChecked />
                <div className="font-bold text-zinc-900">Corte Máquina e Tesoura</div>
                <div className="text-sm text-zinc-500 mt-1">1h • R$25.00</div>
              </label>
              <label className="border-2 border-zinc-200 hover:border-amber-300 rounded-xl p-4 cursor-pointer relative transition-all">
                <input type="radio" name="service" className="hidden" />
                <div className="font-bold text-zinc-900">Barba</div>
                <div className="text-sm text-zinc-500 mt-1">30 min • R$15.00</div>
              </label>
              <label className="border-2 border-zinc-200 hover:border-amber-300 rounded-xl p-4 cursor-pointer relative transition-all">
                <input type="radio" name="service" className="hidden" />
                <div className="font-bold text-zinc-900">Corte + Barba</div>
                <div className="text-sm text-zinc-500 mt-1">1h 30min • R$35.00</div>
              </label>
            </div>
          </div>

          <hr className="border-zinc-100" />

          {/* Passo 2: Barbeiro */}
          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <span className="bg-amber-500 text-zinc-950 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
              Escolha o Barbeiro
            </h2>
            <div className="flex flex-wrap gap-4">
              <select className="w-full sm:w-1/2 p-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none bg-white">
                <option>Qualquer um</option>
                <option>José</option>
                <option>Augusto</option>
              </select>
            </div>
          </div>

          <hr className="border-zinc-100" />

          {/* Passo 3: Data e Hora */}
          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <span className="bg-amber-500 text-zinc-950 w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
              Escolha o Dia e o Horário
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Simulação do Input de Data */}
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-2">Data</label>
                <input type="date" className="w-full p-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-zinc-700" />
              </div>
              {/* Simulação dos Horários Livres (Virá do Back-end na Entrega 02) */}
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-2">Horários</label>
                <div className="grid grid-cols-3 gap-2">
                  <button className="py-2 px-1 border border-zinc-200 rounded-md text-sm hover:bg-zinc-100 text-zinc-400 line-through cursor-not-allowed" disabled>09:00</button>
                  <button className="py-2 px-1 bg-amber-500 text-zinc-950 font-bold rounded-md text-sm border border-amber-600">10:00</button>
                  <button className="py-2 px-1 border border-zinc-200 rounded-md text-sm hover:border-amber-500 transition-colors">11:00</button>
                  <button className="py-2 px-1 border border-zinc-200 rounded-md text-sm hover:border-amber-500 transition-colors">14:00</button>
                  <button className="py-2 px-1 border border-zinc-200 rounded-md text-sm hover:border-amber-500 transition-colors">15:30</button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* COLUNA DIREITA: Resumo da Reserva */}
        <div className="lg:col-span-1">
          <div className="bg-zinc-950 text-white p-6 rounded-2xl shadow-lg sticky top-24">
            <h3 className="text-xl font-bold mb-6 border-b border-zinc-800 pb-4">Agendamento</h3>
            
            <div className="space-y-4 text-sm mb-8">
              <div className="flex justify-between">
                <span className="text-zinc-400">Serviço</span>
                <span className="font-semibold text-right">Corte</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Barbeiro</span>
                <span className="font-semibold text-right">Qualquer um</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Data</span>
                <span className="font-semibold text-right">27/04/2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Horário</span>
                <span className="font-semibold text-right">10:00</span>
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-4 mb-8 flex justify-between items-end">
              <span className="text-zinc-400 font-medium">Total</span>
              <span className="text-3xl font-black text-amber-500">R$25.00</span>
            </div>

            <button type="button" className="w-full bg-amber-500 text-zinc-950 font-bold py-4 rounded-xl hover:bg-amber-400 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              Confirmar Agendamento
            </button>
            <p className="text-xs text-zinc-500 text-center mt-4">
              Você pode cancelar em "Meu Perfil".
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}