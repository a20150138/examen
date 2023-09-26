var nombre= prompt("Escribe tu nombre")
alert("Bienvenido/a al cuestionario sobre Turismo"+nombre)
var youIn =prompt("1. ¿En qué departamento se encuentra el lago Titicaca?\nA. Tacna\nB. Puno \nC. Cusco")
if (youIn== "B"){
    youIn =1
}else if (youIn== "A"){
    youIn =0
}else if (youIn== "C"){
    youIn=0
}else{
    alert("Estas mal\nMuy mal")};

var younot =prompt("2-¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\nA. Lima e Ica\nB. Arequiupa y Tacna\nC. Piura y Tumbes ")
if(younot== "C"){
    younot=1
}else if(younot== " A"){
    younot=0
}else if(younot== " B"){
    younot=0
}else{
    alert("estas mal")};
var younit =prompt("3. Plato típico de la Selva peruana\nA. Tacacho con cecina *\nB. Arroz con pollo\nC. Lomo saltado") 
if(younit=="A"){
younit= 1
}else if(younot== "C"){
    younot=0
}else if(younot== " B"){
    younot=0
}else{
    alert("estas mal")
}