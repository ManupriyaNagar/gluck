import React from 'react'

const Header = () => {
  return (
    <>
      <header className="fixed top-10 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-gray-100">
      <div className="ml-16">
  <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
</div>
        <nav>
          <ul className="flex list-none m-4 p-0 text-xl">
            <li className="mx-4">
              <a href="#about" className="no-underline text-black">About</a>
            </li>
            <li className="mx-4">
              <a href="#formulation" className="no-underline text-black">Science & Innovation</a>
            </li>
            <li className="mx-4">
              <a href="#health-wealth" className="no-underline text-black">Health &amp; Weallness</a>
            </li>
            <li className="mx-4">
              <a href="#rnd" className="no-underline text-black">R&amp;D</a>
            </li>
            <li className="mx-4 ">
              <a href="#investor" className="no-underline text-black">Media</a>
            </li>
            <li className="mx-4 ">
              <a href="#investor" className="no-underline text-black">Careers</a>
            </li>
            <li className="mx-4 pr-12">
              <a href="#investor" className="no-underline text-black">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header