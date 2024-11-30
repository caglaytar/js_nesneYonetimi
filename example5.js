// Bir öğrenci listesi üzerinden şu işlemleri yapalım.
//18 yaşından büyük olanları seçelim
const ogrenciler =[{
    isim:"Ali",
    yas:16,
    not: 85
},
{
    isim:"Ayşe",
    yas:19,
    not:92
},
{
    isim:"Fatma",
    yas:22,
    not:76
},
{
    isim:"Mehmet",
    yas:17,
    not:60
}];


const resitOlanlar = ogrenciler.filter(function(ogrenci) {
    return ogrenci.yas > 18;
});

console.log(resitOlanlar);

//Bu öğrencilerin notlarını harf notuna çevirelim.
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

