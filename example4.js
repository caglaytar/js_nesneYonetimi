// Bir ürün listesindeki stok durumlarını kontrol edip ekrana yazdıralım

const urunler = [{
    isim:"Telefon",
    stok:5
},
{
    isim:"Tablet",
    stok:0
},
{
    isim:"Laptop",
    stok:3
}]

urunler.forEach(urun => {
    if (urun.stok > 0) {
        console.log(urun.isim + " : " + urun.stok);
    } else {
        console.log(urun.isim + " stokta yok");
    }
});