import React from "react";

function HomeItem(props) {
  const deleteItem = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="item" style={{listStyleType  :"none"}} onClick={deleteItem}>
      {props.children}
    </div>
  );
}

export default HomeItem;
