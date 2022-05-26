import React from "react";
import TableRow from "./TableRow";
import TableHeadItem from "./TableHead";
import './Table.css';

const Table = ({ theadData, tbodyData, customClass, searchData }) => {
    return (
        <table class='content-table'>
            <thead>
                <tr>
                    {theadData.map((h) => {
                        return <TableHeadItem key={h} item={h} />;
                    })}
                </tr>
            </thead>
            <tbody>
                {tbodyData.map((item) => {
                    return( 
                    <>
                        {
                            item.items[1].toLowerCase().includes(searchData.searchData.toLowerCase()) && 
                            <TableRow key={item.id} data={item.items} />                     
                        }
                    </>
                    )
                })}
            </tbody>
        </table>
    );
};

export default Table;