import React from 'react';

export const WhyUs: React.FC = () => {
  const principles = [
    {
      icon: "🎯",
      title: "Ehtiyaca fokuslanırıq",
      desc: "Lazımsız və mürəkkəb funksiyalarla tətbiqi ağırlaşdırmırıq."
    },
    {
      icon: "✨",
      title: "Sadə istifadə təcrübəsi",
      desc: "İstifadəçi tətbiqi açdığı ilk andan nə edəcəyini intuitiv anlayır."
    },
    {
      icon: "💎",
      title: "Premium hiss, sadə dizayn",
      desc: "Müasir və keyfiyyətli görünüşü maksimum istifadə rahatlığı ilə birləşdiririk."
    },
    {
      icon: "💰",
      title: "Münasib və əlçatan",
      desc: "Yüksək keyfiyyətli həllərimizi hər kəs üçün əlçatan qiymətlərlə təqdim edirik."
    },
    {
      icon: "🚫",
      title: "Sonsuz reklamlara yox",
      desc: "İstifadəçinin diqqətini yayındıran bezdirici reklam axınından uzaq dururuq."
    },
    {
      icon: "🔄",
      title: "Davamlı inkişaf",
      desc: "Rəylərinizə əsasən tətbiqlərimizi müntəzəm olaraq təkmilləşdiririk."
    }
  ];

  const cards = [
    { number: '01', title: 'Sadə', desc: 'İlk istifadədən aydın və rahat.' },
    { number: '02', title: 'Faydalı', desc: 'Real ehtiyaclar üçün hazırlanmış tətbiqlər.' },
    { number: '03', title: 'Münasib', desc: 'Keyfiyyətli məhsulu əlçatan qiymətlərlə.' },
    { number: '04', title: 'İstifadəçi yönümlü', desc: 'Qərarlarımızı istifadəçinin rahatlığına görə veririk.' },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white px-6 md:px-12 border-t border-slate-800/50 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20">
            Brend Fəlsəfəmiz
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight pt-2">
            Niyə Nibras Code?
          </h2>
          <p className="text-lg md:text-2xl font-medium text-purple-300 max-w-3xl mx-auto">
            Texnologiyanı mürəkkəbləşdirmək yox, sadələşdirmək üçün.
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed pt-2">
            Sadəlik bizim üçün xüsusiyyətdir. Biz hər tətbiqə mümkün qədər çox funksiya doldurmağa çalışmırıq. Əsas məqsədimiz insanların gündəlik ehtiyaclarını sadə, rahat və faydalı tətbiqlərlə həll etməkdir.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-purple-500/50 transition-all duration-300 shadow-xl backdrop-blur-sm group hover:-translate-y-1"
            >
              <div className="text-xs font-mono font-bold text-purple-400 mb-6 px-3 py-1 bg-purple-500/10 rounded-full w-max border border-purple-500/20">
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

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {principles.map((item, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:bg-slate-900/70 transition-all">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h4 className="text-lg font-bold mb-2 text-slate-200">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote & Value Proposition */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-950/40 via-slate-900 to-slate-950 border border-purple-500/30 text-center max-w-4xl mx-auto shadow-2xl relative">
          <blockquote className="text-2xl md:text-3xl font-bold italic text-white mb-6">
            "Çox funksiya yox. Doğru funksiyalar."
          </blockquote>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            Nibras Code-un məqsədi “daha çox satmaq” deyil, “daha çox fayda yaratmaq”dır.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm font-medium text-purple-300">
            <span className="px-4 py-2 bg-slate-900 rounded-lg border border-purple-500/20">✨ "Bunu istifadə etmək çox asandır."</span>
            <span className="px-4 py-2 bg-slate-900 rounded-lg border border-purple-500/20">🎯 "Mənə məhz bu lazım idi."</span>
          </div>
        </div>

      </div>
    </section>
  );
};
