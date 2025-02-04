/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["cdn.sanity.io"],
    },
    // Optional: Add other configurations below
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: false,
    },
  };
  
  export default nextConfig;