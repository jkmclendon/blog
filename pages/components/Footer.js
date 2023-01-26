import { MdEmail } from 'react-icons/md';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function Footer () {
  return (
    <footer className="footer items-center p-4 bg-secondary text-neutral flex-shrink-0">
    <div className="items-center grid-flow-col">
      <p>Copyright © 2023 - All rights reserved</p>
    </div>
    <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a className="link link-hover" target="_blank" rel="noreferrer" href="mailto:jkmclendon@gmail.com"><MdEmail size="1.5em"/></a>
      <a className="link link-hover" target="_blank" rel="noreferrer" href="https://github.com/jkmclendon"><SiGithub size="1.5em"/></a>
      <a className="link link-hover" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/julian-mclendon/"><SiLinkedin size="1.5em"/></a>
    </div>
  </footer>
  )
}