export type Genre = "ekologi" | "feminisme" | "soshum" | "teologi_spiritual";

export const genres: { value: Genre; label: string; className: string }[] = [
  { value: "ekologi", label: "Ekologi", className: "bg-ekologi/12 text-ekologi ring-ekologi/30" },
  {
    value: "feminisme",
    label: "Feminisme",
    className: "bg-feminisme/12 text-feminisme ring-feminisme/30",
  },
  {
    value: "soshum",
    label: "Soshum & Politik",
    className: "bg-soshum/12 text-soshum ring-soshum/30",
  },
  {
    value: "teologi_spiritual",
    label: "Teologi & Spiritual",
    className: "bg-teologi/12 text-teologi ring-teologi/30",
  },
];

export function genreMeta(value: Genre) {
  return genres.find((g) => g.value === value) ?? genres[0]!;
}