
import styles from './page.module.css'

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome next-app 👋
            </h1>
          </div>

          <div id="hero" className="rounded">

          </div>
        </div>
      </div>
    </div>
  )
}
