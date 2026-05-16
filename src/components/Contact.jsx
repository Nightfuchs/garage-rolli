import { MapPin, Phone, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-black scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
          <div className="p-12 md:p-20 bg-black">
            <span className="text-xs font-bold tracking-[0.4em] text-white/30 mb-8 block uppercase">Kontakt & Anfahrt</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-12">
              Wir sind für <br/> Sie da
            </h2>

            <div className="space-y-12">
              <div className="flex items-start gap-8">
                <MapPin className="text-white/20 mt-1" size={24} />
                <div>
                  <h4 className="text-[10px] font-bold text-white/40 mb-2 uppercase tracking-[0.2em]">Standort</h4>
                  <p className="text-xl font-bold text-white uppercase tracking-wider">Fultigenstrasse 2<br/>3088 Rüeggisberg</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <Phone className="text-white/20 mt-1" size={24} />
                <div>
                  <h4 className="text-[10px] font-bold text-white/40 mb-2 uppercase tracking-[0.2em]">Telefon</h4>
                  <p className="text-xl font-bold text-white">031 809 06 82</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <MessageSquare className="text-white/20 mt-1" size={24} />
                <div>
                  <h4 className="text-[10px] font-bold text-white/40 mb-2 uppercase tracking-[0.2em]">WhatsApp</h4>
                  <p className="text-xl font-bold text-white">079 627 06 31</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <Clock className="text-white/20 mt-1" size={24} />
                <div>
                  <h4 className="text-[10px] font-bold text-white/40 mb-2 uppercase tracking-[0.2em]">Öffnungszeiten</h4>
                  <p className="text-sm font-light text-white/60 mt-1">
                    <span className="font-bold text-white">Montag - Freitag</span><br/>
                    07:30 - 12:00 | 13:15 - 17:30
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-full min-h-[500px] grayscale brightness-50 hover:brightness-100 hover:grayscale-0 transition-all duration-1000">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730.2241639097725!2d7.439603376856956!3d46.82119104199146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e39268393e157%3A0x286784d1685e13d1!2sGarage%20Rolli%2C%20Inh.%20Rolli%20Martin!5e0!3m2!1sde!2sde!4v1709123456789!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Garage Rolli Standort"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
