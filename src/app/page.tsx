"use client"

import { forwardRef, useRef } from "react"
import { useReactToPrint } from "react-to-print"
import { DownloadIcon, PrinterIcon } from "lucide-react"

import SkillsSection from "@/components/Skills"
import { SKILLS } from "@/data/Skills"
import { LANGUAGES } from "@/data/Languages"
import dayjs from "dayjs"

const experiences = [
  {
    startAt: "2022-03",
    role: "Mobile & Frontend Web Developer",
    company: "Suvie · Full-time",
    location: "Boston (Remote)",
    description: [
      "Refactoring company's site from CSR to SSG. SEO and lighthouse scores were hugely improved",
      "Merge various projects into a monorepo (Turborepo) to allow code sharing. Resulted in better DX and DRY code",
      "Maintenance of mobile app built in React Native for controlling an IOT device",
      "Created a solution for handling A/B testing without giving up on SSG",
    ],
  },
  {
    startAt: "2021-05",
    endAt: "2022-02",
    role: "Frontend Web Developer",
    company: "SweetRush Inc · Full-time",
    location: "San Francisco (Remote)",
    description: [
      "Refactoring a Shopify store to use Hydrogen React",
      "Development of landing pages for marketing campaigns",
      "Migration of site from WordPress to Headless WP + Next.js",
    ],
  },
  {
    startAt: "2020-01",
    endAt: "2021-03",
    role: "Frontend Web Developer",
    company: "PatientStudio · Full-time",
    location: "Brazil",
    description: [
      "Development of a clinical application for managing patient data, appointment scheduling, and health issue tracking",
    ],
  },
  {
    startAt: "2018-08",
    endAt: "2019-12",
    role: "Full Stack Web Developer",
    company: "UpWork",
    location: "Freelancer",
    description: [
      "Development of various sites and applications",
      "Migration of a legacy app built with Redux and complex state to a simpler architecture in ReactQuery",
      "Performance improvement by replacing MUI with Tailwind + Radix. Lighhouse scores more than doubled",
    ],
  },
  {
    startAt: "2017-04",
    endAt: "2018-07",
    role: "Desktop Developer",
    company: "Prevedello Sistemas",
    location: "Brazil",
    description: ["Development of ERP systems", "API integrations with warehouse and e-commerces"],
  },
]

const description =
  "Front-End Engineer with a passion for building innovative products and user interfaces using cutting edge web technologies. Over 6 years of experience creating modern and performant web applications. Proficient in Javascript, TypeScript, React and Next.js. Also learning Node and React Native."

const getWorkingTime = (startAt: string, endAt?: string) => {
  try {
    const diff = dayjs(endAt).diff(startAt, "M")
    const years = Math.floor(diff / 12)
    const months = (diff + 1) % 12
    return { years, months }
  } catch (error) {
    return {}
  }
}

const getWorkingTimeFormatted = (startAt: string, endAt?: string) => {
  try {
    const { years, months } = getWorkingTime(startAt, endAt)

    let msg = ""
    if (years) msg += `${years}yr `
    if (months) msg += `${months}mos`

    return msg
  } catch (error) {}
}

export default function Home() {
  const cvRef = useRef<HTMLDivElement>(null)

  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
  })

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <nav className="border-b bg-white">
        <div className="mx-auto flex h-16 w-full max-w-4xl items-center justify-end px-2">
          <button
            className="flex items-center space-x-2 rounded bg-blue-500 py-2 px-4 font-bold text-white transition-colors duration-200 hover:bg-blue-600"
            onClick={handlePrint}
          >
            <span>Print CV</span>
            <PrinterIcon className="h-5 w-5" />
          </button>
        </div>
      </nav> */}

      <div className="w-12 h-12 fixed bottom-8 right-8">
        <button
          onClick={handlePrint}
          className="flex items-center justify-center w-full h-full bg-white rounded-full shadow outline-none focus-visible:ring text-gray-600"
        >
          <DownloadIcon />
        </button>
      </div>

      <div className="mx-auto max-w-4xl space-y-4 p-0 py-4 px-2 md:py-10">
        <div className="shadow">
          <CV ref={cvRef} />
        </div>
      </div>
    </div>
  )
}

