export default function PassingFunctions({
    theFunction,
}: {
    theFunction: () => void;
}) {
    return (
        <div>
            <h2>Passing Functions</h2>
            <button
                onClick={theFunction}
                className="btn btn-primary"
                id="wd-pass-function-click"
            >
                Invoke the Function
            </button>
            <hr />
        </div>
    );
}
