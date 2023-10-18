import React from 'react'
import 
{ BsCoin,BsBasket2Fill, BsBank,BsBarChartFill}
 from 'react-icons/bs'
 import 
 { BarChart,Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line} 
 from 'recharts';
 import { PieChart, Pie,  Cell } from "recharts"


function Home() {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h4 className='name'>DASHBOARD</h4>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>

                    <BsCoin className='card_icon'/>
                </div>
               <div>
                <h6>Earning</h6>
                <h1>$198K</h1>
                <p>37.8% this month</p>
                </div> 
            </div>
            <div className='card'>
                <div className='card-inner'>
                    
                    <BsBasket2Fill className='card_icon'/>
                </div>
                <div>
                  <h6>orders</h6>
                  <h1>$2.4k</h1>
                  <p>2% this month</p>

                  </div>
                
            </div>
            <div className='card'>
                <div className='card-inner'>
                    
                    <BsBank className='card_icon'/>
                </div>
                <div><h6>Balance</h6>
                <h1>$2.4k</h1>
                <p>2% this month</p>
                </div>

            </div>
            <div className='card'>
                <div className='card-inner'>
                    
                    <BsBarChartFill className='card_icon'/>
                </div>
                <div>
                  <h6>Total Sales</h6>
                <h1>$89k</h1>
                <p>11% this week</p>
                </div>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="70%"
          cy="40%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="70%"
          dataKey="amt"
        >
          <Cell name="Page A" fill="#fecba6" />
          <Cell name="Page B" fill="#b3d23f" />
          <Cell name="Page C" fill="#a44c9e" />
          <Cell name="Page D" fill="#fecba9" />
          <Cell name="Page E" fill="#b3d238" />
          <Cell name="Page F" fill="#a44c9g" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home
