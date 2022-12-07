import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

interface Props {
    meme: Meme;
}

const MemeListItem = (props: Props): JSX.Element => {
    const {
        meme: {captions, id, name, url}
    } = props;

    return (
        <li className={styles.listItem}>
            <Link
                href={{
                    pathname: `memes/${id}`,
                    query: { captions: captions, imgUrl: url, name: name },
                }}
            >
                {name}
            </Link>
        </li>
    );
}

export default MemeListItem;
