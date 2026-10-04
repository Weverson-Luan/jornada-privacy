import type { ContentBlock } from '@content/types';
import { Callout } from './Callout';

type ContentBlockViewProps = {
  block: ContentBlock;
};

export function ContentBlockView({ block }: ContentBlockViewProps) {
  switch (block.type) {
    case 'paragraph':
      return <p className="block-paragraph">{block.text}</p>;

    case 'list':
      return (
        <ul className="block-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );

    case 'table':
      return (
        <div className="block-table-wrapper">
          <table className="block-table">
            <thead>
              <tr>
                {block.columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join('|')}>
                  {row.map((cell, cellIndex) => (
                    <td key={`${row[0]}-${cellIndex}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'callout':
      return <Callout tone={block.tone} title={block.title} text={block.text} />;

    default:
      return null;
  }
}
