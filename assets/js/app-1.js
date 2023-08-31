function sayHi(){
   
    console.log(name);
    console.log(age); 
    
    var name = "Ozan";
    let age = 22;
}

sayHi();
//undefined and ReferenceError
/*
Hoisting, Interpreter'ın önce tanımlanan şey hakkında hafızada yer açması anlamına gelir.
Var anahtar kelimesi ile tanımladığımız name değişkenini gördü ama yukarı taşınmadığı için tanımlayamadı o yüzden undefined aldık. Çünkü tanımlandığı satır gelene kadar bir değere sahip olamaz. Yani elimizde bir adresin var ama bu adresin boş olduğunu söyler.
Let ve const anahtar kelimeleri için ise hoisting uygulanır ancak değer ataması yapılmaz. Değişken tanımladığımız satırden önce erişilebilir değildir. Buna temporal dead zone yani geçiçi ölü bölge de denir. Bu yüzden ReferenceError alırız.

*/