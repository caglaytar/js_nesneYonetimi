// Bir alışveriş sepetindeki ürünlerin toplam fiyatını bulalım.

const sepet = [{
    urun:"Telefon",
    adet: 2,
    fiyat:5000
},
{
    urun:"Kulaklık",
    adet:1,
    fiyat:800
},
{
    isim:"Kılıf",
    adet:3,
    fiyat:100
}];

const toplama = sepet.reduce(function(total, urun) {
    return total + urun.fiyat * urun.adet;
}, 0);

console.log(toplama);