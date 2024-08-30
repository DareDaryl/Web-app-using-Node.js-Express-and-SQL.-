import React from 'react';

function Filter({ setFilter }) { /*This line defines filter. The component receives props as its argument, 
    which in this case is destructured to directly access the setFilter prop.*/
  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button> {/*clicking this button is expected to set the
       filter to 'all' which shows and filters 'all' items */}
      <button onClick={() => setFilter('completed')}>Completed</button>   
      <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      {/*These creates a button element with an onClick 
      event handler. When the button is clicked, it will call the setFilter function with the argument 'all', 
      'complete' or 'incomplete'.*/ }
    </div>
  );
}

export default Filter;
