//1 - Pipoca ;
//2 - Macarrão;
//3 - Carne ;
//4 - Feijão ;
//5 - Brigadeiro  
function microondas(prato, tempo) {
    return prato===1 && tempo>=10 && tempo<=20 || prato===2 && tempo>=8 && tempo<=16 || prato===3&&tempo>=15 && tempo<=30 || prato===4 && tempo>=12 && tempo<=24 || prato===5 && tempo>=8 && tempo<=16? "Prato pronto, bom apetite!!!":
           prato===1 && tempo<10 || prato===2 && tempo<8 || prato===3 && tempo<15 || prato===4 && tempo<12 || prato===5 && tempo<8?"Prato pronto, bom apetite!!!(tempo insuficiente)":
           prato===1 && tempo>=20 && tempo<=30 || prato===2 && tempo>16&&tempo<=24 || prato===3 && tempo>30 && tempo<=45 || prato===4 && tempo>24 && tempo<=36||prato==5 && tempo>16 && tempo<=24? "Prato pronto, bom apetite!!! (Sua comida queimou)":
           prato===1 && tempo>=30 || prato===2 && tempo>=24 || prato===3 && tempo>=45 || prato===4 && tempo>=36 || prato===5 && tempo>=24? "Prato pronto, bom apetite!!! (KABUMM !!!)":
           "Prato Inexistente"  
            
}
console.log(microondas(9,12))
