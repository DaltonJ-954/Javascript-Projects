export default function Description({ movieOverview }: DescriptionProps) {
  return (
    <>
      <label>Overview:</label>
      <p style={{ fontSize: "13px" }}>{movieOverview}</p>
    </>
  );
}

interface DescriptionProps {
  movieOverview: string;
}
