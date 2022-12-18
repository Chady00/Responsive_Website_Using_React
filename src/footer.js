import React from "react";
import Pection from "./Pection";

const Footer = () => {

    const section_data = [
        {
            title: "BBC",
            content: [
                { a: "111111111" },
                { b: "Cairo, Egypt" },
                { c: "Semi-Colon, Cairo, Egypt" },
            ]
        },
        {
            title: "BBC",
            content: [
                { a: "2222222222" },
                { b: "Cairo, Egypt" },
                { c: "Semi-Colon, Cairo, Egypt" },
            ]
        },
        {
            title: "BBC",
            content: [
                { a: "33333333333" },
                { b: "Cairo, Egypt" },
                { c: "Semi-Colon, Cairo, Egypt" },
            ]
        }
    ]


    return (
        <div className="main-footer" >
            <div className="container">
                <div className="row">
                    {section_data.map((e) => { return <Pection object={e} /> })}

                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        Copywrite &copy; {new Date().getFullYear()} .The BBC is not responsible for the content of external sites. Read about our approach to external linking.
                    </p>

                </div>
            </div>
        </div >
    )
}
export default Footer;