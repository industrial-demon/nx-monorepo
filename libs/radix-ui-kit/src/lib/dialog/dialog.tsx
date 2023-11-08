import styles from './dialog.module.css'

/* eslint-disable-next-line */
export interface DialogProps {}

export function Dialog(props: DialogProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Dialog!</h1>
    </div>
  )
}

export default Dialog
