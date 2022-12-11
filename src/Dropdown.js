import React, { useState } from 'react'

const Dropdown = ({ selected, setSelected }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    const options = ["high", "medium", "low"]

    return (
        <div className="dropdown" onClick={toggle}>
            <div className="dropdown-btn">{selected}</div>

            {
                isOpen && (
                    <div className="dropdown-content">
                        {options.map((option) => (
                            <div onClick={(e) => {
                                setSelected(option)
                                setIsOpen(false)
                            }}
                                className="dropdown-item">{option}
                            </div>
                        ))}
                    </div>
                )
            }
        </div >
    )
}

export default Dropdown;
