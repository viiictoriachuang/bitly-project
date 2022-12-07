import React from 'react';
import { useRouter} from 'next/router';

const MemeBlock = () => {
    const router = useRouter();
    const { imgUrl, name } = router.query;
    return (
        <div>
            <h1>{name}</h1>
            <img src={imgUrl?.toString()} />
        </div>
    );
}

export default MemeBlock;
