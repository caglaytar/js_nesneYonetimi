// map ile bir ürün listesini fiyatlara KDV ekleyerek güncellemek
/*
const urunler = [
    {
        isim:"Telefon",
        fiyat : 10000
    },
    {
        isim:"Bilgisayar",
        fiyat:20000
    },
    {
        isim:"Tablet",
        fiyat:8000
    }
];

const yeniUrun =urunler.map(function(urun){
    return {
        isim: urun.isim,
        fiyat: urun.fiyat * (0.18) + urun.fiyat
    }
})

console.log(yeniUrun);

// filter ile belirli bir fiyat aralığındaki ürünleri bulmak 
const urunler = [
    {
        isim:"Telefon",
        fiyat : 10000
    },
    {
        isim:"Bilgisayar",
        fiyat:20000
    },
    {
        isim:"Tablet",
        fiyat:8000
    }
];

const filtreleme =urunler.filter(function(urun){
    return urun.fiyat > 10000
});
console.log(filtreleme);

// reduce ile toplam fiyatı toplamak

const urunler = [
    {
        isim:"Telefon",
        fiyat : 10000
    },
    {
        isim:"Bilgisayar",
        fiyat:20000
    },
    {
        isim:"Tablet",
        fiyat:8000
    }
];

const toplamFiyat = urunler.reduce(function(total, urun) {
    return total + urun.fiyat;
}, 0

);
console.log(toplamFiyat);*/

//foreach ile ürünlerin adlarını ekrana yazdırmak

const urunler = [
    {
        isim:"Telefon",
        fiyat : 10000
    },
    {
        isim:"Bilgisayar",
        fiyat:20000
    },
    {
        isim:"Tablet",
        fiyat:8000
    }
];

urunler.forEach(urun => console.log(urun.isim));
