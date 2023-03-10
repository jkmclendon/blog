import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '@/pages/components/Navbar.js';
import Background from '@/pages/components/Background.js';
import SinglePost from '@/pages/components/SinglePost.js';
import Footer from '@/pages/components/Footer.js';
import About from '@/pages/components/About.js';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Admin () {
  const { user, error, isLoading } = useUser();

  const blankForm = {
    img: '',
    title: '',
    body: ''
  }

  const [form, setForm] = useState(blankForm);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user || user.nickname !== 'jkmclendon') {
    window.location.replace('/api/auth/login');
    return
  }

  const submitPost = () => {
    console.log(form);
    let escaped = {
      img: form.img,
      title: form.title,
      body: form.body
    }
    axios.post('../api/addPost', escaped)
      .then(response => window.location.replace('/'));
  }

  return (
    <>
      <Head>
        <title>Admin Panel</title>
        <meta name="description" content="Admin Panel" />
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
        <div className="w-2/3 m-12 p-8 flex flex-col items-center bg-primary bg-opacity-70 rounded-xl">
          <div className="form-control w-full">
            <label className="label max-w-xs">
              <span className="label-text">Title</span>&nbsp;&nbsp;&nbsp;
              <span className="label-text-alt">Chars: {form.title.length}/60</span>
            </label>
            <input type="text" placeholder="Type here" value={form.title} className="input input-bordered w-full max-w-xs" onChange={(e) => {
              e.preventDefault();
              setForm({...form, title: e.target.value});
            }}/>
            <br />
            <label className="label">
              <span className="label-text">Body</span>
              <span className="label-text-alt">Chars: {form.body.length}/2000</span>
            </label>
            <textarea className="textarea textarea-bordered h-72" placeholder="Type here" value={form.body} onChange={(e) => {
              e.preventDefault();
              setForm({...form, body: e.target.value});
            }}></textarea>
            <br /><br />
            <label className="label">
              <span className="label-text">Image Url</span>&nbsp;&nbsp;&nbsp;
            </label>
            <span className="text-m">DID YOU MAKE SURE IT&apos;S /w_600,h_600,c_fit/?</span>
            <input type="text" placeholder="Type here" value={form.img} className="input input-bordered w-full max-w-l" onChange={(e) => {
              e.preventDefault();
              setForm({...form, img: e.target.value});
            }}/>
            <br /> <br />
            <button className="btn btn-active btn-neutral" onClick={(e) => {
              e.preventDefault();
              submitPost();
            }}>Post</button>
          </div>
        </div>
        <About />
        <Link href="../api/auth/logout" className="btn btn-neutral">Logout</Link>
        <Footer />
      </div>
    </>
  )
}