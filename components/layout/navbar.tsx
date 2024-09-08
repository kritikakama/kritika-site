"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "../theme-switcher";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="w-screen h-auto fixed top-4 flex justify-center items-center light-green z-50">
      <Tabs
        aria-label="menu"
        selectedKey={pathname}
        defaultSelectedKey="/"
        color="default"
        radius="full"
      >
        <Tab key="/" href="/" title="Home" />
        <Tab key="/contact" href="/contact" title="Contact" />
        <Tab
          key="resume"
          href="https://drive.google.com/file/d/1EbqxHnjnj2mT0LCpBKmzCyJD09fWry2e/view"
          target="_blank"
          title="Resume"
        />
        <Tab
          key="theme"
          className="p-0"
          title={<ThemeSwitcher />}
          onClick={() => window.location.reload()}
        />
      </Tabs>
    </div>
  );
}
