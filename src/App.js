import React , { useEffect, useState} from 'react';
import './Search.css';

function App() {
  const [show , setShow] = useState(false);

  const [jobroles , setJobroles] = useState([]);
  const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/main',{
          method: "POST"
        })
        .then(response => response.json())
        .then(users1 => {
          let tmpArray = []
          for (var i = 0; i < users1.JOBROLES.length; i++) {
              tmpArray.push(users1.JOBROLES[i])
          }
          setJobroles(tmpArray);
          console.log("useEffect called")
        })
      },[]);

      const displayJobs = (item, index) => {
        if(search !== '' && item.toLowerCase().indexOf(search) === -1){
          return null;
        };
        return <div className="card">
          <p key ={index} onshowHandler>{item}</p>
          </div>
      }

      const onChangeHandler = e => {
        setSearch(e.target.value);
        setShow(true);
        if(e.target.value === ''){
          setShow(false);
        }
        
      };
      const onClickHandler = (e) => {
        setShow(true);
        if(e.target.value === ''){
          setShow(false);
        } 
      }
    return (
        <div>
          <h2>JOB ROLES</h2>
          <div className="wrapper">
            <div className="search_box">
                <input type="text" placeholder="Your dream career is one search away" 
                onChange={onChangeHandler} onKeyPress={onClickHandler}/>
            <i className="fas fa-search"></i>
            </div>
            <div>
                {show? jobroles.map((item, i) => {
                  return <p>{displayJobs(item,i)}</p>
              }):null}
          </div>
          </div>
          {/* <input placeholder="Search here..." onChange={onChangeHandler} onKeyPress={onClickHandler}/> */}
          {/* <button onClick={onClickHandler}>Search</button> */}

        </div>
    );
}

export default App;
