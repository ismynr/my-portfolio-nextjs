import Image from 'next/image';
import profileImage from '../../public/img/profile-img.jpg'

export default function About() {
    return (
      <>
        <div className="hero my-24">
          <div className="hero-content text-center">
            <div>
              <div className="avatar">
                <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <div className="inset-0 w-60 h-60 object-cover">
                    <Image
                      src={profileImage}
                      alt="Picture of the author"
                      width={40}
                      height={40}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
              <h1 className="text-6xl font-bold my-10">Ismi Nururrizqi</h1>
              <h3 className="text-2xl">Software Engineer | Backend | Tech Content Writer</h3>
              <p className="py-6">
                I am Software Engineer, I have more than 1 year of experience as Backend Software Engineer. <br />
                I work with APIs or GraphQL, manipulate SQL Query for providing data with query optimize, customize existing system for building new features, improve performance, debuging for fixing several bugs, research and integrate with external system. <br />
                Currently I am research and learning about best practice of software design and architecture, write efficient code, security, and explore about DevOps. <br />
              </p>
            </div>
          </div>
        </div>
      </>
    )
}