const CV = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="doc">
      <div className="doc-side bg-blue-500">
        {/* Name */}
        <div className="px-4 py-6 pb-2">
          <h1 className="text-4xl font-bold text-white">Gabriel M. Linassi</h1>
          <div className="mt-1">
            <h2 className="text-xl text-white">Software Engineer</h2>
          </div>
        </div>
        {/* Contact */}
        <div className="mt-4 bg-blue-400 px-4 py-1">
          <h3 className="text-base font-bold text-white">Contact</h3>
        </div>
        <div className="py-4 px-4">
          <div>
            <h4 className="font-bold text-white">Address</h4>
            <p className="text-sm text-white">
              <span>Rio de Janeiro, Brazil</span>
            </p>
          </div>
          <div className="mt-3">
            <h4 className="font-bold text-white">Email</h4>
            <p className="text-sm text-white">gabrielm.linassi@gmail.com</p>
          </div>
          <div className="mt-3">
            <h4 className="font-bold text-white">WWW</h4>
            <p className="text-sm text-white">gabrielmlinassi.com</p>
            <p className="text-sm text-white">github.com/gabrielmlinassi</p>
            <p className="text-sm text-white">linkedin.com/in/gabrielmlinassi</p>
          </div>
        </div>
        <div className="mt-4 bg-blue-400 px-4 py-1">
          <h3 className="text-base font-bold text-white">Skills</h3>
        </div>
        <SkillsSection skills={SKILLS} />
        <div className="mt-4 bg-blue-400 px-4 py-1">
          <h3 className="text-base font-bold text-white">Languages</h3>
        </div>
        <SkillsSection skills={LANGUAGES} />
      </div>

      <div className="bg-white p-6">
        <p className="line-clamp-5 text-sm leading-relaxed text-gray-700">{description}</p>
        {/* Work history */}
        <div className="mt-4 grid gap-4">
          <div className="border-t-2 border-b-2 border-gray-100 py-1">
            <h3 className="text-lg font-bold text-blue-500">Work History</h3>
          </div>
          {experiences.map(({ startAt, endAt, role, company, location, description }, i) => (
            <div key={i} className="grid grid-cols-4">
              <div className="col-span-1 text-sm text-gray-700">
                <div>{dayjs(startAt).format("MMM YYYY")} - </div>
                <div>{endAt ? dayjs(endAt).format("MMM YYYY") : "Present"}</div>
                <div className="mt-1 text-xs text-gray-500">
                  {getWorkingTimeFormatted(startAt, endAt)}
                </div>
              </div>
              <div className="col-span-3">
                <h4 className="text-lg font-bold text-gray-800">{role}</h4>
                <p className="text-sm italic text-gray-700">
                  {company}, {location}
                </p>
                <ul className="ml-4 list-disc">
                  {description.map((d, i) => (
                    <li key={i} className="text-sm leading-normal text-gray-700">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education history */}
        <div className="mt-4 border-t-2 border-b-2 border-gray-100 py-1">
          <h3 className="text-lg font-bold text-blue-500">Education</h3>
        </div>
        <div className="mt-4 grid grid-cols-4">
          <div className="col-span-1 text-sm text-gray-700">
            <div>2015-06 - </div>
            <div>2020-05</div>
          </div>
          <div className="col-span-3">
            <h4 className="text-lg font-bold">BSc Computer Science</h4>
            <p className="text-sm italic text-gray-700">URI - Frederico Westphalen, RS, Brazil</p>
          </div>
        </div>
      </div>
    </div>
  )
})

CV.displayName = "Home"
