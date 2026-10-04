import { privacyPolicy } from '@content/privacy-policy';
import { SiteHeader } from '@components/SiteHeader';
import { SiteFooter } from '@components/SiteFooter';
import { SummaryCards } from '@components/SummaryCards';
import { TableOfContents } from '@components/TableOfContents';
import { PolicySectionView } from '@components/PolicySectionView';
import { useActiveSection } from '@utils/use-active-section';

const SECTION_IDS = privacyPolicy.sections.map((section) => section.id);

function App() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <div id="topo" />
      <SiteHeader
        appName={privacyPolicy.appName}
        appVersion={privacyPolicy.appVersion}
        policyVersion={privacyPolicy.policyVersion}
        updatedAt={privacyPolicy.updatedAt}
      />

      <main className="page" id="conteudo">
        <SummaryCards cards={privacyPolicy.summary} />

        <div className="page__layout">
          <aside className="page__sidebar">
            <TableOfContents sections={privacyPolicy.sections} activeId={activeId} />
          </aside>

          <div className="page__content">
            {privacyPolicy.sections.map((section) => (
              <PolicySectionView section={section} company={privacyPolicy.company} key={section.id} />
            ))}
          </div>
        </div>
      </main>

      <SiteFooter legalName={privacyPolicy.company.legalName} />
    </>
  );
}

export default App;
