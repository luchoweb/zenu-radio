import Header from '../components/Header'
import Footer from '../components/Footer'

import styles from '../styles/pages/Layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.layout}>
        {children}
      </main>
      <Footer />
    </>
  )
}
