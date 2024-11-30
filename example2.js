//Bir öğrenci listesinden yşı 18den küçük olanları seçelim.

const ogrenciler = [{
    isim:"Ali",
    yas:16
},
{
    isim:"Ayşe",
    yas:19
},
{
    isim:"Fatma",
    yas:17
},
{
    isim:"Mehmet",
    yas:22
}];

const gencOgrenciler = ogrenciler.filter(function(ogrenci) {
    return ogrenci.yas < 18;
});

console.log(gencOgrenciler);