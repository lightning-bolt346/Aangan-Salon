export function HowItWorks() {
  const steps = [
    { number: '1', title: 'Choose your service', desc: 'Select from our wide range of salon-at-home services.' },
    { number: '2', title: 'Pick preferred date & time', desc: 'Fill out our simple form with your location and schedule.' },
    { number: '3', title: 'Get confirmation', desc: 'Our team will promptly confirm your slot on WhatsApp or call.' },
    { number: '4', title: 'Relax at home', desc: 'Our beauty professional visits your home with full hygienic gear.' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {steps.map((step, idx) => (
        <div key={idx} className="relative flex flex-col items-center text-center">
          {idx !== steps.length - 1 && (
            <div className="hidden md:block absolute top-[32px] left-[60%] w-[80%] h-[1px] border-t border-dashed border-champagne/60 z-0"></div>
          )}
          <div className="w-16 h-16 rounded-full bg-white text-champagne text-2xl font-serif italic border border-champagne/30 flex items-center justify-center mb-6 relative z-10 shadow-sm">
            {step.number}
          </div>
          <h3 className="font-serif italic text-xl text-deep-plum mb-3">{step.title}</h3>
          <p className="text-[13px] text-charcoal/80 leading-relaxed font-light">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}
