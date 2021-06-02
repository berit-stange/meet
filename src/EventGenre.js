
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {

    const [data, setData] = useState([]); //add useState hook

    useEffect(() => { setData(() => getData()); }, [events]); //function will run when there’s a change to the events prop

    const getData = () => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
        const data = genres.map((genre) => {                                                  // Inside the map function, declare the value variable to be returned
            // const value = filter({ summary } => summary.split(' ').includes(genre)).length;       //variable to be returned
            const value = events.filter(({ summary }) => summary.split(' ').includes(genre)).length;
            return { name: genre, value }; //genres.map() function needs to return the data
        })
        return data;
    };

    return (
        <ResponsiveContainer height={300} /* width="50%" height="50%" */ >
            <PieChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }} >
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill='#e25d3c'
                    dataKey='value'
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default EventGenre;