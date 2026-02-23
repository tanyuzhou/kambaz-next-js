import Math, { add, subtract, multiply, divide } from "./Math";
export default function DestructingImports() {
    return (
        <div id="wd-destructing-imports">
            <h2>Destructing Imports</h2>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Math</th>
                        <th>Math.add(2, 3)</th>
                        <th>Math.subtract(5, 1)</th>
                        <th>Math.multiply(3, 4)</th>
                        <th>Math.divide(8, 2)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Imports</td>
                        <td>{add(2, 3)}</td>
                        <td>{subtract(5, 1)}</td>
                        <td>{multiply(3, 4)}</td>
                        <td>{divide(8, 2)}</td>
                    </tr>
                    <tr>
                        <td>Default Math</td>
                        <td>{Math.add(2, 3)}</td>
                        <td>{Math.subtract(5, 1)}</td>
                        <td>{Math.multiply(3, 4)}</td>
                        <td>{Math.divide(8, 2)}</td>
                    </tr>
                </tbody>
            </table>
            <hr />
        </div>
    );
}
