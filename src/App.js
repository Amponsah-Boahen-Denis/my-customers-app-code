import React,{useState,createContext,useEffect} from 'react';
import Customers from './customers';
import Investors from './investors';
import Main from './main';
import Topinfor from './topinfor';
import './app.scss';
export  const Context=createContext(null); 
function App() {
  const [customer,setCustomer]=useState([]);
  const [investor,setInvestor]=useState([])
  const [ncustomers,setNcustomers]=useState(0);
  const [ninvestors,setNinvestors]=useState(0);
  const [costcustomer,setCostcustomer]=useState(0);
  const [costinvestor,setCostinvestor]=useState(0); 
 
  return (
    <div className="App">
              <h2>CUSTOMER SERVICE APP</h2>
      <div className='data'>
<Context.Provider value={{
      costcustomer,setCostcustomer, 
       customer, setCustomer,
       investor,setInvestor,
       ninvestors,setNinvestors,
       costinvestor,setCostinvestor,
        ncustomers, setNcustomers
        }}>
          <Main/>


     <Topinfor/>
     <div className='infor'>
     <Customers/>
      <Investors/>
     </div>
      
</Context.Provider>
     
      </div>
    </div>
  );
}

export default App;
