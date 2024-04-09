alert("Qual o valor da maçã atualmente?");

var macas=parseInt(prompt("Digite a quantidade de maçãs compradas"));
 if (macas <12){
    var total=( macas * 1.3);


    alert("O valor a ser pago é:"+ total);

 } else{
    total=( macas*1);
    alert("O valor a ser pago é:"+ total);
 }
