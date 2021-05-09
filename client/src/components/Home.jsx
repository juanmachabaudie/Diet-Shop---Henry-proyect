import React from 'react';
import {Link} from 'react-router-dom';
import { getCategories } from '../redux/actions/productsActions';

function Home() {
  return (
    <div>
      <header>
        {
          getCategories.map(category => {
            
          })
        }
      </header>
    </div>
  )
}

export default Home
