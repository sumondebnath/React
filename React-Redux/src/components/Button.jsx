
export default function Button({ children, handler }) {
    // console.log(handler);

    return (
        <button onClick={handler}>{children}</button>
    );
}