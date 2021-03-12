for (var i = 0; i < 9; i++) {
    console.log(i ," ", convertiInLinguaNumeroXXX(i,"it"),convertiInLinguaNumeroXXX(i,"en"));
}

function convertiInLinguaNumeroXX(n: number,lingua:string): string {
    n= Math.floor(n);
    let parola: string = "";
    // creo array da 0 a 19
    var arrNumeri019:string[][]=[ 
        ['zero', 'uno', 'due', 'tre','quattro', 'cinque', 'sei', 'sette','otto', 'nove','dieci','undici','dodici','tredici','quattordici','quindici','sedici','diciassette','diciotto','diciannove'],
        ['zero', 'one', 'two', 'three','four', 'five', 'six', 'seven','eigth', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    ];

    //creo array per le decine
    let arrDecine:string[][]=[ 
        ['', 'dieci', 'venti', 'trenta','quaranta', 'cinquanta', 'sessanta', 'settanta','ottanta', 'novanta'],
        ['', 'ten', 'twenty', 'thirty','forty','fifty', 'sixty','seventy','eighty', 'ninety']
    ];

    let decine: number=0;
    let unita:number = 0;
    
    if (n<20){
        if (lingua =="it"){
            return arrNumeri019[0][n];
        } else{
            return arrNumeri019[1][n];
        };
    } else{
        // mi dice la decine di appartenza
        decine= Math.floor(n /10);
        // trova numero della decina
        unita = n-decine*10;
        
        if (lingua =="it"){
            parola =  arrDecine[0][decine];
        } else{
            parola =  arrDecine[1][decine];
        };

        if (n>20 && unita!=0) {
            parola += "-";
        }

        //parola += (n> 20 ? "-":"");
        if (unita> 0){
            if (lingua =="it"){
                parola +=  arrNumeri019[0][unita];
            } else{
                parola +=  arrNumeri019[1][unita];
            };
        }else{
          //niente  
        }
        //parola +=(unita> 0 ? arrNumeri019[unita]:"");

}

    return parola;
}

function convertiInLinguaNumeroXXX(n: number,lingua:string): string {

    n= Math.floor(n);
    let parola: string = "";
    let cento: string = "";

    if (lingua =="it"){
        cento="cento";
    } else{
        cento="hundred";
    };

    let centinaia: number=0;
    let resto:number = 0;
    
    if (n<100){
        parola= convertiInLinguaNumeroXX(n,lingua);
    } else{
        // mi dice la centinaia di appartenza (sempre > 0)
        centinaia= Math.floor(n /100);
        // trova restante parte del numero da analizzare
        resto = n-centinaia*100;

        if(centinaia==1 && lingua=="it"){        
            //niente
        }else{
            parola = convertiInLinguaNumeroXX(centinaia,lingua);
            parola +="-"
        }
        // if( centinaia!=1){

        // } else{
            parola += cento;
        // }
        //parola += "-";
        
        
        if (resto!=0){
            parola += "-";
            parola += convertiInLinguaNumeroXX(resto,lingua);
        }

}

    return parola;
}

