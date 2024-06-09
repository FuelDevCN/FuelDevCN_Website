import { notFound } from 'next/navigation';
import Head from 'next/head';

interface Article {
    id: string;
    title: string;
    subtitle?: string;
    category: string;
    description: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    authorImage: string;
}

const articles: Article[] = [
    {
        id: '1',
        title: 'Building Points on Ceramic - an Example and Learnings',
        subtitle: '',
        category: 'Ecosystem',
        description: 'We built a Web3 points application on Ceramic to explore the design considerations a successful system requires.',
        content: 'This is where the detailed content of the article goes...',
        author: 'Mark Krasner',
        date: 'Mar 6, 2024',
        readTime: '12 min read',
        image: '/images/1.png',
        authorImage: '/images/author-image.png',
    },
    // 添加更多文章
];

export async function generateStaticParams() {
    return articles.map((article) => ({
        id: article.id,
    }));
}

interface Props {
    params: {
        id: string;
    };
}

const ArticlePage: React.FC<Props> = ({ params }) => {
    const article = articles.find((article) => article.id === params.id);

    if (!article) {
        notFound();
    }

    return (
        <div>
            <Head>
                <title>{article?.title}</title>
                <meta name="description" content={article?.description} />
            </Head>

            <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
                <article className="prose lg:prose-xl">
                    <header>
                        <p className="text-sm text-gray-500">{article?.category}</p>
                        <h1 className="mt-2 text-3xl font-bold">{article?.title}</h1>
                        <p className="mt-2 text-lg text-gray-700">{article?.description}</p>
                        <div className="mt-4 flex items-center space-x-2">
                            <img src={article?.authorImage} alt={article?.author} className="w-10 h-10 rounded-full" />
                            <div>
                                <p className="text-sm font-medium text-gray-900">{article?.author}</p>
                                <p className="text-sm text-gray-500">
                                    {article?.date} • {article?.readTime}
                                </p>
                            </div>
                        </div>
                    </header>
                    <img src={article?.image} alt={article?.title} className="mt-8 rounded-lg" />
                    <div className="mt-8">{article?.content}</div>
                </article>
            </main>
        </div>
    );
};

export default ArticlePage;
