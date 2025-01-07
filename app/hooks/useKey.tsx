import { useState } from 'react';

function useKey(initialValue: number | null): [number | null, (key: number | null) => void] {
    const [key, setKey] = useState(initialValue);

    function handleKey(key: number | null) {
        setKey((previousKey) => (previousKey === key ? null : key));
    };

    return [key, handleKey];
}

export default useKey;
