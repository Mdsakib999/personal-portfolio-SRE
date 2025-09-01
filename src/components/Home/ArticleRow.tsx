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
      <div className="border-t border-zinc-600/40 mb-6" />
      <Link href={`/articles/${article.id}`} className="group block">
        <Card className="bg-transparent shadow-none border-none">
          <CardContent className="p-0">
            <div className="flex items-start justify-between  md:gap-8">
              <div className="flex items-start gap-2  lg:gap-6 min-w-0 ">
                <div className="text-sm text-foreground/80 md:w-14 flex-shrink-0">
                  {article.date}
                </div>

                <h3
                  className="text-base md:text-lg text-foreground/80 leading-tight whitespace-pre-line"
                  style={{ maxWidth: "11rem" }}
                >
                  {article.title}
                </h3>
              </div>

              <div className="w-46 h-30 md:w-58 md:h-38 flex-shrink-0 rounded-lg overflow-hidden bg-zinc-700/50">
                <Image
                  src={article.image}
                  alt={article.title.replace(/\n/g, " ")}
                  width={440}
                  height={280}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 30vw, 160px"
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
