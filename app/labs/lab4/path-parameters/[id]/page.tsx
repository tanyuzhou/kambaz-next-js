import React from 'react';

export default function PathParametersPage({
    params
}: {
    params: { id: string }
}) {
    return (
        <div id="wd-path-parameters-page">
            <h2>Path Parameters Passed</h2>
            <p>Parameter value: {params.id}</p>
        </div>
    );
}
