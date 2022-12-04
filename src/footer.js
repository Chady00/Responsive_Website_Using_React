import React from "react";

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>BBC</h4>
                        <ul className="list-unstyled">
                            <li>123-456-789</li>
                            <li>Cairo, Egypt</li>
                            <li>Semi-Colon, Cario, Egypt</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>BBC</h4>
                        <ul className="list-unstyled">
                            <li>123-456-789</li>
                            <li>Cairo, Egypt</li>
                            <li>Semi-Colon, Cairo, Egypt</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>BBC</h4>
                        <ul className="list-unstyled">
                            <li>123-456-789</li>
                            <li>Cairo, Egypt</li>
                            <li>Semi-Colon, Cairo, Egypt</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        Copywrite &copy; {new Date().getFullYear()} .The BBC is not responsible for the content of external sites. Read about our approach to external linking.
                    </p>

                </div>
            </div>
        </div>
    )
}
export default Footer;