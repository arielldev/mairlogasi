import React from "react";

interface Section {
  id: string;
  type: "article" | "info";
  title?: string;
  content: string;
  image?: string;
}

const sections: Section[] = [
  {
    id: "quote",
    type: "info",
    content: `<p class="text-xl italic text-gray-800 text-center">"לך בכוחך זה ותושיע את ישראל"</p>`,
  },
  {
    id: "rabbi-intro",
    type: "article",
    title: "הרב מאיר לוגסי",
    content: `<p class="text-lg text-gray-700 leading-relaxed">
      הרב מאיר לוגסי עוזר במציאת זיווג, פוריות, פרנסה, זוגיות, בריאות ואיכות חיים באמצעות טיפולי עופרת להסרת עין הרע. 
      הוא איש צנוע, שכיהן במשרות ציבוריות נחשבות והיום מפיץ את הידע שלו ורוצה לעשות רק טוב.
    </p>`,
    image: "/mair.jpg",
  },
  {
    id: "testimonials",
    type: "article",
    title: "עדויות",
    content: `<p class="text-lg text-gray-700 leading-relaxed mb-4">"אישה שלא הצליחה להרות הגיעה אליי לפני כשנתיים והשבוע אני סנדק לבן הבכור שלה".</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-4">"לפני מספר שנים הגיעה אליי משפחה עם תינוק שבליבו מום והוא נדרש לניתוח. אחרי טיפול בעופרת ולאחר הוצאת עין הרע, הילד החלים לחלוטין ללא צורך בניתוח".</p>
      <p class="text-lg text-gray-700 leading-relaxed">"חייל עם טראומת מלחמה עבר אצלי מספר טיפולים והיום הוא כבר מסוגל לעמוד על הרגליים ללא טיפול תרופתי".</p>`,
  },
  {
    id: "background",
    type: "info",
    title: "רקע אישי",
    content: `<p class="text-lg text-gray-700 leading-relaxed">
      הרב מאיר לוגסי משכונת פסגת זאב, שהוסמך לרבנות בגיל צעיר ומאז שם לנגד עיניו את טובת הציבור. 
      היום הוא מטפל באנשים להוצאת עין הרע באמצעות עופרת – טיפול שמסייע בשיפור המצב הבריאותי, במציאת זיווג, 
      שיפור חיי הזוגיות, פוריות, בפיתוח מקור הפרנסה, ברווחה הכלכלית ואיכות החיים, לצד כל אלה גם בודק את מזוזות הבית וכל זאת במחירים שפויים בהחלט.
    </p>`,
  },
  {
    id: "treatment",
    type: "article",
    title: "הטיפול בעופרת",
    content: `<p class="text-lg text-gray-700 leading-relaxed">
      "ישבתי עם רופא ששאל אותי את אותה השאלה. הסברתי לו שכאשר אדם עושה צילום רנטגן, שמים עליו אפוד.
      באפוד יש עופרת והרופא דרך אותו אפוד ובאמצעות קרני לייזר מקבל תמונה של האדם מבפנים.
      אותו הדבר אצלי בטיפול. באמצעות העופרת אני מקבל תמונה כללית על מצבו של האדם ויודע איך לעזור לו".
    </p>
    <p class="text-lg text-gray-700 leading-relaxed">
      "נתחיל בזה שהמבצע צריך להיות מוסמך ובעל ידע. לא כל אחד יכול לקחת עופרת ולבצע את התהליך.
      אני ממיס עופרת מיוחדת, מניח מגבת מעל ראש המטופל עם סיר מים, שופך לתוך הסיר את העופרת ולאחר מספר שניות רואה עיניים.
      אני רואה את עין הרע, ממה נגרמה ומה צריך לעשות כדי שתיעלם".
    </p>`,
  },
  {
    id: "spiritual",
    type: "info",
    title: "עין הרע והמסורת",
    content: `<p class="text-lg text-gray-700 leading-relaxed">
      "עין הרע היא אנרגיה שלילית מעל הבן אדם, אנרגיה שיכולה להגיע גם ממילים שאומר האדם על עצמו.
      הייתה אצלי, למשל, אמא לתינוק שהתהדרה בו ונהגה לתלות תמונות שלו בכל מקום ופתאום התינוק חלה,
      במהלך התהליך ראיתי שהיא מביאה על עצמה את האנרגיה השלילית. באמצעות טיפול העופרת אני מנקה את האדם מאותה אנרגיה וכך פותח לו את המזל.
      לפני התהליך קוראים פרק בספר תהילים, יש לחש מיוחד שאני אומר, וההשפעה מיידית".
    </p>
    <p class="text-lg text-gray-700 leading-relaxed">
      "המסורת מספרת שכאשר דוד המלך רצה לבנות את בית המקדש, בורא עולם סירב ואמר לדוד שידיו מגואלות בדם מלחמה וכי בנו יבנה את בית המקדש.
      כאשר שלמה ניגש למלאכה, ראה את הקושי ונאמר לו שיש זחל מיוחד בשם תולעת השמיר, שניחנה בקרני לייזר אשר חוצבות באבן ורק השד אשמדאי יודע היכן למצוא אותה.
      באמצעות תחבולה הצליח שלמה המלך להוציא את אשמדאי מבאר בה הסתתר ולגלות את מקורה של תולעת השמיר.
      תולעת זו הונחה על עופרת וחצבה בברזל ובאבן וכך נבנה בית המקדש. סיפור זה בא ללמדנו שהעופרת מופיעה במקרא מקדמה דנא ואף סייעה לבניית בית המקדש ולכן, היא בעלת סגולות מיוחדות".
    </p>`,
  },
  {
    id: "treatment-count",
    type: "article",
    title: "מספר טיפולים",
    content: `<p class="text-lg text-gray-700 leading-relaxed">
      "זה משתנה מאדם לאדם. לעיתים מספיק טיפול אחד, לעיתים חמישה, ולעיתים עשרה.
      תלוי בגודל הבעיה, במידת הפתיחות לטיפול ובביצוע הוראותיי במדויק.
      לדוגמה, פנתה אליי אישה שסבלה מניכור הורי, בעלה סירב לתת לה לפגוש את ילדיה.
      אחרי סדרה של טיפולים הוא חזר בו, היריבות ביניהם פחתה והיום היא נפגשת עם ילדיה בקביעות.
      כך שכל מקרה נבחן לגופו ואני מלווה את האנשים עד לסיום התהליך בהצלחה".
    </p>`,
  },
  {
    id: "clientele",
    type: "info",
    title: "הקהל",
    content: `<p class="text-lg text-gray-700 leading-relaxed">
      "אנשים מכל רבדי החברה הישראלית ומכל הארץ - סל'בים, פוליטיקאים, אנשי תקשורת, עורכי דין, אנשים מוכרים מאוד שבאים להתייעץ איתי בכל פעם לפני קבלת החלטה חשובה, מינוי חדש או לבדוק אם יש עליהם עין רעה".
    </p>`,
  },
  {
    id: "pricing",
    type: "article",
    title: "תמחור וטיפול",
    content: `<p class="text-lg text-gray-700 leading-relaxed">
      "אני לוקח 150 שקלים בלבד לטיפול. ההצלחה נותנת לי סיפוק גדול".
    </p>
    <p class="text-lg text-gray-700 leading-relaxed">
      אז אם אתם מרגישים תקועים, חוסר זרימה בחיים, עומדים מול צומת דרכים חשובה או שמציק לכם נושא בריאותי כזה או אחר,
      פנו עוד היום לרב מאיר לוגסי ותכירו בן אדם מקצועי, לבבי וחם שרק רוצה לעשות לכם טוב.
    </p>
  `,
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-10 mt-22 md:mt-10" dir="rtl">
      <div className="max-w-3xl mx-auto px-4 text-right">
        {sections.map((section, index) => {
          if (section.type === "article") {
            return (
              <article key={section.id} className="mb-16">
                {section.title && (
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                )}
                {section.image && (
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full rounded mb-6 object-cover"
                  />
                )}
                <div
                  className="prose rtl:prose-rtl"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
                {index < sections.length - 1 && (
                  <hr className="my-8 border-blue-300" />
                )}
              </article>
            );
          } else {
            return (
              <section key={section.id} className="mb-16">
                {section.title && (
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {section.title}
                  </h3>
                )}
                <div
                  className="prose rtl:prose-rtl"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
                {index < sections.length - 1 && (
                  <hr className="my-8 border-blue-300" />
                )}
              </section>
            );
          }
        })}
      </div>
    </div>
  );
};

export default About;
