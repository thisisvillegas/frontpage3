import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import list from "../data/userInfo.json";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function Links() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function saveData(){

  }

  function showList (){
    let returnArray = [];
    
    for (let i = 0; i < list.tableData.length; i++) {
        console.log(list.tableData[i].name)
        returnArray.push(
          <li>
            <a href={list.tableData[i].url}>{list.tableData[i].name}</a>
          </li>
        );
      
    }
    return returnArray;
  }

  return (
        <div>
          <button to='./' onClick={showList}>Links</button>
          <button>Weather</button>
        </div>
      );
}

export default Links;
