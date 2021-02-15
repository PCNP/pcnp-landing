import React from 'react'

import styles from './WhyWe.module.sass'

import diplom from './../../../common/images/index/whyWe/diplom.png'
import date from './../../../common/images/index/whyWe/date.png'
import apple2 from './../../../common/images/index/whyWe/apple2.png'


export const WhyWe: React.FC = () => {
    return (
        <div className={styles.main}>
            <p className={styles.backgroundText}>
                choosing us
            </p>
            <div className={styles.content}>
                <div className={styles.leftBlock}>
                    <h2>ПОЧЕМУ МЫ?</h2>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <div>
                                <img src={diplom}/>
                            </div>
                            <h3>Высокая <br/>
                                квалификация</h3>
                            <p>
                                все наши работники<br/>
                                обладают высокой <br/>
                                квалификацией и большим <br/>
                                набором скиллов
                            </p>
                        </div>
                        <div className={styles.item}>
                            <div>
                                <img src={date}/>
                            </div>
                            <h3>Cоблюдение<br/>
                                дедлайнов
                            </h3>
                            <p>
                                процесс работы <br/>
                                строится на четкой <br/>
                                организации и умелом<br/>
                                распределении задач
                            </p>
                        </div>
                        <div className={styles.item}>
                            <div>
                                <img src={apple2}/>
                            </div>
                            <h3>Внимание к<br/>
                                деталям
                            </h3>
                            <p>
                                мы учитываем все <br/>
                                ваши пожелания и <br/>
                                следим за качеством<br/>
                                на всех уровнях
                            </p>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
