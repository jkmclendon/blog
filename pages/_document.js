import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@300&family=Megrim&family=Quicksand" rel="stylesheet" />
      <meta name="image" property="og:image" content="https://res.cloudinary.com/dhjvvkko0/image/upload/v1674769453/Screen_Shot_2023-01-26_at_4.43.46_PM_fubh7v.jpg"></meta>
      <meta name="description" property="og:description" content="Julian McLendon's Blog. This is where I will share my thoughts and document my journey as a software engineer!"></meta>
      <meta name="author" content="Julian McLendon"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
