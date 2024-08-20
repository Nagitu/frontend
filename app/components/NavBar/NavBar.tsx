'use client'
import { Navbar } from 'flowbite-react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-bold bg-gradient-to-r from-green-700 to-blue-800 bg-clip-text text-transparent dark:text-white">Deni Prayoga</span>
        </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/home" active>
          Beranda
        </Navbar.Link>
        <Navbar.Link href="#">Portofolio</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <Navbar.Link href="#">Certification</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default NavBar