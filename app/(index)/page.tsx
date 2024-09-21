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
      title: "portfolio",
      desc: "hi this is my personal portfolio",
      preview: "https://kritika-site.vercel.app/",
      github: "https://github.com/kritikakama/todolist",
    },
    {
      title: "todo list",
      desc: "developed a project using jsx and it just basically add the todo delete and edit them and the mouse have bubble effect",
      preview: "https://todolist-alpha-eosin.vercel.app/",
      github: "https://github.com/kritikakama/todolist",
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
          <h3 className="text-2xl font-bold">93.8%</h3>
          <p className="text-lg">Mayura School, Jaipur(2019-20)</p>
          <br />
        </div>
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
        <div className="flex flex-wrap gap-4">
          {sideProjects.map((project) => (
            <Card className="md:w-[300px] w-full" key={project.github}>
              <CardHeader className="flex gap-3">
                <h2 className="text-md">{project.title}</h2>
              </CardHeader>
              <Divider />
              <CardBody>
                {project.preview &&
                _window?.self === _window?.top &&
                !isSmallScreen ? (
                  <div className="flex gap-2 h-[400px]">
                    <p className="text-sm w-1/3 text-gray-500 dark:text-gray-400 leading-loose">
                      {project.desc}
                    </p>
                    <PreviewIframe url={project.preview} />
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-loose">
                    {project.desc}
                  </p>
                )}
              </CardBody>
              <Divider />
              <CardFooter className="flex gap-3">
                <Link
                  isExternal
                  showAnchorIcon
                  href={project.preview}
                  isDisabled={!project.preview}
                >
                  Preview
                </Link>
                <Link
                  isExternal
                  showAnchorIcon
                  href={project.github}
                  isDisabled={!project.github}
                >
                  GitHub
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
