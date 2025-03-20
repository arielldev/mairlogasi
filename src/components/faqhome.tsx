"use client";

const faqItem = {
  question: "למה צריך להסיר עין הרע?",
  answer: `עין הרע, אפילו מהסוג שלא בזדון, מעכבת אותנו ביום יום – מרגישים מזל רע, עיכוב באהבה, פגיעה בבריאות, עיכובים בחתימת חוזים, פגיעה בפרנסה וכו‘.<br/><br/>
וגם אמא יכולה לפגוע בבנה או בביתה ללא כוונה, ע"י שמספרת לשכינותיה או חברותיה או מכריה בשבחה בהגזמה.<br/><br/>
הוצאת עין הרע משחררת אותנו מהכבלים ופותחת לנו את המזל לאהבה, לפרנסה ולבריאות.<br/><br/>
הוצאת עין הרע מחזירה את הזרימה האנרגטית שלנו ובכך פותחת לנו את שערי שמיים – וכל מה שמיועד לנו יורד ומגיע.`,
  image: "/mair.jpg",
};

export default function SingleFaq() {
  const truncateLength = 200;

  return (
    <div className="bg-white py-12" dir="rtl">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            {faqItem.question}
          </h2>
          <hr className="border-t border-blue-300 mx-auto w-1/2 mb-6" />
          <div className="flex flex-col sm:flex-row items-center">
            <div className="sm:w-1/3 flex justify-center mb-4 sm:mb-0">
              <img
                src={faqItem.image}
                alt={`תמונה עבור ${faqItem.question}`}
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
            <div className="sm:w-2/3 text-right">
              <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      faqItem.answer.substring(0, truncateLength) +
                      (faqItem.answer.length > truncateLength ? "..." : ""),
                  }}
                />
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a
              href="/faq"
              className="inline-block bg-white border border-gray-300 text-gray-800 py-2 px-6 rounded-full shadow hover:bg-gray-100 transition"
            >
              קרא עוד
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
