// öğrenci notlarını harf notlarına dönüştürme

const ogrenciler =[{
    isim:"Ali",
    not:85
},
{
    isim:"Ayşe",
    not:92
},
{
    isim:"Mehmet",
    not:60
}];

const ogrencilerHarfli = ogrenciler.map(function(ogrenci){
    let harfNotu = '';

    if (ogrenci.not >= 90){
        harfNotu = "A";
    }
    else if (ogrenci.not >= 80){
        harfNotu = "B";
    }
    else if (ogrenci.not >= 70){
        harfNotu = "C";
    }
    else if (ogrenci.not >= 60){
        harfNotu = "D";
    }
    else{
        harfNotu = "F";
    }
    return {
        isim: ogrenci.isim,
        not: ogrenci.not,
        harfNotu: harfNotu
    };

})

console.log(ogrencilerHarfli);