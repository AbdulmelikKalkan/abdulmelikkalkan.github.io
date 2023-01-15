import Main from '../components/main'

export default function Home() {
  return (
    <Main>
      <p>
        Resume
      </p>
    </Main>
  )
}

export async function getStaticProps(context) {
  return {
    redirect: {
      destination: 'https://docs.google.com/document/d/1_5kFQWujxgYVaWwZpiSBG5B7_qGexIW23jl0LLg5PjA/preview#',
      permanent: false,
    },
  }
}