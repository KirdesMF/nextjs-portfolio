import Head from 'next/head';

type HeadTagProps = {
   title?: string;
   description?: string;
   url?: string;
};
export function HeadTag(props: HeadTagProps) {
   const { title, description, url } = props;
   return (
      <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <meta charSet="utf-8" />
         <meta name="description" content={description} />

         <meta property="og:type" content="website" key="ogtype" />
         <meta property="og:url" content={url} key="ogurl" />
         <meta property="og:site_name" content="" key="ogsitename" />
         <meta property="og:title" content={title} key="ogtitle" />
         <meta property="og:description" content={description} key="ogdesc" />
         <title>{title}</title>
         <link rel="icon" href="/favicon.ico" />
      </Head>
   );
}
