import React from "react";
import Button from "./Button";
const TableRow = ({ data }) => {
    return (
        <>
            <tr>
                {data.map((item) => {
                    return <td key={item}>{item}</td>;
                })}

                <td><Button DataItems={data}/></td>
            </tr>
        </>
    );
};

export default TableRow;