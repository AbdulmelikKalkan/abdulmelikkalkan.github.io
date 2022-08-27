import Main from '../components/main'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
export default function Contact() {
  return (
    <Main>
      <ul className="flex relative justify-evenly m-0 inset-y-1/2 sm:h-3/6 sm:justify-between sm:inset-y-1/3 sm:flex-col">
        <li className="flex justify-center">
          <a href="https://github.com/AbdulmelikKalkan" target="_blank" rel="opener">
            <div className="flex justify-center">
              <FaGithub className="w-5 h-5" />
            </div>
            <div>
              <span>Github</span>
            </div>
          </a>
        </li>
        <li className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/abdulmelikkalkan/"
            target="_blank"
            rel="opener"
          >
            <div className="flex justify-center">
              <FaLinkedinIn className="w-5 h-5" />
            </div>
            <div>
              <span>LinkedIn</span>
            </div>
          </a>
        </li>
        <li className="flex justify-center">
          <a href="https://twitter.com/AbdulmeliKalkan" target="_blank" rel="opener">
            <div className="flex justify-center">
              <FaTwitter className="w-5 h-5" />
            </div>
            <div>
              <span>Twitter</span>
            </div>
          </a>
        </li>
        <li className="flex justify-center">
          <a href="mailto:abdulmelikkalkan@gmail.com" target="_blank" rel="opener">
            <div className="flex justify-center">
              <SiGmail className="w-5 h-5" />
            </div>
            <div>
              <span>E-Mail</span>
            </div>
          </a>
        </li>
      </ul>
    </Main>
  )
}
