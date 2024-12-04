import React from 'react';
import './TaskCard.css';
import { getPriorityIcon, getStatusIcon, getTitle } from '../../utils/helper';
import UserIcon from '../UserIcon/UserIcon';

const TaskCard = ({ ticket, groupBy, userData, grouping }) => {
    const { id, priority, status, tag, title, userId } = ticket;
    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.substring(0, maxLength) + '...';
        }
        return title;
    };
    let foundUser = userData[userId];
    return (
        <div className='task-card' key={id}>
            <ul className='task-card-header'>
                <li>{id}</li>
                <li>{userData[groupBy] && <UserIcon name={foundUser && foundUser?.name} available={userData[groupBy].available} />}</li>
            </ul>
            <p className='task-card-title'><span>{getStatusIcon(status)}</span>{truncateTitle(title, 68)}</p>
            <ul className='task-card-tags'>
                <li>{getPriorityIcon(priority)}</li>
                <li><span></span>{tag[0]}</li>
            </ul>
        </div>
    )
}

export default TaskCard