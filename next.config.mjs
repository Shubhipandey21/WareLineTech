/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'scontent.cdninstagram.com',
            'scontent-iad3-1.cdninstagram.com',
            'newsapi.org',
            'example.com',
            'i0.wp.com',
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
