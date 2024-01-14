//Gjinia true i bjen Femen, gjinia false i bjen Mashkull

var personi1 = {
    emri: "Anlya",
    mbiemri: "Kabashi",
    mosha: 28,
    gjinia: true,
    addresa: {
        rruga: "Rruga A",
        numer: "21"
    },
    emrinPlote: function() {
        return this.emri + " " + this.mbiemri;
    },
    ndrroAdresen: function(rrugaRe, numerRi) {
        this.addresa.rruga = rrugaRe;
        this.addresa.numer = numerRi;
    },
    shtpyAdresen: function() {
        console.log("Vendi ku banon " + this.emri + " " + this.mbiemri + " eshte " + 
        this.addresa.rruga + ", " + this.addresa.numer
        )
    }
}

var personi2 = {
    emri: "Gent",
    mbiemri: "Zarari",
    mosha: 25,
    gjinia: false,
    addresa: {
        rruga: "Rruga B",
        numer: "22"
    },
    emrinPlote: function() {
        return this.emri + " " + this.mbiemri;
    },
    ndrroAdresen: function(rrugaRe, numerRi) {
        this.addresa.rruga = rrugaRe;
        this.addresa.numer = numerRi;
    },
    shtpyAdresen: function() {
        console.log("Vendi ku banon " + this.emri + " " + this.mbiemri + " eshte " + 
        this.addresa.rruga + ", " + this.addresa.numer
        )
    }
}

var personi3 = {
    emri: "Ylber",
    mbiemri: "Prapashtica",
    mosha: 26,
    gjinia: false,
    addresa: {
        rruga: "Rruga C",
        numer: "8"
    },
    emrinPlote: function() {
        return this.emri + " " + this.mbiemri;
    },
    ndrroAdresen: function(rrugaRe, numerRi) {
        this.addresa.rruga = rrugaRe;
        this.addresa.numer = numerRi;
    },
     shtpyAdresen: function() {
        console.log("Vendi ku banon " + this.emri + " " + this.mbiemri + " eshte " + 
        this.addresa.rruga + ", " + this.addresa.numer
        )
    }
}

personi1.shtpyAdresen();
personi2.shtpyAdresen();
personi3.shtpyAdresen();

personi1.ndrroAdresen("Rruga D", 4);
personi3.ndrroAdresen("Rruga H", 7);

personi1.shtpyAdresen();
personi2.shtpyAdresen();
personi3.shtpyAdresen();

document.getElementById("test");
