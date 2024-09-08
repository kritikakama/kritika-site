"use client";

import React, { useState } from "react";
import { track } from "@vercel/analytics";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Chip,
} from "@nextui-org/react";

export default function CoverLetter() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isViewed, setIsViewed] = useState(false);

  if (isOpen && !isViewed) {
    track("cover-letter-viewed", {}, { flags: ["cover-letter-viewed"] });
    setIsViewed(true);
  }

  return (
    <div
      role="alert"
      className="bg-secondary-500 text-white p-2 rounded-lg flex gap-2 w-full"
    >
      🚀
      <div>
        <span>
          Actively seeking an internship in front-end/full-stack development
        </span>
        <br />
        <Chip
          className="cursor-pointer"
          color="warning"
          onClick={() => onOpen()}
        >
          Cover Letter
        </Chip>
      </div>
      <Modal
        size="5xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Hello!</ModalHeader>
              <ModalBody>
                <p>
                  I’m Kritika, a motivated and eager-to-learn 3rd-year Bachelor
                  of Computer Applications (BCA) student. I am passionate about
                  software development and am actively seeking an internship
                  where I can apply and grow my skills in front-end or
                  full-stack development.
                </p>
                <p className="font-bold">My Skillset</p>
                <p>
                  Over the course of my academic journey, I have gained hands-on
                  experience with languages like JavaScript, Python, and C++. I
                  have also worked on projects involving web development, where
                  I used technologies like HTML, CSS, JavaScript, and frameworks
                  like React.js.
                </p>
                <p className="font-bold">Some of my key projects include:</p>
                <li>
                  E-commerce Website: I developed a responsive e-commerce site
                  using React.js and integrated a payment gateway for real-time
                  transactions.
                </li>
                <li>
                  College Management System: A database-driven project built
                  with PHP and MySQL to handle college-related records like
                  student registration, course management, and faculty
                  assignments.
                </li>
                <li>
                  To-Do List: I created a dynamic to-do list application that
                  allows users to add, manage, and track their tasks. This
                  project demonstrates my skills in state management and user
                  interaction.
                </li>
                <li>
                  Date Range Picker: I developed a date range picker component
                  that enables users to select specific date ranges for events
                  or scheduling purposes. This project highlights my ability to
                  implement key functionalities in web applications.
                </li>
                <p>
                  I am also well-versed in version control systems like Git and
                  have worked with tools like Visual Studio Code, Figma, and
                  GitHub to collaborate on team projects.
                </p>
                <p className="font-bold">Why I'm a great fit for your team:</p>
                <p>
                  I am dedicated to continuous learning and thrive in
                  environments where I can challenge myself. I believe an
                  internship will not only allow me to contribute to real-world
                  projects but also enhance my knowledge and skills, making me a
                  better software developer.
                </p>
                <p>
                  If you're looking for a driven and enthusiastic intern to join
                  your team, I'd love to connect and discuss how I can
                  contribute to your organization!
                </p>
                <p>Best regards,</p>
                <p>Kritika</p>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => (window.location.href = "/contact")}
                >
                  ✍️Contact Me
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
