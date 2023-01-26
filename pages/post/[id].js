import Head from 'next/head';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '@/pages/components/Navbar.js';
import Background from '@/pages/components/Background.js';
import SinglePost from '@/pages/components/SinglePost.js';
import Footer from '@/pages/components/Footer.js';
import About from '@/pages/components/About.js';



export async function getServerSideProps(context) {
  const {id} = context.query
  const res = await fetch(`http://localhost:3000/api/getPost/${id}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {post: data}, // will be passed to the page component as props
  }
}

export default function Post ({post}) {

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={`Julian McLendon's Blog - ${post.title}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app w-screen h-screen bg-fixed flex flex-col justify-between">
        <Navbar />
        <Background />
        <SinglePost post={post} />
        <About />
        <Footer />
      </div>
    </>
  )
}