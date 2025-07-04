
import deskImage from '../assets/desketup.jpg'; // replace with your image
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  return (
    <div>
        <h1 className='text-white ml-[20px] pt-[20px] my-[50px] text-5xl'>NITHIN V R</h1>
        <div className='flex'>
          <img
            src={deskImage}
            alt="Desk Setup"
            className="w-[600px] h-[500px] rounded-tr-[30px] rounded-br-[30px]"
          />
          <div className="bg-gray-900 p-6 rounded-xl shadow-xl w-full h-[400px] ml-[-5%] mt-[50px] mr-[20px]">
            <p className="text-green-500 mb-2">
              &lt;code&gt;I build <span className="font-bold text-white">web applications</span> |&lt;/code&gt;
            </p>
            <h1 className="text-2xl font-bold mb-2">Nithin</h1>
            <div className="flex gap-3 text-lg mb-4">

              <FaGithub className="hover:text-green-500 cursor-pointer" />
              <FaLinkedin className="hover:text-green-500 cursor-pointer" />
              <FaInstagram className="hover:text-green-500 cursor-pointer" />
              <FaXTwitter className="hover:text-green-500 cursor-pointer" />
            </div>
            <p className="text-gray-300">
              I'm a Bengaluru-based <strong>Frontend Software Engineer</strong>, currently working at <strong>Instant Domains</strong> helping build a modern, mobile-first domain registrar and site builder.
            </p>
            <p className="mt-3 text-gray-400">
              In my free time, you can catch me training in <strong>Muay Thai</strong>, plucking my <strong>banjo</strong>, or exploring beautiful <strong>Vancouver Island</strong>.
            </p>
            <div className="mt-4 flex gap-4">
              <button className="bg-accent text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-400">Resume</button>
              <button className="border border-accent text-accent px-4 py-2 rounded-lg font-semibold hover:bg-green-700 hover:text-white">Contact</button>
            </div>
          </div>
        </div>
      </div>
  );
}
