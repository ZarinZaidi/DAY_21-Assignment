import { useEffect, useState } from 'react';
import './Corporate.css';

function Corporate() {
    // hooks
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/users").then((response) => response.json()).then((data) => {
            setData(data);
        }).catch((e) => {
            console.log("There is something wrong.")
        })
    })

    return (
        <div>
            <h1>Corporate</h1>
            <h2>Meet our team!</h2>
            <div className='center'>
                <table>
                    {/* Data Mapping */}
                    {
                        data.map((ecom) => (
                            <td>
                                <tr><img src={ecom.avatar} style={{ width: "200px" }} /></tr>
                                <tr>{ecom.name}</tr>
                            </td>
                        ))
                    }
                </table>
            </div>
        </div>
    );
}

export default Corporate;