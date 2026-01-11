import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-display text-2xl mb-4">Mercería de Telas</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Tu tienda de confianza para fundas de sillones, cortinas, sábanas y 
              cubre acolchados de la mejor calidad. Transformamos hogares con 
              elegancia y estilo.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-background transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#sobre-nosotros"
                  className="hover:text-background transition-colors"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#fundas"
                  className="hover:text-background transition-colors"
                >
                  Fundas para Sillones
                </a>
              </li>
              <li>
                <a
                  href="#cortinas"
                  className="hover:text-background transition-colors"
                >
                  Cortinas
                </a>
              </li>
              <li>
                <a
                  href="#sabanas"
                  className="hover:text-background transition-colors"
                >
                  Sábanas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+54 11 1234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@merceriadetelas.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-sm text-background/50">
          <p>
            © {new Date().getFullYear()} Mercería de Telas. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
