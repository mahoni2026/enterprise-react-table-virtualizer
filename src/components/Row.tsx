import React from 'react';

export interface RowProps {
    height: number;
    children: React.ReactNode;
}

export const Row: React.FC<RowProps> = ({ height, children }) => {
    return (
        <div style={{ height, display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee' }}>
            {children}
        </div>
    );
};
