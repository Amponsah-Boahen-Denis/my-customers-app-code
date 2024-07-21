import React,{useEffect,useState,useCallback,useContext} from 'react'
import {Context} from './App.js'
import './main.scss'
import mage from './code.png'
function Main(){
const {costcustomer,customer,setCostcustomer,
    setCostinvestor,investor,
    costinvestor} = useContext(Context);
    const [total,setTotal]=useState(costcustomer + costinvestor)
//this code calculate the total income of customers
    useEffect(useCallback(
        () => {
            let calc=0;
           for(let i=0; i < customer.length; i++){
               calc+=parseInt(customer[i].cost1)
           }
            setCostcustomer(calc)
       }, [customer])  
    )
    //this code also calculate the total income of investors
   useEffect(useCallback(
    () => {
        let calc=0;
       for(let i=0; i < investor.length; i++){
           calc+=parseInt(investor[i].cont1)
       }
        setCostinvestor(calc)
    }, [investor])
    
   );
   // this code also add the total income of customers and investors.
useEffect(useCallback(() => {
    setTotal(costcustomer + costinvestor)
}, [costcustomer,costinvestor]))
 
    return (
        <div className='main'>
            <div >
         
</div>
            <div className='cal'>
                
                <div className='div flex'>
                <img className='img' src={require('./softsheba-hero.webp')}></img>
                    <p className='flex'>
         <b className='b1'>CUSTOMERS REVENUE</b><br/>
        <b className='b'>${new Intl.NumberFormat().format(costcustomer)}</b><br/>
                    </p>
                   <p className='flex'>
        <b className='b1'>INVESTORS REVENUE</b><br/>
        <b className='b'>${new Intl.NumberFormat().format(costinvestor)}</b><br/>
                </p>


                <div className='total'>
       <b className='b1'>TOTAL REVENUE</b><br/>
       <b className='b'>${new Intl.NumberFormat().format(total)}</b>
          </div>
                </div>
       

       </div>

        </div>
    )
}

export default Main;
