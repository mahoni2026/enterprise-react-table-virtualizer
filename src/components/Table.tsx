import React from 'react';
import { useVirtualization } from '../hooks/useVirtualization';
import { Row } from './Row';

export interface TableProps {
    data: any[];
    rowHeight: number;
    height: number;
    renderRow: (item: any) => React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ data, rowHeight, height, renderRow }) => {
    const { startIndex, endIndex, offsetY, onScroll } = useVirtualization(data.length, rowHeight, height);

    const visibleData = data.slice(startIndex, endIndex);

    return (
        <div style={{ height, overflowY: 'auto', position: 'relative' }} onScroll={onScroll}>
            <div style={{ height: data.length * rowHeight, position: 'relative' }}>
                <div style={{ transform: `translateY(${offsetY}px)` }}>
                    {visibleData.map((item, index) => (
                        <Row key={startIndex + index} height={rowHeight}>
                            {renderRow(item)}
                        </Row>
                    ))}
                </div>
            </div>
        </div>
    );
};
