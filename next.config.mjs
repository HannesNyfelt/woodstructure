/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'woodstructure.fi',
            port: '',
            pathname: '/**',
        }
        ],
    }
};

export default nextConfig;
