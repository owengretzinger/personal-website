/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/education-data-for-change", destination: "https://education-data-for-change.vercel.app" },
      { source: "/dist/output.css", destination: "https://education-data-for-change.vercel.app/dist/output.css" },
      { source: "/style.css", destination: "https://education-data-for-change.vercel.app/style.css" },
      { source: "/script.js", destination: "https://education-data-for-change.vercel.app/script.js" },
      { source: "/datasets/:path*", destination: "https://education-data-for-change.vercel.app/datasets/:path*" },
      { source: "/media/:path*", destination: "https://education-data-for-change.vercel.app/media/:path*" },
      { source: "/resume-template", destination: "https://html-resume-template-gamma.vercel.app" },
      { source: "/assets/:match*", destination: "https://html-resume-template-gamma.vercel.app/assets/:match*" },
    ]
  },
}

module.exports = nextConfig