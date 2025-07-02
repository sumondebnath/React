export default function HoverCounter({
  count,
  incrementCount,
  theme,
  switchTheme,
}) {
  // const { count, incrementCount, theme } = props;
  const style =
    theme == "dark" ? { backgroundColor: "#000000", color: "#ffffff" } : null;

  return (
    <div>
      <h1 onMouseOver={incrementCount} style={style}>
        Hovered {count} times
      </h1>
      <button type="button" onClick={switchTheme}>
        Change Theme
      </button>
    </div>
  );
}
