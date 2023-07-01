/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: "/resume-template",
          destination: "https://html-resume-template-gamma.vercel.app/",
        },
        {
          source: "/resume-template/:path*",
          destination: "https://html-resume-template-gamma.vercel.app/:path*",
        },
      ],
    };
  },
}

module.exports = nextConfig
