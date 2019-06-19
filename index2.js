var totalPuntos = 1230;
var amigos = ["Mike", "Lucas", "Dustin", "Eleven", "Max"];
var artefactos = 3;
var puntosArtefactos = [0,0,0,0,0];

for(var i=0; i<amigos.length;i++){
   
    
    
    for(var j=0; j<artefactos;j++){
        do{

        
        var artefacto=prompt("Digite los puntos del artefacto "+(j+1)+
        " recolectado por "+amigos[i]);
        artefacto=parseInt(artefacto);
    }while(artefacto<1 || artefacto >100)
        puntosArtefactos[i] += artefacto;

        alert("El total de puntos va en " + puntosArtefactos[i]);
    }

    
}
for(var k=0;k<puntosArtefactos.length; k++){
    document.write("<h3>Los puntos que recogio " +amigos[k]+ 
    " fueron en total" +puntosArtefactos);
}





    if (puntosArtefactos>=totalPuntos){
        document.write(" La cantidad de puntos es suficiente para salvar a will " + puntosArtefactos);
    }else{
        return document.write( + " la cantidad de puntos no es suficiente para salvar a will " + puntosArtefactos);
    
    }

