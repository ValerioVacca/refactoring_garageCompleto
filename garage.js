let garage = {

    moto: [
        { brand: "Honda", model: "Forza 350" },
        { brand: "Piaggio", model: "Vespa" },
        { brand: "Honda", model: "X-ADV 750" },
    ],

    automobili: [
        { brand: "Audi", model: "A4" },
        { brand: "Audi", model: "A5" },
        { brand: "Fiat", model: "Panda" },
        { brand: "Honda", model: "CR-V" },
    ],


    // METODO showVettura
    showVettura : function (marca) {
    
        let motorazzi = this.moto.filter((motorino) => motorino.brand.toLowerCase() == marca.toLowerCase());
        
        let macchinazze = this.automobili.filter((macchinina) => macchinina.brand.toLowerCase() == marca.toLowerCase());
        
        //MOTORI
        if (motorazzi.length > 0) {
            console.log(`Per questo brand di motori, abbiamo i seguenti modelli:`);
            motorazzi.forEach((motorino) =>
                console.log(`- ${motorino.model}`)
            );
        } else {
            console.log(`Mi dispiace, non c'è nessun modello per la moto selezionata: ${marca.toLowerCase()};`);
        }

        //AUTO
        if (macchinazze.length > 0) {
            console.log(`Per questo brand di automobili, abbiamo i seguenti modelli:`);
            filtered.forEach((macchinina) =>
                console.log(`- ${macchinina.model}`)
            );
        } else {
            console.log(`Mi dispiace, non c'è nessun modello per la macchina selezionata: ${marca.toLowerCase()};`);
        }

    }
    // fine metodo showvettura 
}
// FINE OGGETTO GARAGE


let brand = prompt('Che marca di vettura stai ricercando?');
garage.showVettura(brand);