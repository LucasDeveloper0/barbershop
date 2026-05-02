export default function UserProfile() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-10">
      <header>
        <h1 className="text-3xl font-black text-zinc-50">Meu <span className="text-amber-500">Perfil</span></h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* EDIT INFO FORM */}
        <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
          <h2 className="text-xl font-bold mb-6 text-zinc-900">Dados Pessoais</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="sm:col-span-2">
              <label className="block text-sm font-bold text-zinc-700 mb-2">Nome</label>
              <input type="text" className="w-full p-3 border border-zinc-600 rounded-lg outline-none focus:ring-2 focus:ring-amber-500 transition" defaultValue="Márcio Ferreira Lima" />
            </div>
            <div>
              <label className="block text-sm font-bold text-zinc-700 mb-2">Email</label>
              <input type="email" className="w-full p-3 border border-zinc-600 rounded-lg outline-none focus:ring-2 focus:ring-amber-500 transition" defaultValue="marcio@example.com" />
            </div>
            <div>
              <label className="block text-sm font-bold text-zinc-700 mb-2">Telefone</label>
              <input type="tel" className="w-full p-3 border border-zinc-600 rounded-lg outline-none focus:ring-2 focus:ring-amber-500 transition" defaultValue="(81) 99999-9999" />
            </div>
            <div className="sm:col-span-2 pt-4">
              <button type="button" className="bg-zinc-950 text-white font-bold px-6 py-3 rounded-lg hover:bg-zinc-800 transition">Update Profile</button>
            </div>
          </form>
        </div>

        {/* ACCOUNT SUMMARY CARD */}
        <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
          <h2 className="font-bold text-zinc-900 mb-4">Membership</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl border border-zinc-200 text-center">
              <p className="text-xs text-zinc-400 uppercase font-black">Past Visits</p>
              <p className="text-2xl font-black text-amber-500">08</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-zinc-200 text-center">
              <p className="text-xs text-zinc-400 uppercase font-black">Loyalty Points</p>
              <p className="text-2xl font-black text-zinc-900">120</p>
            </div>
          </div>
          <p className="text-xs text-zinc-500 mt-6 text-center italic">Member since October 2025</p>
        </div>
      </div>

      {/* RECENT HISTORY */}
      <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
        <h2 className="text-xl font-bold mb-6">Recent Booking History</h2>
        <div className="space-y-4">
          {[
            { date: 'Oct 24, 2025', service: 'Classic Haircut', barber: 'John Doe', price: '$25.00' },
            { date: 'Sep 10, 2025', service: 'Beard Trim', barber: 'Mike Smith', price: '$15.00' },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center p-4 border border-zinc-100 rounded-xl hover:bg-zinc-50 transition">
              <div>
                <p className="font-bold text-zinc-900">{item.service}</p>
                <p className="text-xs text-zinc-500">{item.date} • with {item.barber}</p>
              </div>
              <span className="font-black text-zinc-900">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}