import UserIcon from "../components/UserIcon/UserIcon";

export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": 
        case 0: 
            return <img src={`${process.env.PUBLIC_URL}/assets/icons/No-priority.svg`} alt="No priority" width={24} height={24}/>;
        case "Low":
        case 1: 
            return <img src={`${process.env.PUBLIC_URL}/assets/icons/Low Priority.svg`} alt="Low priority" width={24} height={24}/>;
        case "Medium": 
        case 2:
            return <img src={`${process.env.PUBLIC_URL}/assets/icons/Medium Priority.svg`} alt="Medium priority" width={24} height={24}/>;
        case "High": 
        case 3:
            return <img src={`${process.env.PUBLIC_URL}/assets/icons/High Priority.svg`} alt="High priority" width={24} height={24}/>;
        case "Urgent":
        case 4:
            return <img src={`${process.env.PUBLIC_URL}/assets/icons/Urgent Priority colour.svg`} alt="Urgent priority colour" width={24} height={24}/>;
        default: 
            return <img src={`${process.env.PUBLIC_URL}/assets/icons/No-priority.svg`} alt="No priority" width={24} height={24}/>;
    }
}

export const getStatusIcon = (status) => {
    switch (status) {
        case "Backlog": 
            return <img src={`${process.env.PUBLIC_URL}/assets/icons/Backlog.svg`} alt="Backlog" width={18} height={18}/>;
        case "Todo": 
            return <img src={`${process.env.PUBLIC_URL}/assets/icons/To-do.svg`} alt="Todo" width={18} height={18}/>;
        case "In progress": 
            return <img src={`${process.env.PUBLIC_URL}/assets/icons/in-progress.svg`} alt="In progress" width={24} height={18}/>;
        case "Done": 
            return <img src={`${process.env.PUBLIC_URL}/assets/icons/Done.svg`} alt="Done" width={18} height={18}/>;
        case "Canceled": 
            return <img src={`${process.env.PUBLIC_URL}/assets/icons/Cancelled.svg`} alt="Canceled" width={18} height={18}/>;
        default: 
            return <img src={`${process.env.PUBLIC_URL}/assets/icons/Backlog.svg`} alt="Backlog" width={18} height={18} />;
    }
}

export const getIcon = (groupBy, grouping, userData) => {
    if (grouping === "status") {
        return getStatusIcon(groupBy);
    }
    if (grouping === "priority") {
        return getPriorityIcon(groupBy);
    }
    if (grouping === "user" && userData[groupBy]) {
        return <UserIcon name={userData[groupBy].name} available={userData[groupBy].available} />;
    }
    return null;
};

export const getTitle = (groupBy, grouping, userData) => {
    if (grouping === "status" || grouping === "priority") {
        return groupBy;
    }
    if (grouping === "user" && userData[groupBy]) {
        return userData[groupBy].name;
    }
    return null;
};