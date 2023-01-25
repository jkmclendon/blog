/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import Navbar from '@/pages/components/Navbar.js';
import Footer from '@/pages/components/Footer.js';
import About from '@/pages/components/About.js';
import PageNav from '@/pages/components/PageNav.js';

export default function Home() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState({});


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
      <div className="app w-screen h-screen bg-fixed">
        <Navbar />
        <div className="app w-screen h-screen bg-fixed fixed" style={{backgroundImage: `url('https://res.cloudinary.com/dhjvvkko0/image/upload/v1674657203/gold_bg_zl7h55.png')`, backgroundSize: "cover", zIndex: '-1'}}></div><br /> <br />
        {/* Content */}
        <div className="flex flex-row justify-between">
          {/* Posts */}
          <div className="w-2/3 m-12 p-8 flex flex-col items-center bg-primary bg-opacity-70 rounded-xl">
            <h1 className="navbar bg-gradient-to-r from-primary to transparent text-4xl text-neutral">Posts</h1>
            <div className="card card-side bg-base-100 shadow-xl m-4 w-4/5">
              <figure><img src="https://res.cloudinary.com/dhjvvkko0/image/upload/w_600,h_600,c_fit/v1674663621/star_rabbit_jz9jpr.png" alt="rabbit" className="min-h-full"/></figure>
              <div className="card-body">
                <h2 className="card-title text-neutral">Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no....</p>
                <div className="card-actions justify-between items-end text-sm text-neutral">
                  <h5>1/25/2023</h5>
                  <div className="flex  justify-between items-center">
                  <button type="button" className="text-primary bg-gradient-to-r from-neutral via-yellow-400 to-secondary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mask mask-diamond">12</button>&nbsp;&nbsp;
                    <button className="btn btn-neutral">Read</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl m-4 w-4/5">
              <figure><img src="https://res.cloudinary.com/dhjvvkko0/image/upload/w_600,h_600,c_fit/v1674666926/golden_lion_yddboq.png" alt="lion" className="min-h-full"/></figure>
              <div className="card-body">
                <h2 className="card-title text-neutral">Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no....</p>
                <div className="card-actions justify-between items-end text-sm text-neutral">
                  <h5>1/25/2023</h5>
                  <div className="flex  justify-between items-center">
                  <button type="button" className="text-primary bg-gradient-to-r from-neutral via-yellow-400 to-secondary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mask mask-diamond">9</button>&nbsp;&nbsp;
                    <button className="btn btn-neutral">Read</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl m-4 w-4/5">
              <figure><img src="https://res.cloudinary.com/dhjvvkko0/image/upload/w_600,h_600,c_fit/v1674663621/star_rabbit_jz9jpr.png" alt="rabbit" className="min-h-full"/></figure>
              <div className="card-body">
                <h2 className="card-title text-neutral">Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no....</p>
                <div className="card-actions justify-between items-end text-sm text-neutral">
                  <h5>1/25/2023</h5>
                  <div className="flex  justify-between items-center">
                  <button type="button" className="text-primary bg-gradient-to-r from-neutral via-yellow-400 to-secondary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mask mask-diamond">6</button>&nbsp;&nbsp;
                    <button className="btn btn-neutral">Read</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl m-4 w-4/5">
              <figure><img src="https://res.cloudinary.com/dhjvvkko0/image/upload/w_600,h_600,c_fit/v1674666926/golden_lion_yddboq.png" alt="lion" className="min-h-full"/></figure>
              <div className="card-body">
                <h2 className="card-title text-neutral">Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no....</p>
                <div className="card-actions justify-between items-end text-sm text-neutral">
                  <h5>1/25/2023</h5>
                  <div className="flex  justify-between items-center">
                  <button type="button" className="text-primary bg-gradient-to-r from-neutral via-yellow-400 to-secondary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mask mask-diamond">8</button>&nbsp;&nbsp;
                    <button className="btn btn-neutral">Read</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl m-4 w-4/5">
              <figure><img src="https://res.cloudinary.com/dhjvvkko0/image/upload/w_600,h_600,c_fit/v1674663621/star_rabbit_jz9jpr.png" alt="rabbit" className="min-h-full"/></figure>
              <div className="card-body">
                <h2 className="card-title text-neutral">Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no....</p>
                <div className="card-actions justify-between items-end text-sm text-neutral">
                  <h5>1/25/2023</h5>
                  <div className="flex  justify-between items-center">
                  <button type="button" className="text-primary bg-gradient-to-r from-neutral via-yellow-400 to-secondary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mask mask-diamond">132</button>&nbsp;&nbsp;
                    <button className="btn btn-neutral">Read</button>
                  </div>
                </div>
              </div>
            </div>
            <PageNav page={1} numOfPosts={25} />
          </div>
        </div>
        <About />
        <Footer />
      </div>
    </>
  )
}
