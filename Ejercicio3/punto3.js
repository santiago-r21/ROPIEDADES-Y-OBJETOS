function Reproductor() {
    this.estado = "detenido";

    this.repro = function() {
        
        if (this.estado === "detenido" || this.estado === "pausado") {
        this.estado = "reproduciendo";
        console.log(" la cancionse esta: " + this.estado);
    } else {
        console.log(" Ya se está reproduciendo la musica");
    };
    };

    this.pausar = function() {
        if(this.estado==="reproduciendo"){
            this.estado = "pausado";
            console.log("la cancion se ha: " + this.estado);
        }else{
            console.log("Escoge reproducir para que suene la musica");
            
        }
        
    }

    this.detener = function() {
        this.estado = "detenido";
        console.log("la cancion ha: " + this.estado);
    };
}

let musica = new Reproductor();
musica.repro();    
musica.pausar();
musica.detener();