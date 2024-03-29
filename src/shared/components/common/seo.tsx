import Head from "next/head"
import Script from "next/script"

interface SeoProps {
  title: string
  description: string
  url: string
  thumbnailUrl: string
}

const Seo = ({ description, url, thumbnailUrl, title }: SeoProps) => {
  return (
    <>
      <Script src="https://sp.zalo.me/plugins/sdk.js"></Script>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={thumbnailUrl} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={thumbnailUrl} />
      </Head>
    </>
  )
}

export { Seo }
