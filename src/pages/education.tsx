import Layout from '../components/Layout'
import Image from 'next/image'
import sirclo from '../../public/img/sirclo.png'
import nocola from '../../public/img/nocola.png'
import phb from '../../public/img/phb.png'

export default function Education() {
  return (
    <Layout title="Education - Ismi Nururrizqi">
      <header className="">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight">Education</h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <ul className="steps steps-vertical w-full">
            <li data-content="1" className="step">
              <div className="card w-full card-bordered lg:card-side bg-neutral">
                <figure>
                  {/* <Image
                    className="h-full"
                    src={phb}
                    alt="Picture of the author"
                  /> */}
                </figure>
                <div className="card-body w-full">
                  <h2 className="text-2xl font-bold card-title mb-3">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <Image src={phb} alt="Picture of the author" />
                      </div>
                    </div>
                    Politeknik Harapan Bersama
                  </h2>

                  <div className="badge badge-outline">October 2017 - October 2021</div>
                  <div className="card-actions">
                    <div className="badge badge-secondary badge-lg my-2">Informatics Engineering</div> 
                  </div>
                  <span className="text-left">
                    <ul className="list-[square] pl-5">
                      <li>Best Graduate Bachelor of Applied Informatics Engineering with GPA 3,88 / 4,00</li>
                      <li>Committee National Event as IT Support in INVOFEST 2019, Develop and maintain website such as new features, adjust templates, content, and event registration</li>
                      <li>Self Journal Publication with Lecturers &quot;Decision Support System for Arrange Training Using Decision Tree Algorithm&quot;</li>
                    </ul>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}