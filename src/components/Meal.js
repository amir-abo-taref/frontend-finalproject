import React, { useEffect } from 'react'
import axios from "axios";
import "./Meal.css";
import Modal from "react-modal";


const Meal = () => {
    const [search, setSearch] = React.useState([]);
    const [input, setInput] = React.useState("");
    const [isOpen, setIsOpen] = React.useState(false);
    const [meal, setMeal] = React.useState({});
    const [newSearch, setNewSearch] = React.useState([]);
  
    function showmodle(e) {
      setIsOpen(true);
      idmeal(e.target.id);
    }
  
    function hidemodle() {
      setIsOpen(false);
    }
  
    function idmeal(id) {
      const meal = search.find((element) => element._id === id);
      setMeal(meal);
    }
  
    useEffect(() => {
      if(input===""){
        setSearch(newSearch)
        return 
      }
      const results = search.filter((res) =>
        res.name.toLowerCase().includes(input)
      );
      setSearch(results);
    }, [input]); //eslint-disable-line react-hooks/exhaustive-deps
  
    React.useEffect(() => {
      getData();
      Modal.setAppElement("body");
    }, []); //eslint-disable-line react-hooks/exhaustive-deps
  
    const getData = async () => {
      const response = await axios.get(
        `http://localhost:5000/meals`
      );
      // console.log(response.data);
      setSearch(response.data);
      setNewSearch(response.data);
    };
  
    return (
      <div className="Meal-page">
        search<input
          type="text"
          className="search-btn"
          placeholder="tap a meal name ...."
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="container">
          {search.map((e) => {
            return (
              <div className="cards" key={e._id}>
                <div className="textheader" >{e.name}</div>
                <img className="food-img" src={e.image} alt="food-img" />
                <div className="text">calories:({e.caloriot})gram</div>
                <div className="text">Time:({e.time})min</div>
                <div className="App">
                  <input
                    value="start cooking"
                    type="button"
                    id={e._id}
                    className="btn-modle open"
                    onClick={showmodle}
                  />
                  <Modal
                    isOpen={isOpen}
                    onRequestClose={hidemodle}
                    contentLabel="My dialog"
                    className="modlepage"
                  >
                    <div className="modal" key={e._id}>
                      <div className="textheader"  >{meal.name}</div>
                      <div>
                        <img
                          className="food-img-modal"
                          src={meal.image}
                          alt="food-img"
                        />
                        <img
                          className="food-img-modal"
                          src={
                            "https://toppng.com/uploads/preview/chef-11525867458vzkvgwywpg.png"
                          }
                          alt="food-img"
                        />
                      </div>
                      <div className="video-responsive">
                       <iframe src={meal.info}
                      frameBorder="0" width="100%" height="1000" vspace="0" 
                      hspace="0" marginWidth="5" marginHeight="5" 
                    scrolling="auto" allowtransparency="true" title="youtube" /> 
                      </div>
                    </div>
                    <input
                      className="btn-modle close"
                      value="close"
                      type="button"
                      onClick={hidemodle}
                    />
                  </Modal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  export default Meal;
  