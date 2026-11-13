// نطلب البيانات من ملف PHP
fetch("contact.php")
// لما يجي الرد ننفذ هذه الدالة
    .then(function (response) {
       // نحول الرد إلى نص عادي
        return response.text();
    })// لما يتحول الرد إلى نص ننفذ هذه الدالة
    .then(function (text) {
        // ننشئ محلل (Parser) نستخدمه لقراءة النص
        let parser = new DOMParser();
                // نحوّل النص إلى مستند XML نقدر نتنقل داخله
        let xml = parser.parseFromString(text, "text/xml");
        // نجيب كل وسوم <contact> من الـ XML
        let contacts = xml.getElementsByTagName("contact");

        for (let i = 0; i < contacts.length; i++) {
            // نقرأ الإيميل من وسم <email>
            let email = contacts[i]
                .getElementsByTagName("email")[0].textContent;
            // نقرأ رقم الجوال من وسم <phone>
            let phone = contacts[i]
                .getElementsByTagName("phone")[0].textContent;
            // نحط الإيميل داخل العنصر اللي كلاسه email في الصفحة
            document.querySelector(".email").textContent = email;
            // نحط رقم الجوال داخل العنصر اللي كلاسه phone في الصفحة
            document.querySelector(".phone").textContent = phone;

        }

    });