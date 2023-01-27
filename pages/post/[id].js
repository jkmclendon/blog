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

  let post = data;

  let imgId = post.img.split('/').slice(-1)[0].split('.')[0];
  let titleArr = post.title.split(' ');
  let coalated = [[titleArr.shift()]];
  titleArr.forEach((currWord, i) => {
    let currArray = coalated[coalated.length - 1];
    let currLength = currArray.length - 1;
    currArray.forEach(word => {
      currLength += word.length;
    })
    if (currLength + currWord.length < 15) {
      currArray.push(currWord)
    } else {
      coalated.push([currWord]);
    }
  })
  let escaped = []
  coalated.forEach(array => {
    escaped.push(array.join(' '));
  })
  escaped = escape(escaped.join('%0A'));
  let imgUrl = `https://res.cloudinary.com/dhjvvkko0/image/upload/l_${imgId}/c_scale,h_630/fl_layer_apply,g_west/co_rgb:CB9A4B,l_text:um3aclk9gxmjwharhwpm.ttf_85_normal_left:${escaped}/fl_layer_apply,g_north_west,x_0.55,y_0.2/co_rgb:FFFFFF,l_text:j2uavmsiwb8ziwjjhvrf.ttf_24_normal_left:${post.date}/fl_layer_apply,g_north_west,x_0.55,y_0.7/gradient_yb84qz.jpg`;


  return {
    props: {post: data, imgUrl: imgUrl}, // will be passed to the page component as props
  }
}

export default function Post ({post, imgUrl}) {

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
        <meta name="description" property="og:description" content="Julian McLendon's Blog. This is where I will share my thoughts and document my journey as a software engineer!"></meta>
        <meta name="author" content="Julian McLendon"></meta>
        <meta name="image" property="og:image" content={imgUrl}></meta>
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