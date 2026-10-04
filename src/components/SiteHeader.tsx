type SiteHeaderProps = {
  appName: string;
  appVersion: string;
  policyVersion: string;
  updatedAt: string;
};

export function SiteHeader({ appName, appVersion, policyVersion, updatedAt }: SiteHeaderProps) {
  const logoSrc = `${import.meta.env.BASE_URL}logo-jornada.png`;

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__brand">
          <img src={logoSrc} alt="" className="site-header__logo" width={48} height={52} />
          <div>
            <p className="site-header__eyebrow">{appName}</p>
            <h1 className="site-header__title">Política de Privacidade</h1>
          </div>
        </div>
        <dl className="site-header__meta">
          <div>
            <dt>Versão do app</dt>
            <dd>{appVersion}</dd>
          </div>
          <div>
            <dt>Versão desta política</dt>
            <dd>{policyVersion}</dd>
          </div>
          <div>
            <dt>Última atualização</dt>
            <dd>{updatedAt}</dd>
          </div>
        </dl>
      </div>
    </header>
  );
}
