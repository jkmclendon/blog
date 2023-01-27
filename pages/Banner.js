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




export default function Banner () {
  const blankForm = {
    title: '',
    img: '',
    date: '01-27-2023'
  }
  const [form, setForm] = useState(blankForm)
  const [url, setUrl] = useState('https://res.cloudinary.com/dhjvvkko0/image/upload/l_gold-lion_e524ad/c_scale,h_630/fl_layer_apply,g_west/co_rgb:CB9A4B,l_text:um3aclk9gxmjwharhwpm.ttf_85_normal_left:Death%20Stranding%250Aand%20Design%20with%250Avideo%20games/fl_layer_apply,g_north_west,x_0.55,y_0.2/co_rgb:FFFFFF,l_text:j2uavmsiwb8ziwjjhvrf.ttf_24_normal_left:01-26-2023/fl_layer_apply,g_north_west,x_0.55,y_0.7/gradient_yb84qz.jpg');

  const genImg = () => {
    let imgId = form.img.split('/').slice(-1)[0].split('.')[0];

    let titleArr = form.title.split(' ');
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

    let imgUrl = `https://res.cloudinary.com/dhjvvkko0/image/upload/l_${imgId}/c_scale,h_630/fl_layer_apply,g_west/co_rgb:CB9A4B,l_text:um3aclk9gxmjwharhwpm.ttf_85_normal_left:${escaped}/fl_layer_apply,g_north_west,x_0.55,y_0.2/co_rgb:FFFFFF,l_text:j2uavmsiwb8ziwjjhvrf.ttf_24_normal_left:${form.date}/fl_layer_apply,g_north_west,x_0.55,y_0.7/gradient_yb84qz.jpg`;

    console.log('title:', escaped);
    console.log('imgId:', imgId);
    console.log(imgUrl);

    setUrl(imgUrl);

  }


  return (
    <>
      <Head>
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
            genImg();
          }}>Generate</button>
        </div>

        <img src={url} />
      </div>
    </>
  )
}