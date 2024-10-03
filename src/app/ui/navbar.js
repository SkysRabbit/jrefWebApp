"use client";

import { Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

// anonymous login
export function NavbarForAnon() {
   return (
     <Navbar fluid rounded>
       <Navbar.Brand href="/">
         <Image 
             src="/favicon.ico" 
             className="mr-3 w-6 h-6 sm:w-9 sm:h-9" 
             alt="Flowbite React Logo"
             width={40}
             height={40}
         />
         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">JREF React</span>
       </Navbar.Brand>
       <div className="flex md:order-2">
        
        <Navbar.Toggle />
      </div>

       <Navbar.Collapse>
         <Navbar.Link href="/" active>
           Home
         </Navbar.Link>
         <Navbar.Link href="/links">
           Links
         </Navbar.Link>
         <Navbar.Link href="/register">
           Sign up
         </Navbar.Link>
         <Navbar.Link href="/login">
           Login
         </Navbar.Link>
       </Navbar.Collapse>
     </Navbar>
   );
 }
 
// user login
export function NavbarForUser() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <Image 
            src="/favicon.ico" 
            className="mr-3 w-6 h-6 sm:w-9 sm:h-9" 
            alt="Flowbite React Logo"
            width={40}
            height={40}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">JREF React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Image 
               src="/favicon.ico" 
               className="mr-3 w-4 h-4 sm:w-6 sm:h-6" 
               alt="User settings"
               width={40}
               height={40}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Tweety sky</span>
            <span className="block truncate text-sm font-medium">tweetysky@awesometech.com</span>
          </Dropdown.Header>
          <Dropdown.Item>
            <Link href="/">Home</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href="/links">Links</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href="/logout">Logout</Link>
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/links">Links</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
