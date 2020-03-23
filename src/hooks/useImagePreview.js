// @flow

import {useState, useEffect} from 'react';

export const useImagePreview = () => {
    const [file, setFile]: [?File, (?File | ?File => ?File) => any] = useState(null);
    const [imageUrl, setImageUrl]: [?string, (?string | ?string => ?string) => any] = useState(null);

    useEffect(() => {
        if (file) {
            const createdUrl = URL.createObjectURL(file);
            setImageUrl(createdUrl);
            return () => URL.revokeObjectURL(createdUrl);
        }

        imageUrl && setImageUrl(null);
    }, [file]);

    return {
        imageUrl,
        file,
        setFile,
    };
};
