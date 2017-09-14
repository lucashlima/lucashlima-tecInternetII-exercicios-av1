function exercicio01(a, b){
	var media;
	media = (a + b) / 2;
return media;
}
exercicio01(10,10);

function exercicio02(AV1, AV2){
	var Regra1 = AV1 + AV2;
	var Regra2 = (AV1 + AV2) / 2;
	
	if(Regra1 >= 4 && Regra2 >=6){
 		console.log("Não deve fazer AV3");
    } else 
		console.log("Deve fazer AV3");
}
exercicio02(10,10);

function exercicio03While(numero){
	var i = 1;
	while( i <= numero){
		console.log(i);
		i++;
    }
}
exercicio03While(5);

function exercicio03DoWhile(numero){
	var i = 1;
    do{console.log(i);
		i++;
  	}
	while( i <= numero)
}
exercicio03DoWhile(5);

function exercicio03For(numero){
	for(var i = 1; i <= numero; i++)
	console.log(i);
}
exercicio03For(5);

function exercicio04(de, ate){
	var num = de;
	var msg = "";
	for(var i = 1;i <= ate; i++)
		if(i%num == 0){
		msg +=  i + "\n";
    }
	console.log("Os divisores de " + num + " ate " + ate +":\n" + msg);
}
console.log(exercicio04(7,50));

function exercicio05(){
// Funcao para retornar o menor valor de um array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};

// Funcao para retornar o maior valor de um array
Array.max = function(array) {
    return Math.max.apply(Math, array);
};

var vetor = [6542, 1235, 3215, 6251, 3215, 3225, 4583, 2151, 2356, 1325, 9965, 1230, 4458, 6352];

}
console.log( Array.min(vetor) ); // Menor valor
console.log( Array.max(vetor) ); // Maior valor