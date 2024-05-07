
function WeatherCard(props){
    console.log("Props ");
    console.log(props);
    return  <tr  key ={props.index}>
         <td >{props.day}</td>
         <td>{props.condition}</td>
         <td>{props.temperature}</td>
     </tr>
}

export default WeatherCard;