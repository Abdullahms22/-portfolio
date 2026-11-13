//تطلب البيانات من ملف PHP
fetch("projects.php")
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
// نجيب كل وسوم <project> من الـ XML
        let projects = xml.getElementsByTagName("project");
 // نجيب العنصر في الصفحة اللي بنحط فيه المشاريع
        let list = document.querySelector(".project-list");

        for (let i = 0; i < projects.length; i++) {
 // نقرأ اسم المشروع من وسم <project_name>
            let projectName = projects[i]
                .getElementsByTagName("project_name")[0].textContent;
 // ننشئ عنوان h3 جديد
            let heading = document.createElement("h3");
   // نكتب اسم المشروع داخل العنوان
            heading.textContent = projectName;
 // ننشئ div جديد، وهو المربع اللي يحتوي المشروع
            let div = document.createElement("div");
// نعطيه كلاس project عشان ياخذ تصميم المربع من الـ CSS
            div.className = "project";
// نحط العنوان داخل المربع
            div.appendChild(heading);
 // نحط المربع داخل القائمة في الصفحة
            list.appendChild(div);
        }

    });