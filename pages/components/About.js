export default function About () {
  return (
    <div className="w-1/5 max-h-3/6 m-12 p-8 flex flex-col fixed right-1 top-12 bg-gradient-to-b from-secondary to-primary rounded-xl items-center">
      <div className="avatar max-w-full">
        <div className="w-48 mask mask-hexagon">
          <img src="https://res.cloudinary.com/dhjvvkko0/image/upload/v1674660103/52967065_333496957269215_9135451900232073216_n_uelcfx.jpg" alt="Julian McLendon"/>
        </div>
      </div>
      <div className="card flex items-center max-w-full">
        <h2 className="card-title text-neutral">Julian McLendon</h2>
        <p>Welcome to my Blog! This is where I will share my thoughts and document my journey as a software engineer. I don&apos;t plan to enable comments on my posts, but you can still interact with them by clicking the gem icon.</p>
      </div>
    </div>
  )
}