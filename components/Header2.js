import React, { useRef, useState, Fragment } from "react";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import SearchBar from "./SearchBar";
import { Transition, Menu } from "@headlessui/react";

function Header() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <header className="fixed grid grid-cols-3 w-full top-0 z-50 shadow-md my-auto bg-white p-3 transition duration-200">
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-11 w-11"
      >
        <Image
          src="/../public/favicon.ico"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className="cursor-pointer"
        />
      </div>

      {/* Middle */}
      <div className="select-none relative h-fit flex justify-center transform transition-all duration-300 ">
        <SearchBar />
      </div>

      {/* Right */}
      <div className="flex items-center h-11 space-x-4 justify-end pl-5 w-full">
        <p className="items-center hidden md:flex whitespace-nowrap space-x-2 cursor-pointer border-2 hover:border-gray-700 rounded-md p-1 px-3 transition">
          Become a Host
        </p>
        {/* <GlobeAltIcon className="text-gray-500 h-6 cursor-pointer" /> */}
        <Menu as="div" className="relative">
          <div
            className="flex items-center space-x-2 cursor-pointer border-2 hover:border-gray-700 rounded-md p-1 px-3 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p>Login</p>
            <UserCircleIcon className="h-6 text-gray-800" />
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            onClose={() => setIsOpen(false)}
          >
            <div
              className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              ref={dropdownRef}
            >
              {/* Dropdown menu items will go here */}
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100" : ""
                    } block px-4 py-2 text-sm text-gray-700 w-full rounded-md text-left`}
                  >
                    Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100" : ""
                    } block px-4 py-2 text-sm text-gray-700 w-full rounded-md text-left`}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Transition>
        </Menu>
      </div>

      {/* Divider */}
      <div className="border border-gray-200 hidden md:block mt-2 col-span-full"></div>

      {/* Bottom */}
      <div className="pt-2 col-span-3 hidden gap-x-3 md:inline-flex whitespace-nowrap">
        <p className="button">Cancellation Flexibility</p>
        <p className="button">Type of Place</p>
        <p className="button">Price</p>
        <p className="button">More Filters</p>
      </div>
    </header>
  );
}

export default Header;
