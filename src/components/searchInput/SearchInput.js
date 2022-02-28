import React, { useState } from 'react';

const SearchInput = (props) => {
  // const [filter, setFilter] = useState('');

  return (
    <section className='search-bar my-3'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-10 mx-auto'>
            <form onSubmit={props.submitHandler}>
              <div>
                <div className='input-group'>
                  <input
                    name='title'
                    type='search'
                    placeholder='Search Meal...'
                    className='form-control'
                    // onChange={props.handleInput}
                    // value={props.filter}
                  />
                  <button type='button' className='btn btn-info'>
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchInput;
