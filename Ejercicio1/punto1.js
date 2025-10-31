function Libro (titulo, autor){
    this.titulo = titulo;
    this.autor = autor;
    this.prestar = false
    this.prestar = function() { 
    if (!this.prestado) {
         this.prestado = true; return `"${this.titulo}" ha sido prestado.`; 
        } else { return `Error: "${this.titulo}" ya está prestado.`; } };
}

let Libro1 = new Libro("La metamorfosis, Franz Kafka");
console.log(Libro1.prestar());
console.log(Libro1.prestar());


