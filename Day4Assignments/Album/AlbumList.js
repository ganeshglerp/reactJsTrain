import { useEffect, useState } from "react";
// The component should have a state variable posts to store the list of posts fetched from the API.
// we will javascript fetch API to fetch the data from the API endpoint.
 
function AlbumList() {
    let [posts, setPosts] = useState([]);
    // handle loading message
    // handle error message
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState("");
 
 
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts",
        )
            .then((response) =>
                {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error("Failed to fetch data");
                }
        )
        .then((data) => {
            console.log(data);
            setPosts(data)
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
            setError("Failed to fetch data");
        })
    }, []);
 
    // if (loading) {
    //     return<h1>Loading...</h1>
    // }
 
    // if (error) {
    //     return <h1>{error}</h1>
    // }
 
    function loadDiv(){
        let x =  
        <div className="container">
            <div className="tablediv" key="tablediv1">
            <table className="tablediv" >
                <thead>
                    <tr>
                        <th>Title</th>
                    </tr>
                </thead>
                    <tbody>
                        {posts.map((data) => (//JSX : Java Script XML                    
                            <tr  key ={data.id} className="tdtr">
                                <td className="hover-text">{data.title}
                                <span className="tooltip-text">{data.body}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
            </table>
            </div>
        </div>

        return x;
    };
    
    return (
        <div>
            <h1>Album Post List</h1>
 
            {/* if loading show loading message else show postlist */}
 
                {loading ? <h1>Loading...</h1> : (error != "") ? <h1>{error}</h1> :loadDiv() }
             
        </div>
    );
}
 
export default AlbumList;