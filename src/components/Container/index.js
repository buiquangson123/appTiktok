import styles from './Container.module.css'
import clsx from 'clsx'

function Container() {
    return (
        <div className={clsx(styles.container, 'grid', 'wide')}>
            <div className={clsx(styles.containerNav)}>
                <div className={clsx(styles.navUser)}>
                    <a href=" " className={clsx(styles.navUserItem)}>
                        <i class="fas fa-home"></i>
                        <p>Dành cho bạn</p>
                    </a>
                    <a href=" " className={clsx(styles.navUserItem)}>
                        <i class="fas fa-user-friends"></i>
                        <p>Đang follow</p>
                    </a>
                    <a href=" " className={clsx(styles.navUserItem)}>
                        <i class="fas fa-video"></i>
                        <p>Live</p>
                    </a>
                </div>
                <div className={clsx(styles.navProposed)}>

                </div>
                <div className={clsx(styles.navFollow)}>

                </div>
                <div className={clsx(styles.navDiscover)}>

                </div>
                <div className={clsx(styles.navPolicy)}>

                </div>
            </div>

            <div className={clsx(styles.containerBody)}>

            </div>
        </div>
    )
}

export default Container