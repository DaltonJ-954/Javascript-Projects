export default function Description({ movieOverview }: DescriptionProps) {
  return (
    <>
      <p style={{ fontSize: "13px", margin: "0" }}>{movieOverview}</p>
    </>
  );
}

interface DescriptionProps {
  movieOverview: string;
}
