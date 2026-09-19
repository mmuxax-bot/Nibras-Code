import React from 'react';

export const WhyUs: React.FC = () => {
  const cards = [
    { number: '01', title: 'Sadə', desc: 'İlk istifadədən aydın və rahat.' },
    { number: '02', title: 'Faydalı', desc: 'Real ehtiyaclar üçün hazırlanmış tətbiqlər.' },
    { number: '03', title: 'Münasib', desc: 'Keyfiyyətli məhsulu əlçatan qiymətlərlə.' },
    { number: '04', title: 'İstifadəçi yönümlü', desc: 'Qərarlarımızı istifadəçinin rahatlığına görə veririk.' },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white px-6 md:px-12 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        
        {/* Ana Başlıq və Fəlsəfə */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Niyə Nibras Code?
          </h2>
          <p className="text-lg md:text-2xl font-medium text-purple-400 max-w-3xl mx-auto">
            Texnologiyanı mürəkkəbləşdirmək yox, sadələşdirmək üçün.
          </p>
        </div>

        {/* 4 Premium Kart */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 shadow-xl group hover:-translate-y-1"
            >
              <div className="text-xs font-mono font-bold text-purple-400 mb-6 px-3 py-1 bg-purple-500/10 rounded-full w-max">
                {card.number}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                {card.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Sitat və Yanaşma */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-900/30 via-slate-900 to-slate-950 border border-purple-500/20 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <blockquote className="text-2xl md:text-3xl font-bold italic text-white mb-6">
            "Çox funksiya yox. Doğru funksiyalar."
          </blockquote>
          
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Bizim üçün yaxşı tətbiq yüzlərlə funksiyası olan mürəkkəb tətbiq deyil. İstifadəçinin ehtiyac duyduğu işi tez, rahat və problemsiz görə bildiyi tətbiqdir.
          </p>
        </div>

      </div>
    </section>
  );
};
