import { MapPin, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl racing-italic mb-8">Kontakt</h2>
            <p className="text-zinc-400 text-lg mb-12 font-light">
              Haben Sie Fragen oder benötigen Sie einen Termin? Wir sind für Sie da –
              schnell, unkompliziert und präzise.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 border border-white/10 text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-[0.2em] text-white/50 mb-1">Standort</h4>
                  <p className="text-xl">Fultigenstrasse 2, 3088 Rüeggisberg</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 border border-white/10 text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-[0.2em] text-white/50 mb-1">Telefon</h4>
                  <p className="text-xl">031 809 06 82</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 border border-white/10 text-white">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-[0.2em] text-white/50 mb-1">Mobile / WhatsApp</h4>
                  <p className="text-xl">079 627 06 31</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 border border-white/5 bg-black">
              <h4 className="racing-italic text-2xl mb-4">Öffnungszeiten</h4>
              <div className="flex justify-between text-zinc-400">
                <span>Montag - Freitag</span>
                <span>07:30 - 12:00 | 13:15 - 17:30</span>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[400px] grayscale contrast-125 brightness-75 border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730.0349127634786!2d7.447427915603487!3d46.82331357914067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e48b127811a21%3A0x10c5108ceb5fe45!2zR29mZXJzIDIzVCwgMzA4OCBSw7xlZ2dpc2JlcmcsINCo0LLQtdC50YbQsNGA0LjRjw!5e0!3m2!1sru!2sde!4v1530287274277"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
