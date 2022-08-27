import Layout from './layout'
import Footer from './footer'
export default function Main({ children }) {
  return (
    <Layout>
      <div className="flex flex-col flex-grow max-w-2xl mx-auto md:px-0 dark:bg-dbg">
        <div className="flex-grow pt-32 items-center mx-auto w-full max-w-xl sm:pl-2 sm:pr-2">
          {children}
        </div>
        <Footer></Footer>
      </div>
    </Layout>
  )
}
