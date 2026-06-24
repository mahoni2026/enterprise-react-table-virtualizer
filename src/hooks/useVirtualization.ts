import { useState, useCallback } from 'react';

export function useVirtualization(totalCount: number, rowHeight: number, containerHeight: number) {
    const [scrollTop, setScrollTop] = useState(0);

    const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight));
    const visibleCount = Math.ceil(containerHeight / rowHeight);
    const endIndex = Math.min(totalCount, startIndex + visibleCount + 2); // 2 rows buffer

    const offsetY = startIndex * rowHeight;

    const onScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
        setScrollTop(e.currentTarget.scrollTop);
    }, []);

    return { startIndex, endIndex, offsetY, onScroll };
}
