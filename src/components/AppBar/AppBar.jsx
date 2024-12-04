import React, { useEffect, useRef, useState } from 'react';
import './AppBar.css'

const AppBar = ({ grouping, setGrouping, ordering, setOrdering }) => {
    const dropdownRef = useRef(null);
    const dropdownButtonRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNestedDropdownOpen, setIsNestedDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleNestedDropdownToggle = () => {
        setIsNestedDropdownOpen(!isNestedDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                !dropdownButtonRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <div className="app-bar">
            <button className="dropdown-btn" onClick={handleDropdownToggle} ref={dropdownButtonRef}>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/Display.svg`} alt="Backlog" width={16} height={16} />
                <span>Display</span>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/down.svg`} alt="Down Arrow" width={18} height={18} />
            </button>
            {isDropdownOpen && (
                <div className="dropdown-menu" ref={dropdownRef}>
                    <div className="dropdown-item" onClick={handleNestedDropdownToggle}>
                        <div>
                            <label htmlFor="grouping-select">Grouping</label>
                            <select
                                id="grouping-select"
                                value={grouping}
                                onChange={(e) => setGrouping(e.target.value)}
                            >
                                <option value="user">User</option>
                                <option value="status">Status</option>
                                <option value="priority">Priority</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="sorting-select">Sorting</label>
                            <select
                                id="sorting-select"
                                value={ordering}
                                onChange={(e) => setOrdering(e.target.value)}
                            >
                                <option value="priority">Priority</option>
                                <option value="title">Title</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AppBar