import Layout from '../components/Layout';
import ngekas from '../../public/img/portfolio/mobile-ngekas.png'
import ngekas2 from '../../public/img/portfolio/mobile-ngekas-2.jpg'
import ngekas3 from '../../public/img/portfolio/mobile-ngekas-3.jpg'
import webdonasi from '../../public/img/portfolio/web-donasi.jpg'
import webdonasi1 from '../../public/img/portfolio/web-donasi-1.jpg'
import webdonasi2 from '../../public/img/portfolio/web-donasi-2.jpg'
import webdonasi3 from '../../public/img/portfolio/web-donasi-3.jpg'
import rembesin from '../../public/img/portfolio/web-rembesin-1.jpg'
import rembesin2 from '../../public/img/portfolio/web-rembesin-2.jpg'
import rembesin3 from '../../public/img/portfolio/web-rembesin-3.jpg'
import nrlaundry from '../../public/img/portfolio/web-laundry-1.jpg'
import nrlaundry1 from '../../public/img/portfolio/web-laundry.jpg'
import nrlaundry2 from '../../public/img/portfolio/web-laundry-2.jpg'
import carevaluation from '../../public/img/portfolio/web-evaluasimobil-c45.jpg'
import carevaluation1 from '../../public/img/portfolio/web-evaluasimobil-c45-1.jpg'
import carevaluation2 from '../../public/img/portfolio/web-evaluasimobil-c45-2.jpg'
import carevaluation3 from '../../public/img/portfolio/web-evaluasimobil-c45-3.jpg'
import carevaluation4 from '../../public/img/portfolio/web-evaluasimobil-c45-4.jpg'
import koperasiweb from '../../public/img/portfolio/web-koperasi.jpg'
import koperasiweb1 from '../../public/img/portfolio/web-koperasi-1.jpg'
import koperasiweb2 from '../../public/img/portfolio/web-koperasi-2.jpg'
import koperasiweb3 from '../../public/img/portfolio/web-koperasi-3.jpg'
import koperasiweb4 from '../../public/img/portfolio/web-koperasi-4.jpg'
import koperasiweb5 from '../../public/img/portfolio/web-koperasi-5.jpg'
import koperasidesktop from '../../public/img/portfolio/desktop-koperasi.png'
import koperasidesktop1 from '../../public/img/portfolio/desktop-koperasi-1.png'
import koperasidesktop2 from '../../public/img/portfolio/desktop-koperasi-2.png'
import koperasidesktop3 from '../../public/img/portfolio/desktop-koperasi-3.png'
import koperasidesktop4 from '../../public/img/portfolio/desktop-koperasi-4.png'
import otomodif from '../../public/img/portfolio/web-otomodif.png'
import otomodif1 from '../../public/img/portfolio/web-otomodif-1.png'
import otomodif2 from '../../public/img/portfolio/web-otomodif-2.png'
import otomodif3 from '../../public/img/portfolio/web-otomodif-3.png'
import otomodif4 from '../../public/img/portfolio/web-otomodif-4.png'
import otomodif5 from '../../public/img/portfolio/web-otomodif-5.png'
import amor from '../../public/img/portfolio/web-amor.png'
import amor1 from '../../public/img/portfolio/web-amor-1.png'
import amor2 from '../../public/img/portfolio/web-amor-2.png'
import amor3 from '../../public/img/portfolio/web-amor-3.png'
import amor4 from '../../public/img/portfolio/web-amor-4.png'
import amor5 from '../../public/img/portfolio/web-amor-5.png'
import amor6 from '../../public/img/portfolio/web-amor-6.png'
import amor7 from '../../public/img/portfolio/web-amor-7.png'
import amor8 from '../../public/img/portfolio/web-amor-8.png'
import amor9 from '../../public/img/portfolio/web-amor-9.png'
import amor10 from '../../public/img/portfolio/web-amor-10.png'
import amor11 from '../../public/img/portfolio/web-amor-11.png'
import amor12 from '../../public/img/portfolio/web-amor-12.png'
import archery from '../../public/img/portfolio/web-memanah.png'
import archery1 from '../../public/img/portfolio/web-memanah-1.png'
import archery2 from '../../public/img/portfolio/web-memanah-2.png'
import archery3 from '../../public/img/portfolio/web-memanah-3.png'
import archery4 from '../../public/img/portfolio/web-memanah-4.png'
import Image from 'next/image';

