import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function Navbar () {
  return (
    <>
      <div className="navbar bg-gradient-to-r from-primary to-neutral via-secondary fixed flex justify-between" style={{zIndex: "999"}}>
        <Link href="/" className="btn btn-ghost normal-case text-xl text-neutral use-megrim">Julian&apos;s Blog</Link>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end mx-8">
          <a className="link link-hover text-secondary hover:text-accent" target="_blank" rel="noreferrer" href="mailto:jkmclendon@gmail.com"><MdEmail size="1.5em"/></a>
          <a className="link link-hover text-secondary hover:text-accent" target="_blank" rel="noreferrer" href="https://github.com/jkmclendon"><SiGithub size="1.5em"/></a>
          <a className="link link-hover text-secondary hover:text-accent" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/julian-mclendon/"><SiLinkedin size="1.5em"/></a>
    </div>
      </div>
    </>
  )
}