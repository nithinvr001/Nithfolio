
import deskImage from '../assets/desketup.jpg'; // replace with your image

export default function Hero() {
  return (
    <section className="bg-dark text-white p-6 flex flex-col md:flex-row items-center justify-center gap-10 min-h-[80vh]">
      <img
        src={deskImage}
        alt="Desk Setup"
        className="w-full max-w-md rounded-lg shadow-lg"
      />
      <div className="bg-gray-900 p-6 rounded-xl shadow-xl max-w-md">
        <p className="text-green-500 mb-2">
          &lt;code&gt;I build <span className="font-bold text-white">web applications</span> |&lt;/code&gt;
        </p>
        <h1 className="text-2xl font-bold mb-2">Nithin</h1>
        <div className="flex gap-3 text-lg mb-4">
          {/* Replace with react-icons or your choice */}
          <span>🌐</span>
          <span>💼</span>
          <span>📸</span>
          <span>✖️</span>
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
    </section>
  );
}
