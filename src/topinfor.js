import React,{useEffect,useRef,useContext} from 'react'
import {Context} from './App.js'
import './topinfor.scss'
function Topinfor(){
    const user=useRef(null);
    const date=useRef(null);
    const cost=useRef(null);
    const invest=useRef(null);
    const amcont=useRef(null);
    const{
      investor,setInvestor,
      customer,setCustomer, 
      ncustomers,setNcustomers,
      ninvestors,setNinvestors
    } = useContext(Context);
  const add=(e)=>{
  e.preventDefault();
  // this code checks for validation
  if(user.current.value==='') return user.current.focus();
  if(date.current.value==='') return date.current.focus();
  if(cost.current.value==='') return cost.current.focus();
  // this code is the array of customer details
  setCustomer([...customer,{"user1":user.current.value,
  "date1":date.current.value,
  "cost1":cost.current.value,
  "complete":false,
  'id':new Date().getTime()
  }],
  user.current.value='',
  date.current.value='',
  cost.current.value='',
  // this code increase the number of customers.
  setNcustomers(ncustomers + 1)
  )
  
    };
   
    const addin=(e)=>{
      e.preventDefault();
      if(invest.current.value==='') return invest.current.focus();
      if(amcont.current.value==='') return amcont.current.focus();
      //this code shows the array of investors details.
      setInvestor([...investor,{"investor1":invest.current.value,
      "cont1":amcont.current.value,
      "complet":false,
      'id':new Date().getTime()
      
      }],
      invest.current.value='',
      amcont.current.value='',
      // this code increase the number of investors
      setNinvestors(ninvestors + 1)
  
      );
        };
  useEffect(() => {
    return user.current.focus();
  })
  const down=((e)=>{if(e.key==='Enter') return date.current.focus()})
  const down2=((e)=>{if(e.key==='Enter') return cost.current.focus()})
    return (
        <div className='top'>
          <div className='user'>

            <input className='input' type="text" placeholder='  Customers name'
             ref={user} onKeyDown={down}/>
            <input type="date" ref={date} onKeyDown={down2}/>
            <input type="number" placeholder='  $customers cost' ref={cost}/>
            <button onClick={add}>Add Customer</button>
            </div> 
            <div className='invest'>
              <input type="text" placeholder=' Investors name' ref={invest} />
              <input type="number" placeholder=' $Amount contributed'
               ref={amcont}/>
              <button onClick={addin}>Add Investor</button>
            </div>
        </div>
    )
}

export default Topinfor;
