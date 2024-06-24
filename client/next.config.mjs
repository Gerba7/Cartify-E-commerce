/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ecommgl7.s3.amazonaws.com'
            }
        ]
    }
};

export default nextConfig;
