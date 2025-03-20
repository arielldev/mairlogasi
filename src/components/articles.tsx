import React from "react";

type Article = {
  id: number;
  title: string;
  excerpt: string;
  coverImage: string;
  publishedDate: string;
  url: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: '"לך בכוחך זה ותושיע את ישראל"',
    excerpt:
      "הרב מאיר לוגסי עוזר במציאת זיווג, פוריות, פרנסה, זוגיות, בריאות ואיכות חיים באמצעות טיפולי עופרת להסרת עין הרע. הוא איש צנוע, שכיהן במשרות ציבוריות נחשבות והיום מפיץ את הידע שלו ורוצה לעשות רק טוב",
    coverImage: "/mair.jpg",
    publishedDate: "2025-03-13",
    url: "https://www.kolhair.co.il/for-business/172782/",
  },
];

const ArticlesAboutMePage: React.FC = () => {
  return (
    <div className=" bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {articles.map((article) => (
          <section
            key={article.id}
            className="w-full py-12 border-b border-blue-300"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-auto rounded"
                />
              </div>
              <div className="w-full p-4 md:w-1/2 order-2 md:order-1 md:pr-8 text-right mt-8 md:mt-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {article.title}
                </h2>
                <p className="text-xl text-gray-700 mb-4 ">{article.excerpt}</p>
                <p className="text-gray-500 mb-4">
                  {new Date(article.publishedDate).toLocaleDateString("he-IL")}
                </p>
                <a
                  href={article.url}
                  className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
                >
                  קרא עוד
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ArticlesAboutMePage;
