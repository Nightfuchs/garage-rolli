import { MapPin, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black scroll-mt-20 border-t-8 border-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="p-12 border-8 border-white shadow-[15px_15px_0px_#e11d48]">
            <h2 className="text-5xl md:text-7xl comic-title mb-8">KONTAKT</h2>
            <p className="noir-text text-xl mb-12 font-bold text-white">
              HABEN SIE FRAGEN ODER BENÖTIGEN SIE EINEN TERMIN? WIR SIND FÜR SIE DA –
              NOIR-PRÄZISE.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 border-l-4 border-sin-red pl-6">
                <div>
                  <h4 className="comic-title text-sm text-sin-red mb-1">STANDORT</h4>
                  <p className="text-2xl comic-title text-white">FULTIGENSTRASSE 2, 3088 RÜEGGISBERG</p>
                </div>
              </div>

              <div className="flex items-start gap-6 border-l-4 border-sin-red pl-6">
                <div>
                  <h4 className="comic-title text-sm text-sin-red mb-1">TELEFON</h4>
                  <p className="text-2xl comic-title text-white">031 809 06 82</p>
                </div>
              </div>

              <div className="flex items-start gap-6 border-l-4 border-sin-red pl-6">
                <div>
                  <h4 className="comic-title text-sm text-sin-red mb-1">MOBILE / WHATSAPP</h4>
                  <p className="text-2xl comic-title text-white">079 627 06 31</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 border-4 border-white bg-black">
              <h4 className="comic-title text-3xl mb-4 text-sin-red">ÖFFNUNGSZEITEN</h4>
              <div className="flex flex-col gap-2 noir-text font-bold text-white">
                <span className="text-xl">MONTAG - FREITAG</span>
                <span className="text-lg opacity-70">07:30 - 12:00 | 13:15 - 17:30</span>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[400px] border-8 border-white sin-city-filter">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730.2241639097725!2d7.439603376856956!3d46.82119104199146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e39268393e157%3A0x286784d1685e13d1!2sGarage%20Rolli%2C%20Inh.%20Rolli%20Martin!5e0!3m2!1sde!2sde!4v1709123456789!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Garage Rolli Standort"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
