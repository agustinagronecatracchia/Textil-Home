import { motion } from "framer-motion";
import { Heart, Truck, Award, Clock } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: "Pasión por las Telas",
      description: "Seleccionamos cada tela con amor y dedicación",
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Solo trabajamos con materiales de primera calidad",
    },
    {
      icon: Truck,
      title: "Envíos a Todo el País",
      description: "Llegamos a donde estés con tu pedido",
    },
    {
      icon: Clock,
      title: "Atención Personalizada",
      description: "Te asesoramos para encontrar lo que buscás",
    },
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-display text-4xl md:text-5xl text-foreground mb-6">
            Sobre Nosotros
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Somos un emprendimiento familiar dedicado a embellecer tu hogar con
              las mejores telas y textiles. Con años de experiencia en el rubro,
              nos especializamos en fundas para sillones, cortinas, sábanas y
              cubre acolchados de la más alta calidad.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro compromiso es brindarte productos que combinen durabilidad,
              confort y diseño, para que cada rincón de tu casa refleje tu estilo
              personal. Trabajamos con las mejores telas del mercado y ofrecemos
              una atención cercana y personalizada.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 text-center shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
