//1 - Pipoca – 10 segundos (padrão);
//2 - Macarrão – 8 segundos (padrão);
//3 - Carne – 15 segundos (padrão);
//4 - Feijão – 12 segundos (padrão);
//5 - Brigadeiro – 8 segundos (padrão); 
//  Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
//  Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
//- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
//- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
//- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".



function microondas(prato, tempo) {
    return prato===1 && tempo>=10 && tempo<=20 || prato===2 && tempo>=8 && tempo<=16 || prato===3&&tempo>=15 && tempo<=30 || prato===4 && tempo>=12 && tempo<=24 || prato===5 && tempo>=8 && tempo<=16? "Prato pronto, bom apetite!!!":
           prato===1 && tempo<10 || prato===2 && tempo<8 || prato===3 && tempo<15 || prato===4 && tempo<12 || prato===5 && tempo<8?"Prato pronto, bom apetite!!!(tempo insuficiente)":
           prato===1 && tempo>=20 && tempo<=30 || prato===2 && tempo>16&&tempo<=24 || prato===3 && tempo>30 && tempo<=45 || prato===4 && tempo>24 && tempo<=36||prato==5 && tempo>16 && tempo<=24? "Prato pronto, bom apetite!!! (Sua comida queimou)":
           prato===1 && tempo>=30 || prato===2 && tempo>=24 || prato===3 && tempo>=45 || prato===4 && tempo>=36 || prato===5 && tempo>=24? "Prato pronto, bom apetite!!! (KABUMM !!!)":
           "Prato Inexistente"  
            
}
console.log(microondas(9,12))