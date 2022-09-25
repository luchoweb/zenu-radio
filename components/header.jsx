import Image from 'next/image'
import Link from 'next/link'

import AudioPlayer from './AudioPlayer'

import styles from '../styles/components/Header.module.scss'

export default function Header() {
  const featuredCategories = [
    { name: 'Montería', link: '/categoria/monteria' },
    { name: 'Córdoba', link: '/categoria/cordoba' },
    { name: 'Cultura', link: '/categoria/cultura' },
    { name: 'País', link: '/categoria/apis' },
    { name: 'Deportes', link: '/categoria/deportes' },
    { name: 'Judicial', link: '/categoria/judicial' }
  ]

  return (
    <header className={`${styles.header}`}>
      <div className="container">
        <div className="row align-items-center pt-3 pb-3">
          <div className="col-3 col-md-4 col-radio">
            <AudioPlayer />
          </div>

          <div className="col-6 col-md-4 text-center lh-0 col-logo">
            <Link href="/">
              <a>
                <Image src="/images/white-logo.png" alt="Zenú Radio" width="120" height="101" />
              </a>
            </Link>
          </div>

          <div className="col-3 col-md-4 col-social"></div>          
        </div>
      </div>

      <nav className={`${styles.navbar} pt-3 pb-3`}>
        <div className="container">
          <ul className={`${styles.menu} list-unstyled m-0 p-0 d-flex gap-5 justify-content-evenly`}>
            { featuredCategories.map(category => (
              <li key={`cat-${category.name}`}>
                <Link href={ category.link }>
                  <a className='text-dark'>{ category.name }</a>
                </Link>
              </li>
            )) }
          </ul>
        </div>
      </nav>
    </header>
  )
}
