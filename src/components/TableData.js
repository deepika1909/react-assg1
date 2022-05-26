import React from "react";
import Table from "./Table";

const Example = (searchData)=> {
    const theadData = ["ID", "First Name", "Last Name", "Action"];

    const tbodyData = [
        {
            id: "1",
            items: ["001", "john", "jonas"],
        },
        {
            id: "2",
            items: ["002", "sally", "singh"],
        },
        {
            id: "3",
            items: ["003", "maria", "sharma"],
        },
        {
            id: "4",
            items: ["004", "Abhishek", "sahoo"],
        },
        {
            id: "5",
            items: ["005", "Deepika", "Illa"],
        },
        {
            id: "6",
            items: ["006", "Subhasree", "Balija"],
        },
        {
            id: "7",
            items: ["007", "Vibhanshu", "jain"],
        },
    ];

    return (
        <div>
            <Table searchData={searchData} theadData={theadData} tbodyData={tbodyData} />
        </div>
    );
};

export default Example;