"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";
import NextImage from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Chip } from "@nextui-org/chip";
import SideMenu from "./components/side-menu";
import PreviewIframe from "@/components/preview-iframe";
import useScreenSize from "@/hooks/useScreenSize";
import { useWindow } from "@/hooks/useWindow";

export default function Home() {
  const technologies: Record<string, string[]> = {
    language: ["HTML", "Javascript", "Java"],
    style: ["Tailwind", "CSS"],
    backend: ["Node.js", "MySQL"],
    tools: ["Git", "Vercel"],
  };

  const chipTheme: (
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
  )[] = ["primary", "secondary", "success", "warning", "danger", "default"];
  const chipVariants: ("solid" | "bordered" | "flat" | "faded" | "shadow")[] = [
    "solid",
    "bordered",
    "flat",
    "faded",
    "shadow",
  ];

  const sideProjects = [
    {
      title: "AI Hub powered by Cloudflare Worker AI",
      desc: "Developed a project using Nuxt.js and Cloudflare Worker AI, facilitating users to multiple Cloudflare Worker AI functionalities. Integrated dark/light mode and OAuth login with GitHub for enhanced user experience. Additionally, empowered users to deploy their private AI sites.",
      preview: "https://ai.larryxue.dev/",
      github: "https://github.com/larry-xue/nuxt-chat-cloudflare",
    },
    {
      title: "Larry Xue Site",
      desc: "Built a personal website using Next.js and Next UI.",
      preview: "https://larryxue.dev/",
      github: "https://github.com/larry-xue/larry-xue-site",
    },
    {
      title: "Weather App",
      desc: "A simple weather app using Open-Meteo API and React.",
      preview: "https://weather-app-react-75h.pages.dev/",
      github: "https://github.com/larry-xue/weather-app-react",
    },
    {
      title: "Folder to JSON",
      desc: "Folder to JSON is a web application utilizing the showDirectoryPicker API to enable users to select a folder on their local machine. It recursively retrieves subdirectories to generate a JSON tree structure representing the directory hierarchy.",
      preview: "https://folder2json.larryxue.dev/",
      github: "https://github.com/larry-xue/folder-to-json",
    },
    {
      title: "Vite Vue2 Starter Template",
      desc: "vite-vue2-starter is a template for quickly starting Vue.js 2 projects. Built on the Vite v5 build tool",
      preview: "",
      github: "https://github.com/larry-xue/vite-vue2-starter",
    },
  ];

  const { isSmallScreen, showSideMenu } = useScreenSize();
  const _window = useWindow();

  return (
    <>
      {showSideMenu && <SideMenu />}
      <div className="mx-auto w-full text-center mt-16 md:flex justify-center gap-12">
        <div>
          <h1 className="hover:text-shadow-3 m-0 font-heading font-black transition-all duration-300 text-primary text-4xl md:text-5xl mt-4">
            Kritika Kama
          </h1>
        </div>
      </div>
      <div className="px-4 mt-2">
        <h4 className="hover:text-shadow-3 m-0 font-heading text-lg font-black transition-all duration-300">
          A bit about me
        </h4>
        <p>
          Hey there! 👋 I'm Kritika Kama a results-driven Front-End Developer
          currently in my 5th semester I am passionate about learning the
          intricacies of programming, web development, databases, and other core
          areas of computer applications. As I approach the final phase of my
          degree, I am working on enhancing my skills and preparing for upcoming
          internships, projects, and opportunities that will help me grow in the
          tech industry. My journey so far has been filled with learning, and I
          am excited for what lies ahead.
        </p>
      </div>
      <div className="px-4 mt-4 w-full">
        <h4 className="hover:text-shadow-3 m-0 font-heading text-lg font-black tracking-[-0.1rem] transition-all duration-300"></h4>
        <Accordion
          variant="splitted"
          selectionMode="multiple"
          defaultExpandedKeys={["technologies and tools", "personal traits"]}
        >
          <AccordionItem
            title="Technologies and Tools"
            key="technologies and tools"
            aria-label="technologies and tools"
          >
            {Object.keys(technologies).map((key) => (
              <div key={key} className="flex flex-wrap gap-2 mb-2">
                {technologies[key].map((tech) => (
                  <Chip
                    key={tech}
                    color={
                      chipTheme[Math.floor(Math.random() * chipTheme.length)]
                    }
                    variant={
                      chipVariants[
                        Math.floor(Math.random() * chipVariants.length)
                      ]
                    }
                  >
                    {tech}
                  </Chip>
                ))}
              </div>
            ))}
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mb-12 px-4 w-full" id="education">
        <h1 className="hover:text-shadow-3 m-0 font-heading text-[clamp(3rem,_10vw,_4.5rem)] font-black tracking-[-0.2rem] transition-all duration-300">
          Education
        </h1>
        <div>
          <h3 className="text-2xl font-bold">Commerce :87%</h3>
          <p className="text-lg">
            India International School (iis), Jaipur(2021-22)
          </p>
        </div>
        <br />
        <div>
          <h3 className="text-2xl font-bold">
            Bachelor of Computer Application
          </h3>
          <p className="text-lg">
            Symbiosis Institute of Computer Studies and Research,Pune(2022-25)
          </p>
        </div>
      </div>

      <div className="mb-12 px-4" id="side-projects">
        <h1 className="hover:text-shadow-3 m-0 font-heading text-[clamp(3rem,_10vw,_4.5rem)] font-black tracking-[-0.2rem] transition-all duration-300">
          Side Projects
        </h1>
      </div>
    </>
  );
}
