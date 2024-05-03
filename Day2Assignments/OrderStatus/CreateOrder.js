import { useState } from "react";





function CreateOrder(){
    let [order, setOrder] = useState({
            orderId: 'PO/2024APR25/123',
            status: 'PO Received',
            customerName: 'Namish Golla',
            items: 3
        });
        function updateOrderSts(){
            var stslist = document.getElementById("updSts");
            let updValue= stslist.options[stslist.selectedIndex].value;
            let updText= stslist.options[stslist.selectedIndex].text;
            if (updValue == '1'){
                updText='';
            }
            console.log(updText);
            setOrder({...order,status:updText});
        }

    return (
        <div>
            <div className="order-task">  
                <h3>Task2 - [Object Hook] Manipulating  Order Status</h3> 
                <div>
                    <div className="poid">
                        <span >
                            Order Id:{order.orderId}
                        </span>
                    </div>
                    <table className="details" >
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Status</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{order.customerName}</td>
                            <td>{order.status}</td>
                            <td>{order.items}</td>
                        </tr>
                    </tbody>
                    </table>
                    <div className="status">
                        Update Status: 
                        <select className="select" name="status" id="updSts" onChange = {updateOrderSts}>
                            <option value="1" select="selected">--- Select ---</option>
                            <option value="2"> Processing </option>  
                            <option value="3"> Shipped </option>  
                            <option value="4"> Delivered </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateOrder;