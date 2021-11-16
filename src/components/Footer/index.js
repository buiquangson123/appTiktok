import clsx from 'clsx'
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={clsx(styles.footer, 'grid', 'wide')}>
            <h1>Web được thiết kế bởi Sơn Bùi</h1>
        </div>
    )
}

export default Footer