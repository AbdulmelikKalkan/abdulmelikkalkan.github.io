import Head from 'next/head'
import SideBar from './sidebar'
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>/home/abdulmelik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full h-full dark:bg-dbg">
        <SideBar></SideBar>
        {children}
      </main>
    </>
  )
}
