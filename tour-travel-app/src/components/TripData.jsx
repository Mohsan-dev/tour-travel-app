import Trip from "./Trip";
import './TripStyle.css'

function TripData({image, heading ,text}) {
    return ( 
        <div className="t-card">
            <div className="t-img">
                <img src={image} alt="trip img" />
            </div>
            <h4>{heading}</h4>
            <p>{text}</p>
        </div>
     );
}

export default TripData;