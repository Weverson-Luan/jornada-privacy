import type { CalloutTone } from '@content/types';

type CalloutProps = {
  tone: CalloutTone;
  title: string;
  text: string;
};

export function Callout({ tone, title, text }: CalloutProps) {
  return (
    <div className={`callout callout--${tone}`} role="note">
      <p className="callout__title">{title}</p>
      <p className="callout__text">{text}</p>
    </div>
  );
}
