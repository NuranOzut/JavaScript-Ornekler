class Chameleon {
    static colorChange(newColor) {
      this.newColor = newColor;
      return this.newColor;
    }

    constructor( {newColor = 'green' } = {}) {
      this.newColor = newColor;
    }
  }

  const osman = new Chameleon({ newColor: 'purple' });
  console.log(osman.colorChange('orange'));

  //TypeError

  /*
colorChange fonksiyonu statiktir.
Statik yöntemler yalnızca oluşturuldukları constructor içinde kullanılabilirler ve herhangi bir alt öğeye aktarılmazlar veya class örneklerine çağrılmazlar.
osman, 'Chameleon' class'ının bir örneği olduğundan fonksiyon buna çağrılamaz. Bu yüzden TypeError alırız.
Hatırlatma:
Static metotlar ES6 ile gelen özelliklerden biridir.
ES5 ile bir class içindeki metot ya da özelliklere ulaşmak istiyorsak new classAdı() şeklinde yeni bir sınıf örneği oluşturup bu sınıf örneği üzerinden istediğimiz özelliklere ulaşabiliyorduk.
Static metotlar bize new anahtar kelimesini kullanmadan sınıfAdı.ozellik şeklinde objesiz ulaşabilme imkanı sağlar.
  */