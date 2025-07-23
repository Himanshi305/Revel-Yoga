import React from 'react'

const navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between bg-zinc-900 px-8 py-4 text-white font-sans">
        <div className="font-bold text-2xl text-pink-400 tracking-wider">
          GameZone
        </div>
        <ul className="flex gap-8 list-none m-0 p-0">
          <li>
            <a href="#" className="text-white no-underline hover:text-pink-400 transition-colors">Home</a>
          </li>
          <li>
            <a href="#" className="text-white no-underline hover:text-pink-400 transition-colors">Games</a>
          </li>
          <li>
            <a href="#" className="text-white no-underline hover:text-pink-400 transition-colors">News</a>
          </li>
          <li>
            <a href="#" className="text-white no-underline hover:text-pink-400 transition-colors">Contact</a>
          </li>
        </ul>
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold rounded px-5 py-2 cursor-pointer transition-colors">
          Login
        </button>
      </nav>
    </div>
  )
}

export default navbar
