import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import DefaultLayout from '@/layouts/default'
import Logo from '@/components/Logo'
import TypeWriter from '@/components/TypeWriter'
import { plankIcons } from '@/utils/Icons'

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>SoftxCulture</title>
      </Head>
      <DefaultLayout>
        <div className="relative flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center w-full space-y-2">
            <Logo />
            <h3 className="font-raleway font-light text-base text-white">Outsourcing company, powered by Osomware.</h3>
            <TypeWriter />
          </div>
          <div className="absolute bottom-10 flex flex-row items-center justify-evenly w-full max-w-xl rounded-3xl px-3 py-2 bg-black bg-opacity-50">
            {plankIcons.map((nav: { name: string, icon: JSX.Element }, i: number) => (
              <Link
                key={i}
                href="/"
                title={nav.name}
                className="p-3 rounded-full bg-midnight transition-all ease-in-out duration-200 transform hover:scale-90"
              >
                {nav.icon}
              </Link>
            ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}

export default Home