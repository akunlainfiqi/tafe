/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    typescript: {
        ignoreBuildErrors: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
};

export default nextConfig;
