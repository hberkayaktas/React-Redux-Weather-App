import { useDispatch } from "react-redux";
import { getWeatherAsync } from "../../Redux/weatherSlice";


function FetchComponent() {
  const dispatch = useDispatch();
  const countryList = ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin", "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Iğdır", "Isparta", "İstanbul", "İzmir", "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis", "Kırıkkale", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Mardin", "Mersin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Şanlıurfa", "Siirt", "Sinop", "Sivas", "Şırnak", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak"];


  const handleChange = (value) => {
    console.log(value);
    dispatch(getWeatherAsync(value));
  }

  return (
    
      <div className="row bg-light justify-content-center pb-2 w-100">
        <div className="col-md-8">
          <h1>Weather app</h1>
          <form>
            <select
              className="form-control"
              name="country"
              onChange={(e)=> handleChange(e.target.value)}
            >
              {countryList.map((country,index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
           
          </form>
        </div>
      </div>
    
  );
}

export default FetchComponent;
