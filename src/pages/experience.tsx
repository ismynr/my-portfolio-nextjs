import Layout from '../components/Layout'
import Image from 'next/image'
import sirclo from '../../public/img/sirclo.png'
import nocola from '../../public/img/nocola.png'
import phb from '../../public/img/phb.png'

export default function ExperienceEducation() {
  return (
    <Layout title="Experience - Ismi Nururrizqi">
      <header className="">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight">Experience</h1>
        </div>
      </header>

      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
        <ul className="steps steps-vertical w-full">
            <li data-content="2" className="step step-primary">
              <div className="card w-full card-bordered lg:card-side bg-neutral">
                <figure>
                  {/* <Image
                    className="h-full"
                    src={sirclo}
                    alt="Picture of the author"
                  /> */}
                </figure>

                <div className="card-body w-full">
                  <h2 className="text-2xl font-bold card-title mb-3">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <Image src={sirclo} alt="Picture of the author" />
                      </div>
                    </div>
                    SIRCLO
                  </h2>
                  
                  <div className="card-actions">
                    <div className="badge badge-outline">March 2022 - Current</div>   
                    <div className="badge badge-outline">Fulltime</div> 
                  </div>
                  <div className="badge badge-secondary badge-lg my-2">Junior Software Engineer</div> 
                  <span className="text-left">
                    Backend - ICUBE By SIRCLO - Maintain e-commerce based on Magento, such as: 
                    <br />
                    <ul className="list-[square] pl-5">
                      <li>Customization based on Magento 2, such as implement new features flow, new integration such as payment, delivery method, customization of existing Magento extensions, and feature adjustment based on SWIFT By SIRCLO</li>
                      <li>Improve speed and performance of e-commerce Magento in access cart, checkout, and promotion applying process with SQL query optimization.</li>
                      <li>Debugging, finding core issues, fixing several bugs, monitoring, and decrease error rate</li>
                      <li>Write technical document and refactor code to improve readability flow code</li>
                    </ul>
                  </span>
                </div>
              </div>
            </li>
            <li data-content="1" className="step">
              <div className="card w-full card-bordered lg:card-side bg-neutral">
                  <figure>
                    {/* <Image
                      className="h-full"
                      src={nocola}
                      alt="Picture of the author"
                    /> */}
                  </figure>
                <div className="card-body w-full">
                  <h2 className="text-2xl font-bold card-title mb-3">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <Image src={nocola} alt="Picture of the author" />
                      </div>
                    </div>
                    PT Nocola IoT Solution
                  </h2>

                  <div className="card-actions">
                    <div className="badge badge-outline">Juli 2019 - Agustus 2019</div>
                    <div className="badge badge-outline">Internship</div> 
                  </div>
                  <div className="badge badge-secondary badge-lg my-2">Web Programmer</div> 
                  <span className="text-left">
                    IT internship experience
                    <br />
                    <ul className="list-[square] pl-5">
                      <li>Design and create “Rembesin” web application with Codeigniter Framework and completed within 1 month.</li>
                      <li>Manual testing of Pertamina&apos;s BOC+ 2.0 application, in accordance with the UAT (User Acceptance Test) document.</li>
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