type SiteFooterProps = {
  legalName: string;
};

export function SiteFooter({ legalName }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>
        © {year} {legalName}. Todos os direitos reservados.
      </p>
      <a href="#topo" className="site-footer__back-to-top">
        Voltar ao topo
      </a>
    </footer>
  );
}
