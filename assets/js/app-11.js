function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const ozan = new Person("Ozan", "Tekin");
  const nida = Person("Nida", "Tekin");
  
  console.log(ozan);
  console.log(nida);

  //Person {firstName: "Ozan", lastName: "Tekin"} ve undefined

  /*
Dikkat ederseniz nida için new anahtar kelimesini kullanmadık.
new anahtar kelimesini kullandığımız zaman oluşturduğumuz yeni boş nesneyi gösterir ve içini doldurur.
Eğer new eklenmezse global nesneyi referans gösterir.
Yukarıda this.firstName tanımladık ve Nida'ya eşitledik sonra this.lastName tanımladık ve Tekin'e eşitledik. Ama new anahtar kelimesini kullanmadığımız için JavaScript yorumlayıcısı bunları böyle tanımladı: global.firstName = "Nida" ve global.lastName = "Tekin" şeklinde tanımladı. O yüzden nida undefined olarak tanımlandı.
Hatırlatma Köşesi:

new anahtar kelimesi constructor fonksiyonu olan bir object'in instance'sini yani örneğini oluşturmak için kullanılır.
Constructor bir fonksiyon new anahtar kelimesi ile çağrıldığında aşağıdaki eylemler gerçekleşir:
Yeni bir boş object oluşturur.
Yeni nesnenin prototip özelliğini constructor fonksiyonun prototipiyle aynı şekilde ayarlar.
This değişkeni, yeni oluşturulan nesneye işaret edecek şekilde ayarlanır. This anahtar kelimesi ile oluşturulan ile bildirilen özelliği yeni nesneye bağlar.
Constructor fonksiyon primitive olamayan bir değer döndürdüğünde yeni oluşturulan bir nesne döndürülür.
Constructor fonksiyon primitive bir değer döndürürse yok sayılır.
Fonksiyon gövdesinde herhangi bi geri dönüş ifadesi (return) yoksa fonksiyonun sonunda this döndürülür.
  */