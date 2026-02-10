import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

type Article = {
  id: string;
  date: string;
  title: string;
  image: string;
};

const ArticleRow: React.FC<{ article?: Article }> = ({ article }) => {
  if (!article) return null;

  return (
    <article>
      <div className="border-t border-zinc-600/40 mb-4 sm:mb-6" />
      <Link href={`/articles/${article.id}`} className="group block">
        <Card className="bg-transparent shadow-none border-none">
          <CardContent className="p-0">
            <div className="flex items-start justify-between gap-3 sm:gap-4 md:gap-8">
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-6 min-w-0 flex-1">
                <div className="text-xs sm:text-sm text-foreground/80 w-12 sm:w-14 flex-shrink-0">
                  {article.date}
                </div>

                <h3 className="text-sm sm:text-base md:text-lg text-foreground/80 leading-tight whitespace-pre-line max-w-[8rem] sm:max-w-[10rem] md:max-w-[11rem]">
                  {article.title}
                </h3>
              </div>

              <div className="w-24 h-20 sm:w-32 sm:h-24 md:w-40 md:h-28 lg:w-48 lg:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-zinc-700/50">
                <Image
                  src={article.image}
                  alt={article.title.replace(/\n/g, " ")}
                  width={440}
                  height={280}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </article>
  );
};

export default ArticleRow;
