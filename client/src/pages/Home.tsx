import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProductSection } from "@/components/ProductSection";
import { Footer } from "@/components/Footer";
import { Product } from "@/context/CartContext";

const fundasProducts: Product[] = [
  {
    id: "funda-1",
    name: "Funda Elegante Gris",
    price: 15000,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    category: "fundas",
  },
  {
    id: "funda-2",
    name: "Funda Moderna Beige",
    price: 18000,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
    category: "fundas",
  },
  {
    id: "funda-3",
    name: "Funda Clásica Azul",
    price: 16500,
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80",
    category: "fundas",
  },
];

const cortinasProducts: Product[] = [
  {
    id: "cortina-1",
    name: "Cortina Lino Natural",
    price: 12000,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    category: "cortinas",
  },
  {
    id: "cortina-2",
    name: "Cortina Blackout Blanca",
    price: 22000,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    category: "cortinas",
  },
  {
    id: "cortina-3",
    name: "Cortina Terciopelo Verde",
    price: 28000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "cortinas",
  },
];

const sabanasProducts: Product[] = [
  {
    id: "sabana-1",
    name: "Juego de Sábanas Blanco",
    price: 8500,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    category: "sabanas",
  },
  {
    id: "sabana-2",
    name: "Cubre Acolchado Premium",
    price: 25000,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    category: "sabanas",
  },
  {
    id: "sabana-3",
    name: "Juego de Sábanas Gris",
    price: 9500,
    image: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=800&q=80",
    category: "sabanas",
  },
];

const allProducts: Product[] = [
  ...fundasProducts,
  ...cortinasProducts,
  ...sabanasProducts,
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        <ProductSection
          id="inicio"
          title="Todos Nuestros Productos"
          description="Explora nuestra colección completa de textiles para el hogar. Calidad y diseño en cada pieza."
          products={allProducts}
        />

        <AboutSection />

        <div className="h-px bg-border" />
        
        <ProductSection
          id="fundas"
          title="Fundas para Sillones"
          description="Protege y renueva tus muebles con nuestras fundas de alta calidad. Diseños modernos y clásicos para todos los gustos."
          products={fundasProducts}
        />
        
        <div className="h-px bg-border" />
        
        <ProductSection
          id="cortinas"
          title="Cortinas"
          description="Dale un toque especial a tus ventanas con nuestra colección de cortinas. Variedad de telas y estilos para cada ambiente."
          products={cortinasProducts}
        />
        
        <div className="h-px bg-border" />
        
        <ProductSection
          id="sabanas"
          title="Sábanas y Cubre Acolchados"
          description="Descansa con el máximo confort. Juegos de sábanas y cubre acolchados de las mejores telas para un sueño reparador."
          products={sabanasProducts}
        />
      </main>
      <Footer />
    </div>
  );
}
