"use client";
import React from "react";

interface FAQData {
  question: string;
  answer: string;
}

const faqData: FAQData[] = [
  {
    question: "מה המקור לעין הרע?",
    answer: `בהמשך לתפילותינו מידי בוקר ותצילני מעין הרע מחבר רע וכו‘<br/><br/>
    וכפי שכתוב בתורה <span title="המקור: התורה" class="text-blue-600 underline hover:text-blue-800">שיעקב אבינו מזהיר את השבטים</span> לפני כניסתם למצרים לפגוש את פרעה, לבל יכנסו האחים בשער אחד אלא כל אחד משער אחר, מחשש לעין הרע.<br/><br/>
    וכפי שבלק שכר את המכשף בלעם לקלל את ישראל, השוכן לשבטיו, ולולא התערבותו של בורא עולם, יכל בלעם לפגוע בעם ישראל.<br/><br/>
    וכן יוסף הצדיק, כשאביו יעקב, היה אמור לפגוש את עשיו עם נשותיו ובניו, כאשר הציג יעקב לעשיו את משפחתו. יוסף עמד לפני אימו, רחל, כדי שעשיו לא יביט בה בעין הרע.<br/><br/>
    וכן כשדויד המלך, כשספר את עם ישראל, הייתה מגפה בעם – אפילו שמדובר במושיעם של ישראל, היה צריך דויד להתפלל לעצור את המלאך המשחית.<br/><br/>
    וכפי שמובא בתלמוד <span title="מקור: התלמוד" class="text-blue-600 underline hover:text-blue-800">לא יעמוד אדם ויביט בקמה של חבירו</span>, מחשש שמה, התבואה תבאיש וכו‘.<br/><br/>
    <span title="ציטוט חז\"ל" class="text-blue-600 underline hover:text-blue-800">ואן הברכה שורה אלא בדבר הסמוי מן העין</span>.<br/><br/>
    יש לדעת שבורא עולם נתן כוחות ביקום, שהם גם שליליים וגם חיוביים, והכח המניע את האנרגיות הללו יוצא דרך העין – לכן יש חשיבות עליונה לכח העין: האם היא מביטה בסובב אותה ברוח טובה או חלילה הפוך.<br/><br/>
    וכפי שהורו לנו חז\"ל שירגיל האדם, כשרואה בהצלחת חבירו, לומר <span title="ציטוט חז\"ל" class="text-blue-600 underline hover:text-blue-800">"בן פורת יוסף בן פורת עלי עין"</span>.`,
  },
  {
    question: "למה צריך להסיר עין הרע?",
    answer: `עין הרע, אפילו מהסוג שלא בזדון, מעכבת אותנו ביום יום – מרגישים מזל רע, עיכוב באהבה, פגיעה בבריאות, עיכובים בחתימת חוזים, פגיעה בפרנסה וכו‘.<br/><br/>
    וגם אמא יכולה לפגוע בבנה או בביתה ללא כוונה, ע"י שמספרת לשכינותיה או חברותיה או מכריה בשבחה בהגזמה.<br/><br/>
    הוצאת עין הרע משחררת אותנו מהכבלים ופותחת לנו את המזל לאהבה, לפרנסה ולבריאות.<br/><br/>
    הוצאת עין הרע מחזירה את הזרימה האנרגטית שלנו ובכך פותחת לנו את שערי שמיים – וכל מה שמיועד לנו יורד ומגיע.`,
  },
  {
    question: "כיצד מתבצע טהור בעופרת?",
    answer: `הרב ממיס עופרת בכלי על הגז עד שהעופרת נהיית נוזלית.<br/><br/>
    לאחר ההמסה, המטפל מתפלל ואומר "סגולות לעין הרע", מכח עליון, ושופך לתוך כלי עם מים מעל ראשו של המטופל, כמה פעמים.<br/><br/>
    בשפיכת הנוזל, העופרת שואבת את הכוחות השליליים מהמטופל ויוצרת צורות ועיניים בעופרת – וכך שואבת ומסירה את העין הרע והכישוף מהמטופל.`,
  },
  {
    question: "מה ההבדל בין עין הרע לכישוף?",
    answer: `עין הרע נגרמת מקנאה, קללות של הסובבים, צרות עין, רברבנות, ושנאת חינם.<br/><br/>
    כישוף נגרם בזדון, ע"י פעולה של מכשף או ממיסטיקן, במטרה לשלוח אנרגיות שליליות.<br/><br/>
    הכישוף מתבצע באמצעות חפצים אישיים – כמו תמונה, בגד, שיער או ציפורניים; וישנן שיטות גם שמכניסים משהו למשקה או אוכל, כדי לגרום נזק של סגירת מזל בזוגיות או פרנסה, או לקרב או להרחיק בין אוהבים.`,
  },
  {
    question: "איך מזהים שנעשה כישוף או עין הרע?",
    answer: `1. עיכובים וחוסר הצלחה מתמשך בכל תחום – החל מחוסר פריון, הפלות חוזרות ונישנות, זוגיות שאינה מתפתחת, אי מציאת עבודה או דחייה חוזרת, בדידות חברתית, כאבים ובעיות רפואיות.<br/><br/>
    2. תאונות וחבלות קלות – כמו שריטות, חתכים או כביות קלות, או התנגשויות בבית שגורמות לסימנים בגוף.<br/><br/>
    3. דברים נופלים מהידיים בממוצע, למרות שהבריאות תקינה.<br/><br/>
    4. דברים נשברים או מתקלקלים בתדירות גבוהה.<br/><br/>
    5. ריבים בבית, בעבודה או עם השכנים, יותר מהרגיל.<br/><br/>
    6. התעוררות באמצע הלילה וקושי בשינה.<br/><br/>
    7. משיכה למקום מסוים ללא הסבר ברור.`,
  },
  {
    question: "מה עושים עם העופרת לאחר הטהור והסרת עין הרע?",
    answer: `את העופרת מניחים מתחת לכרית באותו הלילה.<br/><br/>
    למחרת, זורקים אותה במקום נטוש ואומרים <span title="מסר רוחני" class="text-blue-600 underline hover:text-blue-800">"זה שלכם"</span>.`,
  },
  {
    question: "איך יודעים שהטהור מעין הרע או כישוף עובד?",
    answer: `מרגישים הקלה.<br/><br/>
    מטופל שלא התקבל לעבודה, לפתע חש כי נפתחות בפניו דלתות מרבות.<br/><br/>
    גבר או אישה אשר לא הצליחו למצוא בן/בת זוג, זוכים במהירות רבה.<br/><br/>
    חולים זוכים להקלה ולעיתים גם לריפוי של מחלתם.<br/><br/>
    יש חשיבות רבה לטיהור רוחני זה, לפחות פעמיים בשנה, כדי להסיר את עין הרע שנדבקת אלינו מאנשים צרי עין.`,
  },
];

interface FAQItemProps {
  faq: FAQData;
  isLast: boolean;
}

function FAQItem({ faq, isLast }: FAQItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full focus:outline-none py-4 px-2 hover:bg-gray-100 transition-colors"
        aria-expanded={isOpen}
        aria-controls={`faq-${faq.question.replace(/\s+/g, "")}`}
      >
        {/* The container is forced into LTR so that the icon appears on the left.
            The question text is then set to RTL and right-aligned. */}
        <div
          className="flex items-center justify-between"
          style={{ direction: "ltr" }}
        >
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <h2
            className="flex-1 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-right"
            dir="rtl"
          >
            {faq.question}
          </h2>
        </div>
      </button>
      <div
        id={`faq-${faq.question.replace(/\s+/g, "")}`}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <hr className="border-t border-blue-300 mb-4" />
        <div className="text-right px-2">
          <p className="text-gray-800 leading-relaxed text-base sm:text-lg whitespace-pre-wrap break-words">
            <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
          </p>
        </div>
      </div>
      {!isLast && <hr className="border-t border-blue-300 my-6" />}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="bg-white py-12 mt-22 md:mt-10" dir="rtl">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-8">
          שאלות נפוצות
        </h1>
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isLast={index === faqData.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
