// Props permite recibir un título distinto desde cada página.
type Props = {
  titulo: string;
};

export default function Header({ titulo }: Props) {
  return (
    <header className="section-heading">
      <span className="section-heading__eyebrow">Nuestra comunidad</span>
      <h2>{titulo}</h2>
    </header>
  );
}
