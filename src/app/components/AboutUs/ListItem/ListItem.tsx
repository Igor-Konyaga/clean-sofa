'use client'
import styles from './ListItem.module.scss'
import Image, {StaticImageData} from "next/image";
import {useState} from "react";
import {ArrowIcon} from "@/app/components/CustomIcons/ArrowIcon/ArrowIcon";

type Props = {
    label:string;
    src:    StaticImageData;
    info:string;
}

export const ListItem = ({label, src, info}: Props) => {
    const [visibleOverlay, setVisibleOverlay] = useState(false);

    return (
        <li onClick={() => setVisibleOverlay(!visibleOverlay)} key={label} className={styles.aboutListItem}>
            <div className={styles.wrapperImg}>
                <Image className={styles.img} src={src} width={295} height={295} alt={label}/>
                <p className={visibleOverlay ? `${styles.itemOverlay} ${styles.visibleOverlay}` : styles.itemOverlay}> {info}</p>
            </div>

            <h3 className={styles.itemTitle}>{label}
                <ArrowIcon className={visibleOverlay ? `${styles.icon} ${styles.active}` : styles.icon} />
            </h3>
        </li>
    )
}