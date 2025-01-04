import Link from 'next/link'
import CtaIconButton from '@/components/CtaButton/CtaIconButton'
import CvElement from '@/components/CvElement/CvElement'
import HeadfulCard from '@/components/HeadfulCard/HeadfulCard'

const HeaderCard = () => {
  const futureThesis = new Date() > new Date(2024, 5, 1) ? ' thesis [@ETH](https://anakli.inf.ethz.ch/#Group)' : ''
  return (
    <HeadfulCard profileImagePath="/img/profile_picture_colored.jpg" bgImagePath="/img/background.jpeg">
      <h2 className="text-2xl xs:text-3xl font-semibold">Robin Holzinger</h2>
      <div className="my-4">
        <CvElement
          mdText={'CS Student [@TUM](https://www.tum.de/en/)' + futureThesis}
          mdDetail="top 1%: [best-in-tum](https://www.cit.tum.de/en/cit/studies/students/advising/informatics/tips-for-successful-studies/support-programs/)"
        />
        <CvElement
          mdText="Intern and Fulltime [@QuantCo](https://quantco.com/)"
          mdDetail="6, "
          ongoingSince={new Date(2023, 11, 1)}
        />
        <CvElement mdText="Working Student [@FINN](https://www.finn.com/en-US)" mdDetail="7 months" />
        <CvElement mdText="Abitur [@JGG](https://jgg-waldkirchen.de/)" mdDetail="top 0.5% within Bavaria" />
      </div>

      <div className="mt-8 mb-4">
        <h2 className="font-bold text-xl">Scholarships</h2>

        <CvElement mdText="[Max Weber Program](https://www.elitenetzwerk.bayern.de/en/home/funding-programs/max-weber-program)" />
        <CvElement mdText="[German Academic Scholarship Foundation](https://www.studienstiftung.de/en/)" />
        <CvElement mdText="[IT-Talents & Mathema GmbH](https://it-talents.de/partnerunternehmen/it-stipendien/)" />
      </div>

      <div className="mt-8 mb-4">
        <CtaIconButton
          iconPath="/ico/linkedin.svg"
          alt="LinkedIn"
          bgColor="rgb(0, 127, 177)"
          href="https://www.linkedin.com/in/robin-holzinger/"
        />
        <CtaIconButton
          iconPath="/ico/github.svg"
          alt="GitHub"
          bgColor="rgb(36, 41, 46)"
          href="https://github.com/robinholzi"
        />
        <CtaIconButton
          iconPath="/ico/cv.svg"
          alt="Curriculum Vitae"
          bgColor="rgb(237, 128, 61)"
          href="https://cv.robinh.me"
        />
      </div>
    </HeadfulCard>
  )
}

const Footer = () => {
  return (
    <span className="inline-block justify-center">
      Copyright © {new Date().getFullYear()}{' '}
      <Link href="https://www.linkedin.com/in/robin-holzinger/" className="text-white">
        Robin Holzinger
      </Link>{' '}
      |{' '}
      <Link href="/imprint" className="text-white">
        Imprint
      </Link>
    </span>
  )
}

export default function MainPage() {
  return (
    <div>
      <div className="relative text-center">
        <div className="stack">
          <HeaderCard />
        </div>
      </div>
      <div className="relative w-full text-center pb-8 text-sm xs:text-base">
        <Footer />
      </div>
    </div>
  )
}

// TODO: responsive
