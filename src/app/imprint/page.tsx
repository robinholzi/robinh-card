import Image from 'next/image'
import HeadfulCard from '@/components/HeadfulCard/HeadfulCard'
import CtaButton from '@/components/CtaButton/CtaButton'

export default function MainPage() {
  return (
    <div>
      <div className="relative text-center">
        <div className="stack">
          <HeadfulCard profileImagePath="/img/profile_picture_colored.jpg" bgImagePath="/img/background.jpeg">
            <h2 className="text-2xl xs:text-3xl font-semibold">Imprint</h2>
            <div className="my-4 mt-8 mb-4">
              <h2 className="text-xl xs:text-2xl">Information according to &sect; 5 TMG</h2>
              <br />
              <strong>
                Robin Holzinger
                <br />
                Willi-Graf-Str. 17
                <br />
                80805 Munich
              </strong>
              <br />
              <br />

              <h2 className="text-xl xs:text-2xl">Contact</h2>
              <br />
              <div style={{ width: 200, margin: '0 auto 0 auto' }}>
                <Image src={'/img/contact_details.png'} width={512} height={256} alt={'contact details'} />
              </div>
              <br />
              <strong>
                Source: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
              </strong>
            </div>
            <div className="mt-8 mb-4">
              <CtaButton text="go back" href="/" />
            </div>
          </HeadfulCard>
        </div>
      </div>
    </div>
  )
}

// TODO: responsive
