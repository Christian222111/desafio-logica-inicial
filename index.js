let nomeHeroi = "Stark";
nivelHeroi = "";
XP = "2500";
if(XP <= 1000){
    console.log("O herói de nome "+nomeHeroi + "esta no nivel Ferro");
}else if(XP >= 1.001 || XP <= 2.000){
    console.log("O herói de nome "+nomeHeroi + "esta no nivel Bronze");
}else if(XP >= 2.001 || XP <=5.000 ){
    console.log("O herói de nome "+nomeHeroi + "esta no nivel Prata");
}else if(XP >= 6.001 || XP <=7.000){
    console.log("O herói de nome "+nomeHeroi + "esta no nivel Ouro");
}else if(XP >= 7.001 || XP <= 8.000){
    console.log("O herói de nome "+nomeHeroi + "esta no nivel Platina");
}else if( XP >= 8.001 || XP <= 9.000){
    console.log("O herói de nome "+nomeHeroi + "esta no nivel Ascendente");
}else if(XP >= 9.001 || XP <= 10.001){
    console.log("O herói de nome "+nomeHeroi + "esta no nivel Imortal");
}else if(XP >= 10.001){
    console.log("O herói de nome "+nomeHeroi + "esta no nivel Radiantes");
}