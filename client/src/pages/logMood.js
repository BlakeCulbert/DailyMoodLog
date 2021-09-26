import React, { useEffect, useState } from "react";
import Axios from 'axios';

function LogMood() {

    const [mood, setMood] = useState('');
    const [journal, setJournal] = useState('');
    const [logList, setLogList] = useState([]);
    const [updateJournal, setUpdateJournal] = useState('');
    
    useEffect(() => {
      Axios.get('http://localhost:3001/api/get').then((response) => {
        setLogList(response.data)
      });
    });
  
    const submitLog = () => {
      Axios.post('http://localhost:3001/api/insert', {
        mood: mood,
        journal: journal
      }).then(() => {
        setLogList([...logList, 
          {mood: mood, journal: journal},])
        });
    };
  
    const deleteLog = (mood) => {
      Axios.delete(`http://localhost:3001/api/delete/${mood}`);
    };
  
    const updateLog = (mood) => {
      Axios.put("http://localhost:3001/api/update", {
        mood: mood,
        journal: updateJournal,
      });
      setUpdateJournal("")
    };
  
    return (
      <div className="App">
        <h1>MOOD LOG</h1>
  
        <div className="form">
          <label>Mood:</label>
          <input type="text" name="mood" onChange={(e) => {
            setMood(e.target.value)
          }} />
          <label>Why?</label>
          <input type="text" name="journal" onChange={(e) => {
            setJournal(e.target.value)
           }} />
  
          <button onClick={submitLog}>Submit Log</button>
  
          {logList.map((val) => {
            return (
              <div className="card" key={mood}>
                <h1>{val.mood}</h1>
                <p>{val.journal}</p>
  
                <button onClick={() => {deleteLog(val.mood)}}>Delete</button>
                <input type="text" id="updateInput" onChange={(e) => {
                  setUpdateJournal(e.target.value)
                }} />
                <button onClick={() => {updateLog(val.mood)}}>Update</button>
              </div>
            );
          })};
        </div>
      </div>
    );
  }
  
  export default LogMood;