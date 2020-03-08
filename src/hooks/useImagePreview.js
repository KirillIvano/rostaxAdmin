import {useState, useEffect} from 'react';

export const useImagePreview = () => {
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (file) {
            const createdUrl = URL.createObjectURL(file);
            setImageUrl(createdUrl);
            return () => URL.revokeObjectURL(createdUrl);
        }
    }, [file]);

    return {
        imageUrl,
        file,
        setFile,
    };
};
