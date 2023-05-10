import Head from 'next/head'

export default function Layout({bgClass = "bg-white", ...props}) {
  return (
    <div className="text-black font-noto selection:bg-orange/20">
      <Head>
        <title>owengretzinger.com</title>
        <meta name="description" content="Owen Gretzinger's Personal Website" />
        <link rel="icon" href="/personal-website-icon-blue.ico" />
      </Head>
      <div id="home"></div>
      <div className={`w-full h-full ${bgClass} fixed -z-20`}></div>
      {props.children}
    </div>
  );
}