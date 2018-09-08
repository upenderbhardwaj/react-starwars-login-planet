import React from 'react';
import './styles.css';
import { Scrollbars } from 'react-custom-scrollbars';

export default ({ results, onClick }) =>

  <section className="results-section">
  <Scrollbars 
    style={{ width: '40%', height: '20.7rem' }}>
    <ul>
      {results.map(res => {
        let size='10px';
        let margin='5px'
        if(res.population>=1000){
          size='20px';
        }
        if(res.population>=10000){
          size='25px';
          margin='10px'
        }
        if(res.population>=100000){
          size='30px';
          margin='13px'
        }
        if(res.population>=1000000){
          size='35px';
          margin='17px'
        }
        if(res.population>=10000000){
          size='40px';
          margin='20px'
        }
        if(res.population>=100000000){
          size='45px';
          margin='23px'
        }
        let style = {
          'font-size': size,
          'margin-bottom':margin
        };
      return <div>
        <li 
          style={style}
          key={res.name} 
          onClick={() => onClick(res.id)}>
        {res.name}
        </li>
      </div>
      },this)
    }
    </ul>
    </Scrollbars>
  </section>
