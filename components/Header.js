import React, { Fragment } from "react";
import { Navbar, Dropdown } from "flowbite-react";
import { Avatar } from "flowbite-react";

export default function NavigationBar() {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <>
      <Navbar fluid={true} rounded={true} className="fixed top-0 z-50 w-full opacity-90 hover:opacity-100 transition-all focus-within:opacity-100">
        <Navbar.Brand href="/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Krilya
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-lg font-bold">Nox499</span>
              <span className="block truncate text-sm">
                Ayoub@Rbahi.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Login</Dropdown.Item>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar>
    </>
  );
}
