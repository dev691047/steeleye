import React, { useState, useEffect, memo, useCallback } from 'react';
import PropTypes from 'prop-types';


// Single List Item
const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
}) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red'}}
      onClick={()=>onClickHandler(index)}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({
  items,
}) => {
    //initial state should be written first and function to change the state.
  const [selectedIndex,setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const click = index => {
    setSelectedIndex(index);
  };

  const handleClick = useCallback((index) =>{
        click(index);
  },[])

  return (
    <ul style={{ textAlign: 'left' }}>
      {items.map((item, index) => (
        <SingleListItem
          //Keys are used in React to identify which items in the list are changed, updated, or deleted.
          key={`l_${index}`}
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          //we have to check if selectedindex equal index or not 
          isSelected={selectedIndex===index}
        />
      ))}
    </ul>
  )
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })),
};



const List = memo(WrappedListComponent);

export default List;