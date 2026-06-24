# Enterprise React Table Virtualizer

A highly performant, enterprise-grade data grid for React applications. `enterprise-react-table-virtualizer` handles 100k+ rows with zero lag using advanced windowing and virtualization techniques.

## Features

- **Blazing Fast**: Renders only the visible rows to the DOM.
- **Dynamic Row Heights**: Seamlessly measures and adjusts row heights on the fly.
- **Zero Dependencies**: Lightweight and isolated (only requires React peer dependency).
- **TypeScript Support**: First-class types for robust enterprise applications.

## Installation

```bash
npm install enterprise-react-table-virtualizer
# or
yarn add enterprise-react-table-virtualizer
```

## Basic Usage

```tsx
import { VirtualTable } from 'enterprise-react-table-virtualizer';

const data = Array.from({ length: 100000 }).map((_, i) => ({ id: i, text: `Row ${i}` }));

function App() {
  return (
    <VirtualTable 
      data={data}
      rowHeight={40}
      height={600}
      renderRow={(row) => <div>{row.text}</div>}
    />
  );
}
```

## License

MIT License
