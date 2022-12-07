import React from 'react';
import { useRouter} from 'next/router';
import styles from '../../styles/Home.module.css'

const MemeBlock = () => {
    const router = useRouter();
    const { captions, imgUrl, name } = router.query;
    return (
        <div className={styles.alignCenter}>
            <h1 className={styles.title}>{name}</h1>
            <div className={`${styles.dFlex} ${styles.flexCol} ${styles.mdFlexRow} ${styles.alignCenter}`}>
                <img className={styles.meme} src={imgUrl?.toString()} />
                <p className={styles.label}>{captions} captions</p>
            </div>
        </div>
    );
}

export default MemeBlock;
