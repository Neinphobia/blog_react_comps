import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Üzgünüm</h2>
            <p>Sayfa bulunamadı.</p>
            <Link to="/">Ana sayfaya geri dön...</Link>
        </div>
     );
}
 
export default NotFound;