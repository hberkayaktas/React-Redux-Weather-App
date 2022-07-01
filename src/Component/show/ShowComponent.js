import { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getWeatherAsync } from "../../Redux/weatherSlice";



function FetchComponent() {
  const TakeallData = useSelector((state) => state.textG.items);
  const isLoadingState = useSelector((state) => state.textG.isLoading);
  const errorState = useSelector((state) => state.textG.error);
  const dispatch = useDispatch();
  const [dayIndex, setDayIndex] = useState(0);

  //console.log(TakeallData)
  useEffect(() => { 
    dispatch(getWeatherAsync("Adana"));
  }, []);
  

  let day_index = new Date().getDay();
  let Day_turk = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let weatherImages ={
    "orta şiddetli yağmur": "https://cdn-icons-png.flaticon.com/512/1163/1163626.png",
    "parçalı bulutlu": "https://cdn-icons-png.flaticon.com/512/1146/1146869.png",
    "hafif yağmur": "https://cdn-icons-png.flaticon.com/512/1163/1163657.png",
    "açık": "https://cdn-icons-png.flaticon.com/512/869/869869.png",
    "kapalı": "https://cdn-icons-png.flaticon.com/512/1163/1163634.png",
    "parçalı az bulutlu":"https://cdn-icons-png.flaticon.com/512/3208/3208752.png",
    "az bulutlu":"https://cdn-icons-png.flaticon.com/512/4064/4064276.png",
    "şiddetli yağmur":"https://cdn-icons-png.flaticon.com/512/1146/1146860.png",
  }
  if(isLoadingState){
    return <div>Loading...</div>
  }
  if(errorState){
    return <div>Error : {errorState} A simple danger alert</div>
  }

  return (
    <div>
      <div className="card-group m-2">
        {TakeallData &&
          TakeallData.list.map((q, index) => (
            <div key={index} className={`card ${index === 0 ? "bg-light":"border-0" }`} data={dayIndex}>
              <div className="card-body">
              <p style={{display:"none"}}>
                {(day_index + index)%7}
              </p>
                <h5 className="card-title text-center">{Day_turk[(day_index + index)%7]}</h5>
                <p className="card-text text-center">
                  {q.weather[0].description === "parçalı bulutlu"
                    ? <img src={weatherImages["parçalı bulutlu"]} width="50" alt="#" height="50"/>
                    : null}
                  {q.weather[0].description === "kapalı"
                    ? <img src={weatherImages["kapalı"]} width="50" alt="#" height="50"/>
                    : null}
                  {q.weather[0].description === "hafif yağmur"
                    ? <img src={weatherImages["hafif yağmur"]} width="50" alt="#" height="50"/>
                    : null}
                  {q.weather[0].description === "açık"
                    ? <img src={weatherImages["açık"]} width="50" alt="#" height="50"/>
                    : null}
                  {q.weather[0].description === "parçalı az bulutlu"
                    ? <img src={weatherImages["parçalı az bulutlu"]} width="50" height="50" alt="#" />
                    : null}  
                  {q.weather[0].description === "orta şiddetli yağmur"
                    ? <img src={weatherImages["orta şiddetli yağmur"]} width="50" height="50" alt="#"/>
                    : null} 
                  {q.weather[0].description === "az bulutlu"
                    ? <img src={weatherImages["az bulutlu"]} width="50" height="50" alt="#"/>
                    : null} 
                  {q.weather[0].description === "şiddetli yağmur"
                    ? <img src={weatherImages["şiddetli yağmur"]} width="50" height="50" alt="#"/>
                    : null} 
                </p>
                <p className="card-text text-center">
                  
                    {q.weather[0].description}
                  
                </p>
                <p className="card-text text-center">
                  <small className="text-muted "> 
                  Max | Min
                  <br/>
                  {JSON.stringify(q.main.temp_max)} | {JSON.stringify(q.main.temp_min)}
                  </small> </p>
                
                <p className="card-text text-center">
                  {/* {console.log(JSON.stringify(q))} */}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FetchComponent;
