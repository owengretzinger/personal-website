/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/education-data-for-change/", destination: "https://education-data-for-change.vercel.app/" },
      { source: "/education-data-for-change/:match*", destination: "https://education-data-for-change.vercel.app/:match*" },
      { source: "/resume-template/", destination: "https://html-resume-template-gamma.vercel.app/" },
      { source: "/resume-template/:match*", destination: "https://html-resume-template-gamma.vercel.app/:match*" },
    ]
  },
  async redirects() {
    return [
      { source: "/education-data-for-change", destination: "/education-data-for-change/", permanent: true },
      { source: "/resume-template", destination: "/resume-template/", permanent: true },
      { source: "/((?!resume-template)(?!education-data-for-change).+)\/", destination: "/$1", permanent: true },
    ]
  },
}

module.exports = nextConfig