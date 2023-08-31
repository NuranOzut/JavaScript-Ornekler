let merhaba; 
    merhaab = {}; // yazım hatası!
    console.log(merhaab);

    //{}

    /*
Nesneyi log'a kaydeder çünkü global nesne üzerinden boş bir nesne oluşturduk.
merhaba'ı merhaab olarak yanlış yazdık fark ettiyseniz. JavaScript yorumlayıcısı bunu global.merhaab = {} olarak görür veya window.merhaab = {} olarak görür.
Bu tarz hatalardan kaçınmak için use strict kullanılabilir.
"use strict";, bir değişkene herhangi bir atama yapmadan önce tanımlanıp tanımlanmadığına bakar. Tanımlanmamışsa hata almamızı sağlar. güvrnli kod sağlar
    */
