import styles from './Container.module.css'
import clsx from 'clsx'
import { useRef } from 'react'

function Container() {

    const navRef = useRef(null)
    console.log(navRef.current)
    

    return (
        <div className={clsx(styles.container, 'grid', 'wide')}>
            <div ref={navRef}  className={clsx(styles.containerNav)} id={clsx(styles.scrollNav)}>
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
                    <span className={clsx(styles.headingProposed)}>
                        Tài khoản được đề xuất
                    </span>
                    <ul className={clsx(styles.navProposedList)}>
                        <li className={clsx(styles.navProposedItem)}>
                            <a href=" " className={clsx(styles.navProposedLink)}>
                                <img className={clsx(styles.imgProposed)} src="images/beatvn.jpeg" alt="ảnh đại diện"/>
                                <div className={clsx(styles.inforProposed)}>
                                    <span className={clsx(styles.nameItem)}>
                                        Beatvn
                                        <i class="fas fa-check-circle"></i>
                                    </span>
                                    <p className={clsx(styles.desItem)}>Beatvn</p>
                                </div>
                            </a>
                        </li>
                        <li className={clsx(styles.navProposedItem)}>
                            <a href=" " className={clsx(styles.navProposedLink)}>
                                <img className={clsx(styles.imgProposed)} src="images/kenh14.jpeg" alt="ảnh đại diện"/>
                                <div className={clsx(styles.inforProposed)}>
                                    <span className={clsx(styles.nameItem)}>
                                        Kênh14Offical
                                        <i class="fas fa-check-circle"></i>
                                    </span>
                                    <p className={clsx(styles.desItem)}>Kênh14 tin tức</p>
                                </div>
                            </a>
                        </li>
                        <li className={clsx(styles.navProposedItem)}>
                            <a href=" " className={clsx(styles.navProposedLink)}>
                                <img className={clsx(styles.imgProposed)} src="images/kenh14.jpeg" alt="ảnh đại diện"/>
                                <div className={clsx(styles.inforProposed)}>
                                    <span className={clsx(styles.nameItem)}>
                                        Kênh14Offical
                                        <i class="fas fa-check-circle"></i>
                                    </span>
                                    <p className={clsx(styles.desItem)}>Kênh14 tin tức</p>
                                </div>
                            </a>
                        </li>
                        <li className={clsx(styles.navProposedItem)}>
                            <a href=" " className={clsx(styles.navProposedLink)}>
                                <img className={clsx(styles.imgProposed)} src="images/kenh14.jpeg" alt="ảnh đại diện"/>
                                <div className={clsx(styles.inforProposed)}>
                                    <span className={clsx(styles.nameItem)}>
                                        Kênh14Offical
                                        <i class="fas fa-check-circle"></i>
                                    </span>
                                    <p className={clsx(styles.desItem)}>Kênh14 tin tức</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <span className={clsx(styles.viewAllProposed)}>
                        Xem tất cả
                    </span>
                </div>
                <div className={clsx(styles.navFollow)}>
                    <span className={clsx(styles.headingFollow)}>
                        Các tài khoản đang follow
                    </span>
                    <ul className={clsx(styles.navFollowList)}>
                        <li className={clsx(styles.navFollowItem)}>
                            <a href=" " className={clsx(styles.navFollowLink)}>
                                <img className={clsx(styles.imgFollow)} src="images/van.jpeg" alt="ảnh đại diện"/>
                                <div className={clsx(styles.inforFollow)}>
                                    <span className={clsx(styles.nameItem)}>
                                        cl911333
                                        <i></i>
                                    </span>
                                    <p className={clsx(styles.desItem)}>Một đám mây</p>
                                </div>
                            </a>
                        </li>
                        <li className={clsx(styles.navFollowItem)}>
                            <a href=" " className={clsx(styles.navFollowLink)}>
                                <img className={clsx(styles.imgFollow)} src="images/van.jpeg" alt="ảnh đại diện"/>
                                <div className={clsx(styles.inforFollow)}>
                                    <span className={clsx(styles.nameItem)}>
                                        cl911333
                                        <i></i>
                                    </span>
                                    <p className={clsx(styles.desItem)}>Một đám mây</p>
                                </div>
                            </a>
                        </li>
                        <li className={clsx(styles.navFollowItem)}>
                            <a href=" " className={clsx(styles.navFollowLink)}>
                                <img className={clsx(styles.imgFollow)} src="images/van.jpeg" alt="ảnh đại diện"/>
                                <div className={clsx(styles.inforFollow)}>
                                    <span className={clsx(styles.nameItem)}>
                                        cl911333
                                        <i></i>
                                    </span>
                                    <p className={clsx(styles.desItem)}>Một đám mây</p>
                                </div>
                            </a>
                        </li>
                        <li className={clsx(styles.navFollowItem)}>
                            <a href=" " className={clsx(styles.navFollowLink)}>
                                <img className={clsx(styles.imgFollow)} src="images/van.jpeg" alt="ảnh đại diện"/>
                                <div className={clsx(styles.inforFollow)}>
                                    <span className={clsx(styles.nameItem)}>
                                        cl911333
                                        <i></i>
                                    </span>
                                    <p className={clsx(styles.desItem)}>Một đám mây</p>
                                </div>
                            </a>
                        </li>
                        <li className={clsx(styles.navFollowItem)}>
                            <a href=" " className={clsx(styles.navFollowLink)}>
                                <img className={clsx(styles.imgFollow)} src="images/van.jpeg" alt="ảnh đại diện"/>
                                <div className={clsx(styles.inforFollow)}>
                                    <span className={clsx(styles.nameItem)}>
                                        cl911333
                                        <i></i>
                                    </span>
                                    <p className={clsx(styles.desItem)}>Một đám mây</p>
                                </div>
                            </a>
                        </li>
                        <li className={clsx(styles.navFollowItem)}>
                            <a href=" " className={clsx(styles.navFollowLink)}>
                                <img className={clsx(styles.imgFollow)} src="images/van.jpeg" alt="ảnh đại diện"/>
                                <div className={clsx(styles.inforFollow)}>
                                    <span className={clsx(styles.nameItem)}>
                                        cl911333
                                        <i></i>
                                    </span>
                                    <p className={clsx(styles.desItem)}>Một đám mây</p>
                                </div>
                            </a>
                        </li>
                        <li className={clsx(styles.navFollowItem)}>
                            <a href=" " className={clsx(styles.navFollowLink)}>
                                <img className={clsx(styles.imgFollow)} src="images/van.jpeg" alt="ảnh đại diện"/>
                                <div className={clsx(styles.inforFollow)}>
                                    <span className={clsx(styles.nameItem)}>
                                        cl911333
                                        <i></i>
                                    </span>
                                    <p className={clsx(styles.desItem)}>Một đám mây</p>
                                </div>
                            </a>
                        </li>
                        <li className={clsx(styles.navFollowItem)}>
                            <a href=" " className={clsx(styles.navFollowLink)}>
                                <img className={clsx(styles.imgFollow)} src="images/van.jpeg" alt="ảnh đại diện"/>
                                <div className={clsx(styles.inforFollow)}>
                                    <span className={clsx(styles.nameItem)}>
                                        cl911333
                                        <i></i>
                                    </span>
                                    <p className={clsx(styles.desItem)}>Một đám mây</p>
                                </div>
                            </a>
                        </li>
                        <li className={clsx(styles.navFollowItem)}>
                            <a href=" " className={clsx(styles.navFollowLink)}>
                                <img className={clsx(styles.imgFollow)} src="images/van.jpeg" alt="ảnh đại diện"/>
                                <div className={clsx(styles.inforFollow)}>
                                    <span className={clsx(styles.nameItem)}>
                                        cl911333
                                        <i></i>
                                    </span>
                                    <p className={clsx(styles.desItem)}>Một đám mây</p>
                                </div>
                            </a>
                        </li>
                        <li className={clsx(styles.navFollowItem)}>
                            <a href=" " className={clsx(styles.navFollowLink)}>
                                <img className={clsx(styles.imgFollow)} src="images/van.jpeg" alt="ảnh đại diện"/>
                                <div className={clsx(styles.inforFollow)}>
                                    <span className={clsx(styles.nameItem)}>
                                        cl911333
                                        <i></i>
                                    </span>
                                    <p className={clsx(styles.desItem)}>Một đám mây</p>
                                </div>
                            </a>
                        </li>
                        <li className={clsx(styles.navFollowItem)}>
                            <a href=" " className={clsx(styles.navFollowLink)}>
                                <img className={clsx(styles.imgFollow)} src="images/van.jpeg" alt="ảnh đại diện"/>
                                <div className={clsx(styles.inforFollow)}>
                                    <span className={clsx(styles.nameItem)}>
                                        cl911333
                                        <i></i>
                                    </span>
                                    <p className={clsx(styles.desItem)}>Một đám mây</p>
                                </div>
                            </a>
                        </li>
                        <li className={clsx(styles.navFollowItem)}>
                            <a href=" " className={clsx(styles.navFollowLink)}>
                                <img className={clsx(styles.imgFollow)} src="images/van.jpeg" alt="ảnh đại diện"/>
                                <div className={clsx(styles.inforFollow)}>
                                    <span className={clsx(styles.nameItem)}>
                                        cl911333
                                        <i></i>
                                    </span>
                                    <p className={clsx(styles.desItem)}>Một đám mây</p>
                                </div>
                            </a>
                        </li>
                        <li className={clsx(styles.navFollowItem)}>
                            <a href=" " className={clsx(styles.navFollowLink)}>
                                <img className={clsx(styles.imgFollow)} src="images/van.jpeg" alt="ảnh đại diện"/>
                                <div className={clsx(styles.inforFollow)}>
                                    <span className={clsx(styles.nameItem)}>
                                        cl911333
                                        <i></i>
                                    </span>
                                    <p className={clsx(styles.desItem)}>Một đám mây</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <span className={clsx(styles.viewAllFollow)}>
                        Xem thêm
                    </span>
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