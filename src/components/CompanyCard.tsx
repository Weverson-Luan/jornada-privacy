import type { Company } from '@content/types';

type CompanyCardProps = {
  company: Company;
};

const FIELDS: Array<{ key: keyof Company; label: string }> = [
  { key: 'legalName', label: 'Razão social' },
  { key: 'cnpj', label: 'CNPJ' },
  { key: 'address', label: 'Endereço' },
  { key: 'dpoEmail', label: 'Encarregado de Dados (DPO) — contato' },
];

const PENDING_VALUES = new Set(['a confirmar com o departamento jurídico', 'a definir']);

function isPending(value: string) {
  return PENDING_VALUES.has(value.trim().toLowerCase());
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <dl className="company-card">
      {FIELDS.map(({ key, label }) => {
        const value = company[key];
        const pending = isPending(value);

        return (
          <div className="company-card__row" key={key}>
            <dt>{label}</dt>
            <dd>
              <span className={pending ? 'company-card__value company-card__value--pending' : 'company-card__value'}>
                {value}
              </span>
              {pending && <span className="company-card__badge">Pendente</span>}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