export default function Portfolio() {
  const cards = [
    {
      name: 'Ngekas App',
      src: ngekas,
      platform: 'Android',
      techs: ['Java', 'SQLite', 'Figma'],
      height: 200,
    },
    {
      name: 'Donation',
      src: webdonasi,
      platform: 'Web',
      techs: [
        'PHP',
        'Laravel',
        'Jquery',
        'Bootstrap',
        'MySQL',
      ],
    },
    {
      name: 'Rembesin',
      src: rembesin,
      platform: 'Web',
      techs: [
        'Codeigniter 3',
        'Jquery',
        'Bootstrap',
        'MySQL',
      ],
    },
    {
      name: 'Laundry Management',
      src: nrlaundry,
      platform: 'Web',
      techs: [
        'Laravel',
        'Jquery',
        'Bootstrap',
        'MySQL',
      ],
    },
    {
      name: 'Car Evaluation (ML)',
      src: carevaluation,
      platform: 'Web',
      techs: [
        'PHP',
        'Jquery',
        'Bootstrap',
        'MySQL',
      ],
    },
    {
      name: 'Koperasi',
      src: koperasiweb,
      platform: 'Web',
      techs: [
        'PHP',
        'Jquery',
        'Bootstrap',
        'MySQL',
      ],
    },
    {
      name: 'Koperasi',
      src: koperasidesktop,
      platform: 'Desktop',
      techs: [
        'Java',
        'Netbeans',
      ],
    },
    {
      name: 'Otomodif',
      src: otomodif,
      platform: 'Web',
      techs: [
        'PHP',
        'Jquery',
        'Bootstrap',
        'MySQL',
      ],
    },
    {
      name: 'Management Organization',
      src: amor,
      platform: 'Web',
      techs: [
        'Laravel',
        'Jquery',
        'Bootstrap',
        'MySQL',
      ],
    },
    {
      name: 'Archery (ML)',
      src: archery,
      platform: 'Web',
      techs: [
        'PHP',
        'Jquery',
        'Bootstrap',
        'MySQL',
      ],
    },
  ];

  const cardModals = [
    {
      slide: [
        { src: ngekas2 },
        { src: ngekas2 },
      ]
    },
    {
      slide: [
        { src: webdonasi1 },
        { src: webdonasi2 },
        { src: webdonasi3 },
      ]
    },
    {
      slide: [
        { src: rembesin2 },
        { src: rembesin3 },
      ]
    },
    {
      slide: [
        { src: nrlaundry1 },
        { src: nrlaundry2 },
      ]
    },
    {
      slide: [
        { src: carevaluation1 },
        { src: carevaluation2 },
        { src: carevaluation3 },
        { src: carevaluation4 },
      ]
    },
    {
      slide: [
        { src: koperasiweb1 },
        { src: koperasiweb2 },
        { src: koperasiweb3 },
        { src: koperasiweb4 },
        { src: koperasiweb5 },
      ]
    },
    {
      slide: [
        { src: koperasidesktop1 },
        { src: koperasidesktop2 },
        { src: koperasidesktop3 },
        { src: koperasidesktop4 },
      ]
    },
    {
      slide: [
        { src: otomodif1 },
        { src: otomodif2 },
        { src: otomodif3 },
        { src: otomodif4 },
        { src: otomodif5 },
      ]
    },
    {
      slide: [
        { src: amor1 },
        // { src: amor2 },
        { src: amor3 },
        { src: amor4 },
        { src: amor5 },
        { src: amor6 },
        { src: amor7 },
        { src: amor8 },
        { src: amor9 },
        { src: amor10 },
        // { src: amor11 },
        { src: amor12 },
      ]
    },
    {
      slide: [
        { src: archery1 },
        { src: archery2 },
        { src: archery3 },
        { src: archery4 },
      ]
    }
  ]

  return (
    <Layout title="Portfolio - Ismi Nururrizqi">
      <header className="">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>
        </div>
      </header>

      {cardModals.map((cardModal, index) => (
        <>
          <input type="checkbox" id={"my-modal-"+(index+1)} className="modal-toggle" />
          <label htmlFor={"my-modal-"+(index+1)} className="modal cursor-pointer">
            <label className="modal-box w-3/4 max-w-none max-h-none" for="">
              <div className="carousel">
                {cardModal.slide.map((slide, indexSlide) => (
                  <div id={"slide"+(index+1)+(indexSlide+1)} key={indexSlide+1} className="carousel-item w-full">
                    <Image
                        src={slide.src}
                        alt={cards[index].name}
                      />
                  </div> 
                ))}
              </div>
              <div className="flex justify-center w-full py-2 gap-2">
                {cardModal.slide.map((slide, indexSlide) => (
                  <>
                    <a href={"#slide"+(index+1)+(indexSlide+1)} className="btn btn-xs">{(indexSlide+1)}</a>
                  </>
                ))}
              </div>
            </label>
          </label>
        </>
      ))}

      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {cards.map((card, index) => (
              <div className="card bg-base-100 shadow-xl" key={(index+1)}>
                <figure>
                  <Image
                    height={card?.height}
                    src={card.src}
                    alt={card.name}
                  />
                </figure>
                <div className="card-body bg-neutral">
                  <label className="card-title cursor-pointer" for={"my-modal-"+(index+1)}>
                    {card.name}
                    <div className="badge badge-secondary">{card.platform}</div>
                  </label>
                  <div className="card-actions justify-end">
                    {card.techs.map((element) => (
                      <div className="badge badge-outline badge-sm" key={element}>{element}</div> 
                    ))}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </Layout>
  )
}