import useWindowWidth from "../../Hooks/useWindowWidth";

export default function LayoutComponentOne() {
  const onSmallScreen = useWindowWidth();

  return (
    <div>
      <h1>You are Browsing on {onSmallScreen ? "Small" : "large"} Size!</h1>
    </div>
  );
}
