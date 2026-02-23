export default function Styles() {
    const colorBlack = { color: "black" };
    const padding10px = { padding: "10px" };
    const bgBlue = { "backgroundColor": "lightblue" };
    const bgYellow = { "backgroundColor": "lightyellow" };
    return (
        <div id="wd-styles">
            <h2>Styles</h2>
            <div style={{
                "backgroundColor": "lightyellow",
                "color": "black", padding: "10px"
            }}>
                Yellow background</div>
            <div style={Object.assign({}, colorBlack, padding10px, bgBlue)}>
                Blue background</div>
            <div style={{ ...colorBlack, ...padding10px, ...bgYellow }}>
                Yellow background</div>
            <hr />
        </div>
    );
}
