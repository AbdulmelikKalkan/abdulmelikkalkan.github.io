import Main from '../components/main'
import { useRouter } from "next/router"
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('https://docs.google.com/document/d/1_5kFQWujxgYVaWwZpiSBG5B7_qGexIW23jl0LLg5PjA/preview#')
  })
  return (
    <Main>
      <p>
        This is a resume
      </p>
    </Main>
  )
}