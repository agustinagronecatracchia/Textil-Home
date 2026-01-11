import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export function CartDrawer() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] text-center">
        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
          <span className="text-3xl">🛒</span>
        </div>
        <p className="text-muted-foreground">Tu carrito está vacío</p>
        <p className="text-sm text-muted-foreground mt-1">
          Agrega productos para comenzar
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 -mx-6 px-6">
        <div className="space-y-4 py-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4"
              data-testid={`cart-item-${item.id}`}
            >
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm truncate">{item.name}</h4>
                <p className="text-sm text-muted-foreground">
                  ${item.price.toLocaleString()}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    data-testid={`button-decrease-${item.id}`}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="text-sm font-medium w-8 text-center">
                    {item.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    data-testid={`button-increase-${item.id}`}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-destructive hover:text-destructive ml-auto"
                    onClick={() => removeFromCart(item.id)}
                    data-testid={`button-remove-${item.id}`}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="pt-4 border-t mt-auto">
        <div className="flex justify-between items-center mb-4">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="text-lg font-semibold">
            ${totalPrice.toLocaleString()}
          </span>
        </div>
        <Button className="w-full mb-2" size="lg" data-testid="button-checkout">
          Finalizar Compra
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={clearCart}
          data-testid="button-clear-cart"
        >
          Vaciar Carrito
        </Button>
      </div>
    </div>
  );
}
