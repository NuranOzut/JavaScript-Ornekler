function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const member = new Person("Lydia", "Hallie");
  Person.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
  
  console.log(member.getFullName());

  //TypeError

  /*
Sıradan function'larla yaptığımız gibi bir yapıcıya yani constructor 'a özellik ekleyemeyiz.
Eğer tek seferde tüm nesnelere özellik eklemek istersek prototype kullanmamız gerekir.
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
Bu durumda member.getFullName() çalışmış olacak.

Hatırlatma:

Constructor: Object'in yani nesnenin oluşturduğu yapıcı metoda erişmek için kullanılan özelliktir.
Prototype: Javascript’te Inheritance’ın (kalıtımın) temelini oluşturmaktadır. Inheritance var olan class’ları kullanarak, yeni class’lar tanımlanmasına olanak sağlamaktadır.
  */