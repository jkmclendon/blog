/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import {useState} from 'react';

export default function SinglePost ({post}) {
  const [addLike, setAddLike] = useState(0);

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
      <div className="hero h-full bg-base-200">
        <div className="hero-content flex-col lg:flex-row items-start">
          <div className="flex flex-col justify-between">
            <img src={post.img} className="max-w-sm rounded-lg shadow-2xl m-8" />
            <button type="button" className="text-primary bg-gradient-to-r from-neutral via-yellow-400 to-secondary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg px-5 py-2.5 text-center w-32 h-32 mask mask-diamond text-4xl" onClick={(e) => {
                  e.preventDefault();
                  upvote(post.id);
                  setAddLike(addLike + 1);
                }}>{post.liked + addLike}</button>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-neutral">{post.title}</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br /> <br /> <br />In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )

  // return (
  //     <div className="w-2/3 m-12 p-8 flex flex-col items-center bg-primary bg-opacity-70 rounded-xl">
  //       <div className="card w-full bg-base-100 shadow-xl m-4 flex-wrap">
  //         <figure><img src={post.img} alt={post.title} className="min-w-24 rounded-lg m-8"/></figure>
  //         <div className="card-body">
  //           <h2 className="card-title text-neutral">{post.title}</h2>
  //           <p>{post.body.slice(0, 150)}{post.body.length > 150 ? '...' : ''}</p>
  //           <div className="card-actions justify-between items-end text-sm text-neutral">
  //             <h5>{post.date}</h5>
  //             <div className="flex items-center">
  //               <button type="button" className="text-primary bg-gradient-to-r from-neutral via-yellow-400 to-secondary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-24 mask mask-diamond" onClick={(e) => {
  //                 e.preventDefault();
  //                 upvote(post.id);
  //                 setAddLike(addLike + 1);
  //               }}>{post.liked + addLike}</button>&nbsp;&nbsp;
  //               <button className="btn btn-neutral">Read</button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  // )
}