let c = {greeting: "Hey!"};
let d;

d = c; 
c.greeting = "Hello";
console.log(d.greeting);

//Hello

/*
JavaScript'te tüm object'ler birbirine eşit olarak ayarlanır. Bunlara reference yoluyla iletişime geçebiliriz.
1.işlem, c değişkeni bir object'in değerini tuttuğunu görüyoruz.
2.işlem, c değişkenini referansla d değişkeni olarak gösteriyoruz. Yani bu da demek oluyor ki c değişkenine yapacağımız her işlem d değişkenini de etkliyor.
3.işlem, ise c.greeting ='Hello' oluyor. Yani greeting: 'Hey!' greeting:'Hello' olarak değiştiriyoruz.
Son, 2.işlemde dediğimiz gibi c değişkenine yapılan işlemler d değişkenini de etkiliyordu. O yüzden console.log(d.greeting); yazdığımız zaman alacağımız çıktı 3.işlemde gerçekleşen işlem ile Hello olacaktır.
*/