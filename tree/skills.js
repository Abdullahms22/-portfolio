//تطلب البيانات من ملف PHP
fetch("skills.php")

 // لما يجي الرد ننفذ هذه الدالة
    .then(function (response) {
        
        // نحوّل الرد إلى نص عادي
        return response.text();
    })
     // لما يجهز النص ننفذ هذه الدالة
    .then(function (text) {

// ننشئ محلل (Parser) يقدر يقرأ XML
        let parser = new DOMParser();
        let xml = parser.parseFromString(text, "text/xml");

// نجيب كل وسوم <skill> من الـ XML
        let skills = xml.getElementsByTagName("skill");
        
 // نجيب العنصر في الصفحة اللي بنحط فيه المهارات
        let list = document.querySelector(".skill-list");

        for (let i = 0; i < skills.length; i++) {

 // نقرأ اسم المهارة من وسم <skill_name>
            let skillName = skills[i]
                .getElementsByTagName("skill_name")[0].textContent;

 // ننشئ div جديد، وهو المربع اللي يحتوي المهارات
            let div = document.createElement("div");

// نعطيه كلاس skill عشان ياخذ تصميم المربع من الـ CSS
            div.className = "skill";
             // نحط اسم المهارة كنص داخل الـ div
            div.textContent = skillName;

 // نحط المربع داخل القائمة في الصفحة
 list.appendChild(div)
           
        }

    });