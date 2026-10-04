import type { Company, PolicySection } from '@content/types';
import { ContentBlockView } from './ContentBlockView';
import { CompanyCard } from './CompanyCard';

type PolicySectionViewProps = {
  section: PolicySection;
  company: Company;
};

/**
 * Seções que, além do texto corrido, exibem os dados estruturados
 * da empresa controladora (ver `types.ts` -> `Company`).
 */
const SECTIONS_WITH_COMPANY_CARD = new Set(['quem-somos', 'contato']);

export function PolicySectionView({ section, company }: PolicySectionViewProps) {
  return (
    <section id={section.id} className="policy-section" aria-labelledby={`${section.id}-heading`}>
      <h2 id={`${section.id}-heading`} className="policy-section__heading">
        {section.title}
      </h2>
      <div className="policy-section__content">
        {section.blocks.map((block, index) => (
          <ContentBlockView block={block} key={`${section.id}-${index}`} />
        ))}
        {SECTIONS_WITH_COMPANY_CARD.has(section.id) && <CompanyCard company={company} />}
      </div>
    </section>
  );
}
