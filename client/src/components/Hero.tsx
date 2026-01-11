import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50" />
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="fabric-pattern"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 30 Q15 15 30 30 T60 30"
                fill="none"
                stroke="hsl(25 45% 35% / 0.1)"
                strokeWidth="1"
              />
              <path
                d="M0 45 Q15 30 30 45 T60 45"
                fill="none"
                stroke="hsl(25 45% 35% / 0.08)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fabric-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Calidad y Elegancia en Telas
          </span>
          <h1 className="text-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
            Transforma tu hogar
            <br />
            <span className="text-primary">con estilo</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Descubre nuestra colección de fundas para sillones, cortinas, sábanas 
            y cubre acolchados de la más alta calidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild data-testid="button-ver-productos">
              <a href="#inicio">Ver Productos</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              data-testid="button-sobre-nosotros"
            >
              <a href="#sobre-nosotros">Sobre Nosotros</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#inicio"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Explorar</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
