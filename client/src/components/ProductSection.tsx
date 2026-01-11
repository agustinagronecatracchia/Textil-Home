import { Product } from "@/context/CartContext";
import { ProductCard } from "./ProductCard";
import { motion } from "framer-motion";

interface ProductSectionProps {
  id: string;
  title: string;
  description: string;
  products: Product[];
}

export function ProductSection({
  id,
  title,
  description,
  products,
}: ProductSectionProps) {
  return (
    <section id={id} className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-display text-4xl md:text-5xl text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-16 bg-muted/50 rounded-2xl"
          >
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧵</span>
            </div>
            <p className="text-muted-foreground">
              Próximamente agregaremos productos a esta sección
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
