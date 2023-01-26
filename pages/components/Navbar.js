import Link from 'next/link';

export default function Navbar () {
  return (
    <>
      <div className="navbar bg-gradient-to-r from-primary to-neutral via-secondary fixed flex justify-between" style={{zIndex: "999"}}>
        <Link href="/" className="btn btn-ghost normal-case text-xl text-neutral">Julian&apos;s Blog</Link>
        <input type="text" placeholder="Search" className="input input-accent max-w-xs mx-8 w-1/3" />
      </div>
    </>
  )
}