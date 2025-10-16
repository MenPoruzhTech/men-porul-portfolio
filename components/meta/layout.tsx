import Head from "next/head";


type MetaProps = {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  url?: string;
  ogImage?: string;
  ogType?: string;
};

type LayoutProps = {
  children: React.ReactNode;
  meta?: MetaProps;
};

export default function Layout({ children, meta }: LayoutProps) {
  const defaultMeta = {
    title: "MenPoruzhTech | Web, App & SaaS Experts",
    description:
      "MenPoruzhTech delivers scalable websites, SaaS, and mobile apps with Next.js, React, and Node.js. Partner with us for innovative full-stack solutions.",
    keywords:
      "full stack web development, mern stack developer, react js company, next js development, saas development company, web app developers, custom web app development, node js backend development, startup tech partner, frontend developer india, react nextjs experts, web design and development agency, product engineering company, website development india, software company in tamil nadu",
    author: "MenPoruzhTech",
    url: "https://menporuzhtech.com",
    ogImage: "https://menporuzhtech.com/Logo.png",
    ogType: "website",
  };

  const metaData = { ...defaultMeta, ...meta };

  return (
    <>
      <Head>
        {/* Standard Meta */}
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta name="author" content={metaData.author} />
        <link rel="canonical" href={metaData.url} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:image" content={metaData.ogImage} />
        <meta property="og:type" content={metaData.ogType} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.ogImage} />


           <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MenPoruzhTech",
              url: "https://menporuzhtech.com",
              logo: "https://menporuzhtech.com/Logo.png",
              sameAs: [
                "https://www.facebook.com/menporuzhtech",
                "https://www.linkedin.com/company/menporuzhtech",
                "https://www.instagram.com/menporuzhtech",
              ],
            }),
          }}
        />
      </Head>
      <main>{children}</main>
    </>
  );
}
