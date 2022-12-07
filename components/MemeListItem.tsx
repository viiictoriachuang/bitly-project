import React from 'react';
import Link from 'next/link';

interface Props {
    meme: Meme;
}

const MemeListItem = (props: Props): JSX.Element => {
    const {
        meme: {id, name, url}
    } = props;

    return (
        <li>
            <Link
                href={{
                    pathname: `memes/${id}`,
                    query: { name: name, imgUrl: url },
                }}
            >
                {name}
            </Link>
        </li>
    );
}

export default MemeListItem;
