//Gjinia true i bjen Femen, gjinia false i bjen Mashkull

var personi1 = {
    emri: "Anlya",
    mbiemri: "Kabashi",
    mosha: 28,
    gjinia: true,
    addresa: {
        rruga: "Rruga B",
        numer: "21"
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
    }
}

var personi3 = {
    emri: "Yiber",
    mbiemri: "Prapashtica",
    mosha: 26,
    gjinia: false,
    addresa: {
        rruga: "Rruga C",
        numer: "8"
    }
}

console.log(personi1.emri, personi1.mbiemri, personi1.mosha, personi1.gjinia);
console.log(personi2.emri, personi2.mbiemri, personi2.mosha, personi2.gjinia);
console.log(personi3.emri, personi3.mbiemri, personi3.mosha, personi3.gjinia);

personi3.emri = "Ylber";

console.log(personi3.emri, personi3.mbiemri, personi3.mosha);

console.log("Adersa e " + personi1.emri + " " + personi1.mbiemri + " eshte " + 
personi1.addresa.rruga + ", " + personi1.addresa.numer
)

console.log(personi1.gjatess);