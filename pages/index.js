/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '@/pages/components/Navbar.js';
import Background from '@/pages/components/Background.js';
import Footer from '@/pages/components/Footer.js';
import About from '@/pages/components/About.js';
import PageNav from '@/pages/components/PageNav.js';
import PostList from '@/pages/components/PostList.js';

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/getPosts/1`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {firstPosts: data}, // will be passed to the page component as props
  }
}


export default function Home({firstPosts}) {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState(firstPosts);

  const getPosts = () => {
    axios.get(`./api/getPosts/${page}`)
      .then(response => {
        setPosts(response.data);
        console.log(response.data);
      })
  }

  useEffect(getPosts, [page]);


  return (
    <>
      <Head>
        <title>Julian McLendon&apos;s Blog</title>
        <meta name="description" content="Julian McLendon's Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app w-screen h-screen bg-fixed flex flex-col justify-between">
        <Navbar />
        <Background />
        <PostList page={page} setPage={setPage} posts={posts} />
        <About />
        <Footer />
      </div>
    </>
  )
}
