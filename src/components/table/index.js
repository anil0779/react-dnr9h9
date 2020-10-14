import React from 'react';

function Table({ data = [] }) {

    const headers = (data.length > 0 && Object.keys(data[0])) || [];

    return (
        <>
            <div style={{textAlign:"left", fontFamily: "none", fontSize: "24px", fontWeight:"bold" }}>
                Risk Category Summary
            </div>
            <table id="report-table">
                <thead id="report-thead">
                    <tr>
                        {
                            headers.map((item, idx) => <th key={idx}>{item}</th>)
                        }
                    </tr>
                </thead>
                <tbody id="report-tbody">
                    {
                        data.map((r, idx) => (
                            <tr key={idx}>
                                { headers.map((item, idx) => <td key={idx}>{r[item]}</td>)}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table;