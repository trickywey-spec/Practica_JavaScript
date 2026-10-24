// Esta práctica solo exige botones visuales, sin eventos de clic.
type Props = {
  texto: string;
  variante?: "principal" | "secundaria";
};

export default function Button({ texto, variante = "principal" }: Props) {
  return (
    <button className={`action-button action-button--${variante}`} type="button">
      {texto}
    </button>
  );
}
