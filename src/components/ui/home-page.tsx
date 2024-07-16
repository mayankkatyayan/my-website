/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/sIHVEamXBAF
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function HomePage() {
  useEffect(() => {}, [])
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">Mayank Katyayan</div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Education 
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Experience
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Projects
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-1 p-4 space-y-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold">Mayank Katyayan</h1>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#">
              <MailIcon className="w-6 h-6 text-blue-500" />
              mayank.katyayan123@gmail.com
            </a>
            <a href="#">
              <PhoneIcon className="w-6 h-6 text-blue-500" />
              +91 7301723504
            </a>
            <a href="#">
              <GitlabIcon className="w-6 h-6 text-blue-500" />
              mayankkatyayan
            </a>
            <a href="#">
              <LinkedinIcon className="w-6 h-6 text-blue-500" />
              Mayank Katyayan
            </a>
            <a href="#">
              <DribbbleIcon className="w-6 h-6 text-blue-500" />
              Mayank Katyayan
            </a>
          </div>
        </section>
        <section id="education" className="space-y-4">
          <h2 className="text-2xl font-bold">Education</h2>
          <Card>
            <CardHeader>
              <CardTitle>Central Institute of Technology Kokrajhar, Assam</CardTitle>
              <div className="text-gray-500">July 2021 - June 2025</div>
            </CardHeader>
            <CardContent>
              <p>Bachelors of Technology in Computer Science and Engineering</p>
              <p>Major: C++, DSA, Java, OOPs, Architecture, Networking, TOC, DAA</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Millia Convent English Medium School Purnea, Bihar</CardTitle>
              <div className="text-gray-500">April 2018 - March 2020</div>
            </CardHeader>
            <CardContent>
              <p>Intermediate(+1,+2) from CBSE Board</p>
              <p>Major: Physics, Chemistry, Mathematics, Computer Science</p>
            </CardContent>
          </Card>
        </section>
        <section id="experience" className="space-y-4">
          <h2 className="text-2xl font-bold">Experience</h2>
          <Card>
            <CardHeader>
              <CardTitle>OneON - Bangalore</CardTitle>
              <div className="text-gray-500">Jan 2024 - May 2024</div>
            </CardHeader>
            <CardContent>
              <p>One stop for all home automations and services.</p>
              <p>Full Stack Developer</p>
              <ul className="list-disc list-inside">
                <li>
                  Developed and Contributed in OneON Services production web based app(Tours and Travels) and its
                  website oneon.in as well.
                </li>
                <li>Advancements of design and web interfaces using Java Script.</li>
                <li>Lorem ipsum</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>La Garage - Mumbai</CardTitle>
              <div className="text-gray-500">Sep 2022 - Mar 2023</div>
            </CardHeader>
            <CardContent>
              <p>Doorstep car washing services and maintenance.</p>
              <p>UI/UX Designer</p>
              <ul className="list-disc list-inside">
                <li>Designed UI/UX interfaces for the clients.</li>
                <li>Contributed in the advancement of Web interface design.</li>
                <li>Applications used are Adobe Photoshop, Illustrator, Figma and Artboard.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Course Hero - Solutions</CardTitle>
              <div className="text-gray-500">April 2023 - present</div>
            </CardHeader>
            <CardContent>
              <p>
                Course Hero, an online learning platform for students to access course-specific study resources and
                online tutors.
              </p>
              <p>Subject Matter Expert</p>
              <ul className="list-disc list-inside">
                <li>Provided solutions to the queries related to Java and OOPs.</li>
                <li>Subject Matter Expert in Computer Science and Java Programming</li>
              </ul>
            </CardContent>
          </Card>
        </section>
        <section id="projects" className="space-y-4">
          <h2 className="text-2xl font-bold">Projects</h2>
          <Card>
            <CardHeader>
              <CardTitle>Blogging Website</CardTitle>
              <div className="text-gray-500">Oct 2023</div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>This website contains the admin and the user side.</li>
                <li>User puts the blog and the admin verifies it and then published into the website.</li>
                <li>Project done in HTML, CSS | Backend: PHP Laravel</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Movie Ticket Booking System</CardTitle>
              <div className="text-gray-500">April 2024</div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>
                  It is the movie ticket booking portal, where you ca book, schedule and buy tickets according to the
                  seats of your choices.
                </li>
                <li>Lorem ipsum</li>
                <li>Hosted in myphpadmin until into production.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Proxy :The Chat Bot</CardTitle>
              <div className="text-gray-500">April 2022</div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Trained Model is chatGPT with the twist of Tech Solutions.</li>
                <li>A chatting app with your AI helper.</li>
                <li>Frontend : Flutterflow , Figma</li>
                <li>Backend : Firebase</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>TicTacToe</CardTitle>
              <div className="text-gray-500">January 2023</div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>It is the game field development</li>
                <li>Language: C++</li>
              </ul>
            </CardContent>
          </Card>
        </section>
        <section id="contact" className="space-y-4">
          <h2 className="text-2xl font-bold">Contact</h2>
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input id="email" placeholder="Your email" type="email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" className="min-h-[100px]" />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="flex justify-between">
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Education
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Contact</h3>
            <p>Email: mayank.katyayan123@gmail.com</p>
            <p>Phone: +91 7301723504</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function DribbbleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  )
}


function GitlabIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
