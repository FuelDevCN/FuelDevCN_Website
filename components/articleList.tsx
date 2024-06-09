/*
 * @Author: lxj 1851816672@qq.com
 * @Date: 2024-06-09 04:00:08
 * @LastEditors: lxj 1851816672@qq.com
 * @LastEditTime: 2024-06-09 23:55:35
 * @FilePath: /FuelCN/components/articleList.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import Link from 'next/link'

interface Article {
    id: string;
    title: string;
    subtitle?: string;
    category: string;
    description: string;
    image: string;
}

const articles: Article[] = [
    {
        id: '1',
        title: 'Building Points on Ceramic',
        subtitle: 'An Example and Learnings',
        category: 'Ecosystem',
        description: 'We built a Web3 points application on Ceramic to explore the design...',
        image: './images/1.png', // Replace with actual image paths
    }
];

const EngineeringSection: React.FC = () => {
    return (
        <section className="py-12 mt-[60px] max-w-6xl mx-auto px-5 sm:px-6">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-6">News</h2>
                <p className="text-lg text-gray-600 mb-12">News and product announcements from the Fuel Network</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <Link key={article.id} href={`/articles/${article.id}`} passHref >
                            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <p className="text-sm text-orange-500 uppercase mb-2">{article.category}</p>
                                    <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
                                    {article.subtitle && <h4 className="text-lg text-gray-700 mb-4">{article.subtitle}</h4>}
                                    <p className="text-gray-600">{article.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EngineeringSection;
