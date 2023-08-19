import React, { useContext, useState } from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
   // const {budget, setBudget} = useContext(AppContext);
   // const [setBudget] = useState('');
   const {dispatch } = useContext(AppContext);
    const {budget,currency} = useContext(AppContext);
    const setBudget = (val)=>{
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
}
    return(
        <div classname = 'alert alert-secondary'>
            <span> Budget: {currency}
            <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        step = '10'
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setBudget(event.target.value)}>
                        </input>
            </span>
        </div>
    );
};

export default Budget;
