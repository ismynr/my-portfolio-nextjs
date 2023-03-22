import Layout from '../components/Layout'
import javascriptSVG from '../../public/javascript.svg'
import phpSVG from '../../public/php.svg'
import javaSVG from '../../public/java.svg'
import pythonSVG from '../../public/python.svg'
import typescriptSVG from '../../public/typescript.svg'
import gitSVG from '../../public/git.svg'
import githubSVG from '../../public/github.png'
import awsSVG from '../../public/aws.svg'
import expressSVG from '../../public/express.svg'
import laravelSVG from '../../public/laravel.svg'
import nodejsSVG from '../../public/nodejs.svg'
import restapi from '../../public/restapi.png'
import cli from '../../public/cli.png'
import graphql from '../../public/graphql.svg'
import ajax from '../../public/ajax.png'
import docker from '../../public/docker.png'
import redis from '../../public/redis.svg'
import codeigniter from '../../public/codeigniter.png'
import mysql from '../../public/mysql.png'
import postgresql from '../../public/postgresql.png'
import magento from '../../public/magento.svg'
import bootstrap from '../../public/bootstrap.png'
import jquery from '../../public/jquery.svg'
import hapi from '../../public/hapi.png'
import rabbitmq from '../../public/rabbitmq.png'
import Image from 'next/image';

export default function Skills() {
  return (
    <Layout title="Skills - Ismi Nururrizqi">
      <header className="">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight">Skills</h1>
        </div>
      </header>
      

      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="divider">Programming Languages</div>
          <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={javascriptSVG}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">JavaScript</span>
            </div>
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={phpSVG}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">PHP</span>
            </div>
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={javaSVG}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">Java</span>
            </div>
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={pythonSVG}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">Python</span>
            </div>
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={typescriptSVG}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">TypeScript</span>
            </div>
          </div>

          <div className="divider mt-10">Tools & Technologies</div>
          <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={gitSVG}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">Git</span>
            </div>
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={githubSVG}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">Github</span>
            </div>
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={awsSVG}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">AWS (EC2 RDS)</span>
            </div>
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={restapi}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">REST API</span>
            </div>
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={graphql}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">GraphQL</span>
            </div>
            {/* <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={ajax}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">Ajax</span>
            </div> */}
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={cli}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">CLI</span>
            </div>
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={nodejsSVG}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">Node.js</span>
            </div>
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={docker}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">Docker</span>
            </div>
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={redis}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">Redis</span>
            </div>
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={rabbitmq}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">RabbitMQ</span>
            </div>
          </div>

          <div className="divider mt-10">Databases</div>
          <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={mysql}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">MySQL</span>
            </div>
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={postgresql}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">PostgreSQL</span>
            </div>
          </div>

          <div className="divider mt-10">Frameworks & Libraries</div>
          <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={laravelSVG}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">Laravel</span>
            </div>
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={magento}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">Magento 2</span>
            </div>
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={expressSVG}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">Express.js</span>
            </div>
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={hapi}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">Hapi.js</span>
            </div>
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={bootstrap}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">Bootstrap</span>
            </div>
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={jquery}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">Jquery</span>
            </div>
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={codeigniter}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">Codeigniter</span>
            </div>
            {/* <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={codeigniter}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">Flask</span>
            </div>
            <div className="flex items-center bg-neutral rounded-lg p-4">
              <Image
                className="mr-3"
                src={codeigniter}
                alt="JavaScript"
                width={50}
                height={50}
              />
              <span className="text-lg font-bold">Springbot</span>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}