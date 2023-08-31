console.log(+true);

console.log(!"Ozan");

//1 and false

/*
+, işlemeye çalıştığı değişkeni sayıya çevirmeye çalışır. Bu yüzden true'yu bir sayıya çevirir. True ve false matematiksel değerleri true = 1 ve false = 0 dır.
Şimdi gelelim Ozan'a "Ozan" truthy bir değerdir. Truthy ise şu anlama gelir; JavaScript'te true'ya denk olan ve falsy olmayan her değerdir. Buradan yola çıkarsak !"Ozan" ile şu soru sorulur aslında bu Bu truthy değer falsy mi? bu soruya cevap olarak false çıktsını alırız.
Hatırlatma:

True = 1
False = 0
Truthy: JavaScript'te true'ya denk olan ve falsy olmayan her değer.
Falsy: Yanlış olarak değerlendirebilecek değerler.
Flasy değerler: Boolean false, Boş string, undefined, null, NaN (Not a number), Nümerik 0 ya da 0 sonucunu veren bir işlem.
Truthy ise bu kapsam içinde olmayan diğer değerlerdir.
*/