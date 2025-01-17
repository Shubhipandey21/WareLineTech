'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const NewsCard = ({ article }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="relative w-full h-48">
                <Image
                    src={article.urlToImage || '/api/placeholder/400/400'}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={article.id <= 3}
                    unoptimized
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
            </div>
            <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3 mb-3">{article.description}</p>

                {/* Added section for article source */}
                {article.source && article.source.name && (
                    <p className="text-xs text-gray-500 mb-3">
                        <span className="font-semibold">Source:</span> {article.source.name}
                    </p>
                )}

                <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default function Press() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('/api/news');
                if (!response.ok) throw new Error('Failed to fetch news');
                const data = await response.json();
                setNews(data.articles || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center p-4">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading News</h1>
                    <p className="text-gray-600">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">Latest News</h1>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Stay updated with the latest technology news and developments from around the world.
                </p>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="bg-gray-200 rounded-lg h-96 animate-pulse"></div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((article, index) => (
                            <NewsCard key={index} article={article} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
