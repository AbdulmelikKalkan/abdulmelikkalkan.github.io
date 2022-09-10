import Footer from '../../components/footer'
import { Card, Col, Text, Grid } from '@nextui-org/react'
import Image from 'next/image'

export default function AdsBlocker() {
  const card = (imageSource) => {
    console.log(imageSource)
    return (
      <Card>
        <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
          <Col></Col>
        </Card.Header>
        <Card.Image
          src={imageSource}
          objectFit="contain"
          width="100%"
          height={340}
          alt="Card image background"
        />
      </Card>
    )
  }
  return (
    <>
      <main className="flex w-full h-full dark:bg-dbg">
        <div className="flex flex-col flex-grow w-9/12 mx-auto md:px-0 dark:bg-dbg">
          <div className="flex-grow pt-32 items-center mx-auto w-full w-9/12 sm:pl-2 sm:pr-2">
            <header className="text-3xl font-bold mb-6">
              Ads Blocker for Youtube
            </header>
            <Grid.Container gap={2} justify="center">
              {/* <Grid xs={12} sm={4}>
                {card("/adsblocker/logo.png")}
              </Grid> */}
              <Grid xs={12} sm={6}>
                {card('/adsblocker/dummycontent.png')}
              </Grid>
              <Grid xs={12} sm={6}>
                {card('/adsblocker/extension.png')}
              </Grid>
            </Grid.Container>
            <p>Ads Blocker for Youtube extension blocks ads from Youtube.</p>
            <p>
              Enable Ads Blocker for Youtube and Content Blocker of Ads Blocker
              by checking the box in Safari &#62; Preferences &#62; Extensions .
            </p>

            <a
              href="https://apps.apple.com/us/app/ads-blocker-for-youtube/id1641789685"
              target="_blank"
              rel="opener  noreferrer"
            >
              <Image
                src="/adsblocker/macstore.svg"
                alt="a dark logo"
                width={250}
                height={83}
              />
            </a>
            <p>
              For support, please send an{' '}
              <a
                href="mailto:kalkanabdulmelik@gmail.com"
                target="_blank"
                rel="opener  noreferrer"
              >
                <u>email</u>
              </a>
              . I will get back to you as soon as possible!
            </p>
            <a
              href="https://www.buymeacoffee.com/abdulmelik"
              target="_blank"
              rel="opener  noreferrer"
            >
              <img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" />
            </a>
            <br></br>
          </div>
          <Footer></Footer>
        </div>
      </main>
    </>
  )
}
