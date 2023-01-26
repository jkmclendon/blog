/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import {useState} from 'react';
import Link from 'next/link';

export default function SinglePost ({post}) {
  const [addLike, setAddLike] = useState(0);
  const [timer, setTimer] = useState(5);

  if (!post) {
    return (
      <>
        <div className="flex flex-row justify-between">
          <div className="w-2/3 m-12 p-8 flex flex-col items-center bg-primary bg-opacity-70 rounded-xl">
          </div>
        </div>
      </>
    );
  }

  const upvote = (id) => {
    axios.put(`/api/upvote/${id}`)
  }

  return (
    <div className="w-2/3 m-12 p-8 flex flex-col items-center bg-primary bg-opacity-70 rounded-xl">
      <div className="hero h-full min-w-fit bg-base-200">
        <div className="hero-content max-w-screen flex-col lg:flex-row items-start">
          <div className="flex flex-col justify-between sticky min-w-fit">
            <img src={post.img} className="max-w-sm rounded-lg shadow-2xl m-8" />
            <div className="flex justify-between items-center mx-4">
              <Link href={`/`} className="btn btn-neutral use-quicksand">{'<- Posts'}</Link>
              <button type="button" className="text-primary bg-gradient-to-r from-neutral via-yellow-400 to-secondary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg px-5 py-2.5 text-center w-32 h-32 mask mask-diamond text-4xl" onClick={(e) => {
                  e.preventDefault();
                  upvote(post.id);
                  setAddLike(addLike + 1);
                  setTimeout(() => {
                    e.target.disabled = true
                  }, 5000);
                }}>{post.liked + addLike}</button>
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-5xl font-bold text-neutral use-dosis">{post.title}</h1>
            <p className="py-6 whitespace-pre-line use-quicksand text-xl">{post.body}</p>
          </div>
        </div>
      </div>
    </div>
  )
}