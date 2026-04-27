import Link from "next/link";

export default function Prices() {
  // Lista estática simulando dados que futuramente virão da API Spring Boot
  const services = [
    { id: 1, name: "Corte Máquina e/ou Tesoura", duration: "1h", price: "R$25.00", desc: "Corte Máquina e Tesoura. Podendo ser de acordo com a sua vontade." },
    { id: 2, name: "Barba", duration: "30 min", price: "R$15.00", desc: "Barba desenhada, cortada ou depilada de acordo com a sua vontade." },
    { id: 3, name: "Combo Corte e Barba", duration: "1h 30min", price: "R$35.00", desc: "Combo de Corte e Barba. De acordo com a sua vontade." },
    { id: 4, name: "Reflexo ou Descoloração", duration: "2h", price: "R$70.00", desc: "Descoloração do seu cabelo de acordo com a sua vontade." },
    { id: 5, name: "Progressiva", duration: "2h", price: "R$100.00", desc: "Progressiva no cabelo." },
    { id: 6, name: "Corte + Progressiva", duration: "3h min", price: "R$120.00", desc: "Progressiva + Corte de cabelo de acordo com a sua vontade." },
  ];

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-zinc-50 mb-4">
          Nossos <span className="text-amber-500">Serviços</span>
        </h1>
        <p className="text-lg text-zinc-600">
            Nosso Serviços e Preços.
        </p>
      </div>

      {/* Grid de Serviços */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.id} className="bg-white border border-zinc-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-zinc-900 pr-4">{service.name}</h3>
                <span className="text-xl font-black text-amber-600">{service.price}</span>
              </div>
              <p className="text-sm text-zinc-500 mb-6 leading-relaxed">{service.desc}</p>
            </div>
            
            <div className="flex items-center justify-between border-t border-zinc-100 pt-4 mt-auto">
              <span className="text-sm font-medium text-zinc-400">
                ⏱ {service.duration}
              </span>
              <Link href="/appointment" className="text-sm font-bold text-zinc-900 bg-amber-100 px-4 py-2 rounded hover:bg-amber-200 transition-colors">
                Agendar
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Chamada para Ação Inferior */}
      <div className="mt-20 text-center bg-zinc-950 text-white p-10 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold mb-3">Preparado para renovar o estilo?</h3>
        <Link href="/appointment" className="inline-block bg-amber-500 text-zinc-950 font-bold px-8 py-3 rounded-md hover:bg-amber-400 hover:scale-105 transition-transform">
          Marque Seu Corte de Cabelo
        </Link>
      </div>

    </div>
  );
}
