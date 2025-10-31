function Carrito(){
    this.productos = [];
    this.total = 0
    this.agregarP= function(producto, precio){
        this.productos.push({nproduc:producto,precio:precio})
        this.total+=precio
    };
     this.Descuento = function(){
        if (this.total>100){
            console.log(`"Por su total de: ${this.total} le aplica un descuento del 10%"`);
        }else if(this.total > 50 && this.total <= 100){
            console.log(`"Por su total de: ${this.total} le aplica un descuento del 5%"`);
        }else{
            console.log(`"Por su total de: ${this.total} no le aplica ningun descuento"`);
            
        };
    }
 };
   
let Ncarrito =new Carrito();
 Ncarrito.agregarP("Leche", 30);
Ncarrito.agregarP("Cereal", 40);
Ncarrito.agregarP("Pan", 35);
console.log(Ncarrito.productos);

Ncarrito.Descuento();
