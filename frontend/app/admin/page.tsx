import Link from "next/link";

export default function AdminDashboard() {
  const stats = [
    { label: "Agendamentos de Hoje", value: "12", trend: "+20%", color: "text-amber-500" },
    { label: "Receita Mensal", value: "$4,250", trend: "+12%", color: "text-green-500" },
    { label: "Barbeiros Ativos", value: "3", trend: "Disponiveis", color: "text-blue-500" },
  ];

  const recentBookings = [
    { id: "BK-102", cliente: "Carlos Silva", servico: "Corte", horario: "14:00", status: "Agendado" },
    { id: "BK-103", cliente: "Marcos Oliveira", servico: "Barba", horario: "15:30", status: "Feito" },
    { id: "BK-104", cliente: "Andre Souza", servico: "Corte e Barba", horario: "16:45", status: "Agendado" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 space-y-10">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-zinc-50">Admin<span className="text-amber-500">Dashboard</span></h1>
        </div>
        <div className="flex gap-3">
          <button className="bg-zinc-900 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-zinc-800 transition">Add Service</button>
          <button className="bg-amber-500 text-zinc-950 px-4 py-2 rounded-lg font-bold text-sm hover:bg-amber-400 transition">Add Barber</button>
        </div>
      </header>

      {/* DASHBOARD STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</p>
            <div className="flex items-baseline gap-3 mt-2">
              <span className={`text-3xl font-black ${stat.color}`}>{stat.value}</span>
              <span className="text-xs font-bold text-zinc-400">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* RECENT APPOINTMENTS TABLE */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-zinc-100 flex justify-between items-center">
            <h2 className="font-bold text-lg text-zinc-900">Agendamentos</h2>
            <Link href="#" className="text-amber-600 text-sm font-bold hover:underline">Ver todos</Link>
          </div>
          <table className="w-full text-left border-collapse">
            <thead className="bg-zinc-50 text-xs font-bold text-zinc-500 uppercase">
              <tr>
                <th className="px-6 py-4">Cliente</th>
                <th className="px-6 py-4">Serviço</th>
                <th className="px-6 py-4">Horário</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-zinc-100">
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-zinc-50 transition">
                  <td className="px-6 py-4 font-medium text-zinc-900">{booking.cliente}</td>
                  <td className="px-6 py-4 text-zinc-600">{booking.servico}</td>
                  <td className="px-6 py-4 text-zinc-600">{booking.horario}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                      booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 
                      booking.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-zinc-100 text-zinc-700'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TEAM QUICK VIEW */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6">
          <h2 className="font-bold text-lg text-zinc-900 mb-6">Disponibilidade</h2>
          <div className="space-y-6">
            {['John Doe', 'Mike Smith', 'Sarah Connor'].map((barber, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center font-bold text-zinc-500 text-xs">
                    {barber.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900">{barber}</p>
                    <p className="text-xs text-zinc-500 italic">Barbeiro</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase">Disponivel</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}