"use client"

import { forwardRef, useRef } from "react"
import { useReactToPrint } from "react-to-print"
import { PrinterIcon } from "lucide-react"

import SkillsSection from "@/components/Skills"
import { SKILLS } from "@/data/Skills"
import { LANGUAGES } from "@/data/Languages"

export default function Home() {
  const cvRef = useRef<HTMLDivElement>(null)

  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
  })

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="border-b bg-white">
        <div className="mx-auto flex h-16 w-full max-w-4xl items-center justify-end px-2">
          <button
            className="flex items-center space-x-2 rounded bg-blue-500 py-2 px-4 font-bold text-white transition-colors duration-200 hover:bg-blue-600"
            onClick={handlePrint}
          >
            <span>Print CV</span>
            <PrinterIcon className="h-5 w-5" />
          </button>
        </div>
      </nav>

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
        <p className="line-clamp-5 text-sm leading-relaxed text-gray-700">
          {/* Front-End Engineer with 5 years of experience with detailed understanding in developing
          modern and responsive interfaces for a wide range of businesses. Excellent grasp of React,
          Nextjs, TS, Redux, Best Practices, Testing, REST and GraphQL. Also starting to get more
          familiarized with ReactNative and Python */}
          Software Engineer with expertise in Front-End development. Over 5 years of experience
          developing modern and performant web applications for a wide range of businesses. Well
          familiar with Javascript, TypeScript, React and studying React Native and Node. Enjoys
          spending time learning and sharing knowledge with the community.
        </p>
        {/* Work history */}
        <div className="mt-4 border-t-2 border-b-2 border-gray-100 py-1">
          <h3 className="text-lg font-bold text-blue-500">Work History</h3>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-y-4">
          {/* Work #1 */}
          <div className="col-span-1 text-sm text-gray-700">
            <div>2022-07 - </div>
            <div>Present</div>
            <div className="mt-1 text-xs text-gray-500">1yr 3mos</div>
          </div>
          <div className="col-span-3">
            <h4 className="text-lg font-bold text-gray-800">Full-Stack Developer</h4>
            <p className="text-sm italic text-gray-700">Suvie, US (remote)</p>
            <ul className="ml-4 list-disc">
              <li className="text-sm leading-normal text-gray-700">
                Refactoring company&apos;s site from CSR to SSG. SEO and lighthouse scores were
                hugely improved
              </li>
              <li className="text-sm leading-normal text-gray-700">
                Merge various projects into a monorepo (Turborepo) to allow code sharing. Resulted
                in better DX and DRY code
              </li>
              <li className="text-sm leading-normal text-gray-700">
                Maintenance of mobile app built in React Native
              </li>
              <li className="text-sm leading-normal text-gray-700">
                Add feature flags for marketing strategies and conversion
              </li>
            </ul>
          </div>

          {/* Work #1 */}
          <div className="col-span-1 text-sm text-gray-700">
            <div>2020-11 - </div>
            <div>2022-05</div>
            <div className="mt-1 text-xs text-gray-500">1yrs 7mos</div>
          </div>
          <div className="col-span-3">
            <h4 className="text-lg font-bold text-gray-800">Front-End Developer</h4>
            <p className="text-sm italic text-gray-700">SweetRush Inc., US (remote)</p>
            <ul className="ml-4 list-disc">
              <li className="text-sm leading-normal text-gray-700">
                Refactoring a Shopify store to use Hydrogen React
              </li>
              <li className="text-sm leading-normal text-gray-700">
                Development of landing pages for marketing campaigns
              </li>
              <li className="text-sm leading-normal text-gray-700">
                Migration of site from WordPress to Headless WP + Next.js
              </li>
            </ul>
          </div>

          {/* Work #1 */}
          <div className="col-span-1 text-sm text-gray-700">
            <div>2019-07 - </div>
            <div>2020-08</div>
            <div className="mt-1 text-xs text-gray-500">11mos</div>
          </div>
          <div className="col-span-3">
            <h4 className="text-lg font-bold text-gray-800">Front-End Developer</h4>
            <p className="text-sm italic text-gray-700">UpWork, (freelancer)</p>
            <ul className="ml-4 list-disc">
              <li className="text-sm leading-normal text-gray-700">
                Development of various sites and applications
              </li>
              <li className="text-sm leading-normal text-gray-700">
                Migration of a legacy app built with Redux and complex state to a simpler
                architecture in ReactQuery
              </li>
              <li className="text-sm leading-normal text-gray-700">
                Performance improvement by replacing MUI with Tailwind + Radix. Lighhouse scores
                more than doubled
              </li>
            </ul>
          </div>

          {/* Work #2 */}
          <div className="col-span-1 text-sm text-gray-700">
            <div>2017-04 - </div>
            <div>2019-07</div>
            <div className="mt-1 text-xs text-gray-500">2yrs 4mos</div>
          </div>
          <div className="col-span-3">
            <h4 className="text-lg font-bold text-gray-800">Full Stack Desktop Developer</h4>
            <p className="text-sm italic text-gray-700">Prevedello Sistemas, Brazil (on-site)</p>
            <ul className="ml-4 list-disc">
              <li className="text-sm leading-normal text-gray-700">
                Maintenance and development of ERP and POS systems
              </li>
              <li className="text-sm leading-normal text-gray-700">
                API integrations with warehouse and e-commerces
              </li>
            </ul>
          </div>

          {/* Work #3 */}
          <div className="col-span-1 text-sm text-gray-700">
            <div>2016-03 - </div>
            <div>2017-04</div>
            <div className="mt-1 text-xs text-gray-500">1yr 2mos</div>
          </div>
          <div className="col-span-3">
            <h4 className="text-lg font-bold text-gray-800">Technical Support Analyst</h4>
            <p className="text-sm italic text-gray-700">Prevedello Sistemas, Brazil (on-site)</p>
            <ul className="ml-4 list-disc">
              <li className="text-sm leading-normal text-gray-700">
                Evaluate user problems, respond to support requests and patiently walk individuals
                through basic troubleshooting tasks
              </li>
            </ul>
          </div>
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
