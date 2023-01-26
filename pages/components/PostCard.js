/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import axios from 'axios';
import {useState, useEffect} from 'react';

export default function PostCard ({post, page}) {
  const [hasLiked, setHasLiked] = useState(false);
  const [numLikes, setNumLikes] = useState(0);

  useEffect(() => {
    setNumLikes(post.liked);
  }, [page, post])

  const upvote = (id) => {
    axios.put(`/api/upvote/${id}`)
      .then(() => setHasLiked(true))
  }

  if (!post) {
    return null;
  }

  return (
    <div className="card card-side bg-base-100 shadow-xl m-4 w-4/5">
      <figure><img src={post.img} alt="lion" className="min-h-full min-w-24"/></figure>
      <div className="card-body">
        <h2 className="card-title text-neutral">{post.title}</h2>
        <p>{post.body.slice(0, 150)}{post.body.length > 150 ? '...' : ''}</p>
        <div className="card-actions justify-between items-end text-sm text-neutral">
          <h5>{post.date}</h5>
          <div className="flex items-center">
          <button key={post.id} type="button" className="text-primary bg-gradient-to-r from-neutral via-yellow-400 to-secondary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-24 mask mask-diamond" onClick={(e) => {
            e.preventDefault();
            upvote(post.id);
            setNumLikes(numLikes + 1);
            }}>{numLikes}</button>&nbsp;&nbsp;
            <Link href={`/post/${post.id}`} className="btn btn-neutral">Read</Link>
          </div>
        </div>
      </div>
    </div>
  )
}