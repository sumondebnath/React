import useWindowWidthParams from "../../Hooks/useWindowWidthParams";

export default function LayoutComponentTwo() {
  const onSmallScreen = useWindowWidthParams(600);

  return (
    <div className={onSmallScreen ? "Small" : "large"}>
      <h1>This is an another component!</h1>
    </div>
  );
}
