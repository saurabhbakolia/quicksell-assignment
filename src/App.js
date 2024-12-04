import './App.css';
import AppBar from './components/AppBar/AppBar';
import Canvas from './components/Canvas/Canvas';
import { useCallback, useEffect, useState } from 'react';
import { TICKETS_URL } from './utils/constants';
import { getGroupedTickets, mapUsersByUserId } from './utils';
import Loader from './components/Loader/Loader';

function App() {
  const [tickets, setTickets] = useState([]);
  const [userData, setUserData] = useState({})
  const [grouping, setGrouping] = useState("user");
  const [ordering, setOrdering] = useState("priority");
  const [loading, setLoading] = useState(true);
  const [groupedTickets, setGroupedTickets] = useState({});

  useEffect(() => {
    loadSettings();
    fetch(TICKETS_URL).then(resp => resp.json()).then(res => {
      const { tickets, users } = res;
      setTickets(tickets);
      setUserData(mapUsersByUserId(users));
      setLoading(false);
    }).catch(err => {});
  }, [])

  useEffect(() => {
    if(!tickets.length)
        return;
    setGroupedTickets(getGroupedTickets(tickets, grouping, ordering));
    setLoading(false);
  }, [tickets, grouping, ordering]);

  const onSetGrouping = useCallback((value) => {
    setLoading(true);
    setGrouping(value);
    saveSettings({ grouping: value });
  }, []);

  const onSetOrdering = useCallback((value) => {
    setLoading(true);
    console.log("setOrdering", value);
    setOrdering(value);
    saveSettings({ ordering: value });
  }, []);

  const saveSettings = useCallback((data) => {
    for (let key in data)
      localStorage.setItem(key, data[key]);
  }, []);

  const loadSettings = useCallback(() => {
    setGrouping(localStorage.getItem("grouping") || "status");
    setOrdering(localStorage.getItem("ordering") || "priority");
  }, []);

  return (
    <div className='main-div'>
      <AppBar grouping={grouping} setGrouping={onSetGrouping} ordering={ordering} setOrdering={onSetOrdering}/>
      {loading ? <Loader/> : <Canvas groupedTickets={groupedTickets} grouping={grouping} userData={userData}/>}
      
    </div>
  );
}

export default App;
