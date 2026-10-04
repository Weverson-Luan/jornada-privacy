import type { PolicySection } from '@content/types';

type TableOfContentsProps = {
  sections: PolicySection[];
  activeId: string;
};

export function TableOfContents({ sections, activeId }: TableOfContentsProps) {
  return (
    <nav className="toc" aria-label="Sumário da política de privacidade">
      <p className="toc__title">Nesta página</p>
      <ol className="toc__list">
        {sections.map((section) => {
          const isActive = section.id === activeId;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={isActive ? 'toc__link toc__link--active' : 'toc__link'}
                aria-current={isActive ? 'true' : undefined}
              >
                {section.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
