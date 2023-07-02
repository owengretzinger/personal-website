/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/education-data-for-change/", destination: "https://education-data-for-change.vercel.app/" },
      { source: "/education-data-for-change/:match*", destination: "https://education-data-for-change.vercel.app/:match*" },
      { source: "/resume-template", destination: "https://html-resume-template-gamma.vercel.app" },
      { source: "/assets/:match*", destination: "https://html-resume-template-gamma.vercel.app/assets/:match*" },
    ]
  },
}

module.exports = nextConfig