const shape = {
    radius:10,
    diameter(){
      return this.radius * 2;
    },
    perimeter: () => 2*Math.PI * this.radius
  };
  
  console.log(shape.diameter());
  console.log(shape.perimeter());

  //20 and NaN

  /*
diameter sıradan bir fonksiyon perimeter ise arrow fonksiyon dikkat edelim bu noktaya.
Arrow fonksiyonlarda, this anahtar kelimesi sıradan fonksiyonların aksine kendi kapsama alanı olan scope'u referans alır. Bu da demek oluyor ki perimeter'i çağırdığımız zaman shape objesini değil kendi kapsama alanını yani scope'unu referans alacaktır (örneğin window).
Yani perimeter arrow function olduğu için kapsama alanı içinde radius değeri yoktur o yüzden undefined alıyoruz.
Özet: perimeter içinde Arrow Function kullanılmış dikkat! Arrow fonksiyon için kendi kapsama alanı yani scope'u önemlidir.
  */