import { useCart, Product } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      data-testid={`card-product-${product.id}`}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="text-display text-lg text-foreground mb-1">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3">
          {product.category === "fundas"
            ? "Funda para Sillón"
            : "Cortina"}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-primary">
            ${product.price.toLocaleString()}
          </span>
          <Button
            onClick={handleAddToCart}
            size="sm"
            className={`transition-all duration-300 ${
              added
                ? "bg-green-600 hover:bg-green-600"
                : ""
            }`}
            data-testid={`button-add-${product.id}`}
          >
            {added ? (
              <>
                <Check className="h-4 w-4 mr-1" />
                Agregado
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4 mr-1" />
                Agregar
              </>
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
