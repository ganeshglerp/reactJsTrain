import {useState} from "react"

function Mobiles(){
    let moblieProduct=[
        {name:"Redmi 12 5G",brand:"Redmi",description:"Redmi 12 5G Moonstone Silver 6GB RAM 128GB ROM", price:"12499", rating:"4", stock:"5", image:"https://m.media-amazon.com/images/I/61SmnheBBRL._AC_UY218_.jpg"},
        {name:"Redmi Note 13 5G",brand:"Redmi",description:"Redmi Note 13 5G (Arctic White, 6GB RAM, 128GB Storage) | 5G Ready | 120Hz Bezel-Less AMOLED | 7.mm Slimmest Note Ever | 108MP Pro-Grade Camera", price:"16999", rating:"3.5", stock:"2", image:"https://m.media-amazon.com/images/I/71VW8LmqqPL._AC_UY218_.jpg"},
        {name:"realme NARZO 70 Pro 5G",brand:"Realme",description:"realme NARZO 70 5G（Ice Blue,6GB RAM, 128GB Storage | Dimensity 7050 5G Chipset | 120Hz AMOLED Display | 50MP Primary Camera | 45W Charger in The Box", price:"15999", rating:"", stock:"0", image:"https://m.media-amazon.com/images/I/71VwgEu6N6L._AC_UY218_.jpg"},
        {name:"realme narzo 60X 5G",brand:"Realme",description:"realme narzo 60X 5G (Stellar Green,6GB,128GB Storage) Up to 2TB External Memory | 50 MP AI Primary Camera | Segments only 33W Supervooc Charge", price:"11849", rating:"4", stock:"10", image:"https://m.media-amazon.com/images/I/81WimZLWH1L._AC_UY218_.jpg"},
        {name:"OnePlus Nord CE 3 Lite 5G",brand:"OnePlus",description:"OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 8GB RAM, 256GB Storage)", price:"19249", rating:"4", stock:"5", image:"https://m.media-amazon.com/images/I/61LB+d0vheL._AC_UY218_.jpg"},
        {name:"iQOO Z6 Lite 5G",brand:"iQOO",description:"iQOO Z6 Lite 5G (Stellar Green, 6GB RAM, 128GB Storage) with Charger | Qualcomm Snapdragon 4 Gen 1 Processor | 120Hz FHD+ Display | Travel Adaptor Included in The Box", price:"10999", rating:"4", stock:"7", image:"https://m.media-amazon.com/images/I/61VbKHdE0rL._AC_UY218_.jpg"},
        {name:"Vivo Y27",brand:"Vivo",description:"Vivo Y27 (Sea Blue, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers", price:"10999", rating:"4", stock:"2", image:"https://m.media-amazon.com/images/I/615+W0r2oXL._AC_UY218_.jpg"},
        {name:"Samsung Galaxy F15 5G",brand:"Samsung",description:"Samsung Galaxy F15 5G 6GB RAM 128GB Storage (Groovy Violet)", price:"13999", rating:"3", stock:"0", image:"https://m.media-amazon.com/images/I/71zwWBcSUML._AC_UY218_.jpg"},
        {name:"Samsung Galaxy A22 5G",brand:"Samsung",description:"Samsung Galaxy A22 5G (Violet, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers", price:"18490", rating:"4", stock:"2", image:"https://m.media-amazon.com/images/I/813iT59-p8S._AC_UY218_.jpg"},
        {name:"Nokia G42 5G",brand:"Nokia",description:"(Refurbished) Nokia G42 5G | Snapdragon® 480+ 5G | 50MP Triple AI Camera | 11GB RAM (6GB RAM + 5GB Virtual RAM) | 128GB Storage | 5000mAh Battery | 2 Years Android Upgrades | 20W Fast Charger Included | So Pink", price:"10620", rating:"4", stock:"2", image:"https://m.media-amazon.com/images/I/71lPcWlgL4L._AC_UY218_.jpg"},
        {name:"Motorola Edge 30",brand:"Motorola",description:"(Refurbished) Motorola Edge 30 (Meteor Grey,6GB RAM, 128GB Storage)", price:"20000", rating:"4.5", stock:"5", image:"https://m.media-amazon.com/images/I/31nB6mQno+L._AC_UY218_.jpg"},
        {name:"Motorola g82 5G",brand:"Motorola",description:"Motorola g82 5G (6GB, 128GB) (Meteorite Gray)", price:"17000", rating:"4", stock:"1", image:"https://m.media-amazon.com/images/I/41PmPYX+8uL._AC_UY218_.jpg"},
        {name:"Motorola G60",brand:"Motorola",description:"(Refurbished) MOTOROLA G60 (Frosted Champange, 6GB RAM, 128GB Storage)", price:"13965", rating:"4", stock:"5", image:"https://m.media-amazon.com/images/I/51eZ8d3TNkL._AC_UY218_.jpg"},
        {name:"Mi 11X 5G Cosmic Black",brand:"MI",description:"(Refurbished) Mi 11X 5G Cosmic Black 8GB RAM 128GB ROM | SD 870 | DisplayMate A+ rated E4 AMOLED", price:"17999", rating:"3.5", stock:"1", image:"https://m.media-amazon.com/images/I/51aMGrhld6S._AC_UY218_.jpg"},
        {name:"Samsung Galaxy S24 Ultra 5G AI Smartphone",brand:"Samsung",description:"Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 1TB Storage)", price:"159999", rating:"", stock:"", image:"https://m.media-amazon.com/images/I/81vxWpPpgNL._AC_UY218_.jpg"},
        {name:"iPhone 14 Plus",brand:"Apple",description:"Apple iPhone 14 Plus (256 GB) - Blue", price:"76999", rating:"4", stock:"2", image:"https://m.media-amazon.com/images/I/61BGE6iu4AL._AC_UY218_.jpg"},
        {name:"iPhone 15 Pro Max",brand:"Apple",description:"Apple iPhone 15 Pro Max (1 TB) - Black Titanium", price:"199900", rating:"4", stock:"1", image:"https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY218_.jpg"},
        {name:"iPhone 13",brand:"Apple",description:"Apple iPhone 13 (256GB) - Starlight", price:"57999", rating:"4", stock:"0", image:"https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY218_.jpg"}
        ];

    var mockProducts =[];

    moblieProduct.filter(function(mobile){ 
        let mockMobile = {...mobile, inStock:mobile.stock>0 ? true:false};
        mockProducts.push(mockMobile);
    });
    
    //let [rating, setRating] = useState(0);
    //setRating(4);
    let rating=4, star = 5;
    function getRating(val){
        
        let divRat = <div>
            {[...Array(star)].map((currElement, index) => {
                let str = index+1;
                return <span key={index} className='star' style={{
                    cursor: 'pointer',
                    color: (val>=str) ? 'gold' : 'gray',
                    fontSize: `20px`,
                  }}
                  >{' '}★{' '}</span>;
            })}
        </div>;
        return divRat;
    }
    

    return (
        <div className="App">   
            <h1>Mobile Data</h1>
            <div className="container">
                <div className="tablediv" key="tablediv1">
                <table className="tablediv" >
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th style={{width:'150px', textAlign:'center'}}>Rating</th>
                            <th style={{width:'100px', textAlign:'left'}}>Stock Status</th>
                        </tr>
                    </thead>
                        <tbody>
                            {mockProducts.map((mbl, index) => (//JSX : Java Script XML                    
                                <tr  key ={index}>
                                    <td ><img scr={mbl.image} alt=""/></td>
                                    <td >{mbl.name}</td>
                                    <td>{mbl.description}</td>
                                    <td>{mbl.price}</td>
                                    <td style={{width:'150px', textAlign:'center'}}>{mbl.rating>0 && getRating(mbl.rating)}</td>
                                    <td>{mbl.inStock ? (mbl.stock>2? mbl.stock:`only ${mbl.stock} left`):'Out of Stock'}</td>
                                </tr>
                            ))}
                        </tbody>
                </table>
                </div>
            </div>
        </div>
    );
    
}

export default Mobiles;