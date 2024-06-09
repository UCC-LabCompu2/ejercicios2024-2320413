/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function cambiarUnidades(id, valor){
    var metro, pulgada, pie, yarda;
    if (valor.includes(",")){
        valor=valor.replace(",", ".");
    }
    if(isNaN(valor)){
        alert("Se ingresó un valor inválido." +id);
        metro="";
        pulgada="";
        pie=" ";
        yarda="";
    }else if (id=="metro"){
        metro=valor;
        pulgada=39.3701*valor;
        pie=3.28084*valor;
        yarda=1.09361*value;
    }else if(id=="pulgada"){
        pulgada=valor;
        metro=0.0254*valor;
        pie=0.0833*valor;
        yarda=0.278*value;
    }else if(id=="yarda"){
        yarda=valor;
        pulgada=36*valor;
        pie=3*valor;
        metro=0.914*value;
    }else if (id=="pie"){
        pie=valor;
        pulgada=12*valor;
        metro=0.305*valor;
        yarda=0.333*value;
    }
    document.lasUnidades.unid_metro.value= Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value= Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value= Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value= Math.round(yarda*100)/100;
}

