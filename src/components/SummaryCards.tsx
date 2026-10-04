import type { CSSProperties } from 'react';
import type { SummaryCard } from '@content/types';

type SummaryCardsProps = {
  cards: SummaryCard[];
};

export function SummaryCards({ cards }: SummaryCardsProps) {
  return (
    <ul className="summary-cards" aria-label="Resumo rápido da política de privacidade">
      {cards.map((card, index) => (
        <li className="summary-card" key={card.title} style={{ '--accent-index': index } as CSSProperties}>
          <p className="summary-card__title">{card.title}</p>
          <p className="summary-card__text">{card.text}</p>
        </li>
      ))}
    </ul>
  );
}
