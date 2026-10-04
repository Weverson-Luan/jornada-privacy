export type CalloutTone = 'info' | 'warning';

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; columns: string[]; rows: string[][] }
  | { type: 'callout'; tone: CalloutTone; title: string; text: string };

export type PolicySection = {
  id: string;
  title: string;
  blocks: ContentBlock[];
};

export type SummaryCard = {
  title: string;
  text: string;
};

export type Company = {
  legalName: string;
  cnpj: string;
  address: string;
  dpoEmail: string;
};

export type PrivacyPolicy = {
  appName: string;
  appVersion: string;
  policyVersion: string;
  updatedAt: string;
  company: Company;
  summary: SummaryCard[];
  sections: PolicySection[];
};
