import React, { useMemo } from 'react';
import './Canvas.css';
import TaskCard from '../TaskCard/TaskCard';
import { getIcon, getTitle } from '../../utils/helper';

const Canvas = ({ grouping, userData, groupedTickets }) => {
    const keys = useMemo(() => Object.keys(groupedTickets), [groupedTickets]);
    return (
        <div className='canvas'>
            {keys.map((key) => {
                return (
                    <div key={key} className='canvas-column'>
                        <div className='column-header'>
                            <div className='column-header-left-container'>
                                {getIcon(key, grouping, userData)}
                                <div className='column-title'>
                                    {getTitle(key, grouping, userData)}
                                    <span className='count'>{groupedTickets[key].length}</span>
                                </div>
                            </div>
                            <div className='column-header-right-container'>
                                <img src={`${process.env.PUBLIC_URL}/assets/icons/add.svg`} alt="Backlog" width={24} height={24} />
                                <img src={`${process.env.PUBLIC_URL}/assets/icons/3 dot menu.svg`} alt="Backlog" width={24} height={24} />
                            </div>
                        </div>
                        {groupedTickets[key].map((ticket) => {
                            return <TaskCard ticket={ticket} groupBy={key} userData={userData} grouping={grouping} />
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Canvas

