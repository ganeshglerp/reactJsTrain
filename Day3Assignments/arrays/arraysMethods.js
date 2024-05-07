import {useState} from "react"

function ProductDetails(){
    console.log("Initializing array");
    const products = [
        { name: "Laptop", category: "Electronics", price: 300000, stock: 6 },
        { name: "Cameras", category: "Electronics", price: 200000, stock: 4 },
        { name: "Accessories", category: "Electronics", price: 100000, stock: 25 },
        { name: "Home Theater", category: "Electronics", price: 50000, stock: 0 },
        { name: "Mobiles", category: "Electronics", price: 400000, stock: 10 },
        { name: "Shirt", category: "Apparel", price: 10000, stock: 100 },
        { name: "Trousers", category: "Apparel", price: 150000, stock: 100 },
        { name: "Footwear", category: "Apparel", price: 50000, stock: 20 },
        { name: "Deodorants", category: "Apparel", price: 2000, stock: 0 },
        { name: "Wallets", category: "Apparel", price: 2500, stock: 5 },
        { name: "Coffee Maker", category: "Appliances", price: 20000, stock: 4 },
        { name: "AC", category: "Appliances", price: 90000, stock: 3 },
        { name: "Washing Machine", category: "Appliances", price: 300000, stock: 5 },
        { name: "Mixers", category: "Appliances", price: 50000, stock: 10 },
        { name: "Irons", category: "Appliances", price: 25000, stock: 10 },
        { name: "Book", category: "Stationery", price: 30, stock: 0 },
        { name: "Pencils", category: "Stationery", price: 20, stock: 20 },
        { name: "Pens", category: "Stationery", price: 50, stock: 0 },
        { name: "Crayons", category: "Stationery", price: 150, stock: 0 },
        { name: "Markers", category: "Stationery", price: 100, stock: 2 }
       ];


    function printProducts(product,index,array){
        console.log(`product:${JSON.stringify(product)}`);
    }
    // foreach loop to pring index and title
    function getProducts(goods){
        goods.forEach(printProducts);
    }

    var eleProducts = products.filter(function(product){ // All Electronics matching criteria
        return product.category == "Electronics";
    });

    // console.log(`Printing product details of Electronics`)
    // getProducts(eleProducts);

    let range = {lower:100000, upper:300000}

    console.log(`Printing product details where price range is between ${range.lower} and ${range.upper}`)
    var rngProducts = products.filter((product) => {
        return (product.price>=range.lower && product.price<=range.upper);//Multi
        },
        range);
    getProducts(rngProducts);

    // console.log(`Printing product details execluding outt of stock products`)
    //var availStock = products.filter((product) => (product.stock>0));
    // getProducts(availStock);
}

export default ProductDetails;