import Main from '../components/main'
import Link from 'next/link'

export default function Home() {
  return (
    <Main>
      <header className="text-3xl font-bold mb-6">
        Hi, I&apos;m Abdulmelik Kalkan
      </header>
      <p>
        Software engineer currently working as a freelancer, backend developer.
        I&apos;m living in Antalya, Turkey. During my free time, I like to swim and
        ride bicycle.
      </p>
      <br />
      <p>
        In the past, I have worked for SoftwareOne Turkey, primarily on secrets
        management and access management systems.
      </p>
    </Main>
  )
}
