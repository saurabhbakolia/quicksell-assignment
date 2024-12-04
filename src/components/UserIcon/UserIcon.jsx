import React from 'react';
import './UserIcon.css';

const UserIcon = ({ name, available }) => {
    const getUserIcon = React.useMemo(() => {
        return name.split(" ").map((item) => item[0]).join("");
    }, [name]);
    const getRandomColor = (name) => {
        const hash = name.split(" ").map((item) => item.charCodeAt(0)).reduce((acc, code) => acc + code, 0);
        const hue = hash % 360;  // Generate hue based on the hash (for a full color spectrum)
        return `hsl(${hue}, 70%, 60%)`;  // Use HSL for more readable and varied colors
    };
    const backgroundColor = React.useMemo(() => getRandomColor(name), [name]);
    return (
        <div className='user-icon-container' style={{ backgroundColor }}>
            <div className='user-icon-text'>{getUserIcon}</div>
            <div className={`user-status ${available && "available"}`}></div>
        </div>
    )
}

export default UserIcon