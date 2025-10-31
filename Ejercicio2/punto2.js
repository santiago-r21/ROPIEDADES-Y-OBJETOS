function ListaComp(productos){
    this.productos = [];
    this.agregarP= function(producto){
        this.productos.push(producto)
    }
    this.mostrar = function(){
        for (let i=0; i< this.productos.length;i++)
            console.log(`${i} el producto es : ${this.productos[i]}`);
    }
    }
    
let listaC = new ListaComp()
listaC.agregarP("peras");
listaC.agregarP("crema dental");
listaC.agregarP("leche");

listaC.mostrar()