import React,{useState,useEffect} from 'react'
import '../css/trades.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import moment from 'moment'
function Trades() {
    // const[resf,setRes]=useState([]);
    // const callApi=()=>{
    //      fetch('https://validefi.global:8080/users?currency=BTC/USDT').then((res)=>res.json().then(re=>{setRes(re)
    
    // }))
    // }

    // useEffect(() => {
    //     callApi()
    // }, [])
    

    // const client = new BscScan({ apikey: "4M737ZIVF6RDFH1E4FMX7HBGWBV4ZVRJKI" });

    // const balance =  client.accounts.getBalance({ address: "0x4e656459ed25bf986eea1196bc1b00665401645d" });
   
    // const txlist = client.accounts.getTxList({ address: "0x4e656459ed25bf986eea1196bc1b00665401645d" });
    //     txlist.then((data)=>{
       
    //     setTrades(data)
    //     }
    //  )

    // const [trades, setTrades] = useState([])
    const[resd,setResd]=useState([]);
    const [search,setSearch]=useState()
    const callApi=()=>{
        if(search===""){
         fetch(`http://localhost:8080/exchange?bcurrency=0xdac17f958d2ee523a2206206994597c13d831ec7`).then((resd)=>resd.json().then(re=>{setResd(re)
console.log("GHayas",resd);    
    }))

}else{
    fetch(`http://localhost:8080/exchange?bcurrency=${search}`).then((resd)=>resd.json().then(re=>{setResd(re)
}))
}

    }

    useEffect(() => {
        callApi()
    }, [])
  return (
    <div className='table_trades'>
        <input type="text" onChange={(e)=>setSearch(e.target.value)} />
        <button type="submit">Submit</button>
        {console.log("post",resd)}      
            <div className='flex_box_table'>
               <h3>Trades</h3>
               <div className='btns_lengends'>
                <button className='buy'>Buy</button>
                <button className='sell'>Sale</button>
            </div>
            </div>

            {/* ++_-_++  TRADES TABLE DATA  ++_-_++ */}
            <table>
                <thead>
                      <th>Date</th>
                    <th>Type</th>
                    <th>PRICE USDT</th>           
                    <th className='transform'>Price ETH</th>
                    <th className='transform'>Amount WETH</th>
                    <th className='transform'>TOTAL ETH</th>
                    <th>Maker</th>
                </thead>
                <tbody>         
                    {resd.slice(0,10).map((post,key) =>{
                        // if(post.side=="buy"){

                        
                    return(
                        <tr key={key}>
                            <td className='date_table'>{(post.block.timestamp.iso8601).replace('T','..').slice(0, -4)}</td>
                            <td className='red'>{post.side}</td>
                            <td className=''>{post.baseAmount}</td>                  
                            <td className='truncate'>{post.quoteAmount}</td>
                            <td className='truncate'>{post.quotePrice}</td>
                            <td className='truncate'>{(post.baseAmount)}</td>
                            <td className='truncate maker_table'>{(post.maker.address).slice(0, -2)}</td>
                        </tr>
                      
                    )})}
            </tbody>
            </table>        
    </div>
  )
}

export default Trades