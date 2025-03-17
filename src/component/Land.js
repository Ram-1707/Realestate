



import { useNavigate } from 'react-router-dom';
import "./land.css";
import "bootstrap/dist/css/bootstrap.min.css";


const products = [
  { id: 1, name: 'Maraimalai Nagar, Chennai', price: '₹55L', img: 'img/images/images (1).jpg',PlotArea:'660 Sq.Ft' , Owner:'Guru',Details:'Near and Calm Place . Corner Plot .Near Vinayagar Temple.Near Ramachandra Hospital,Near VGN Grandeur,Near Casa Grande Apartments, Near Metro station.Near Ramachandra Medical College.Big 24 Feet Road . Construction till three floors makes it very lucrative business option for apartments.' },
  { id: 2, name: 'Plot in Tiruvallur Chennai', price: '₹35.5L', img: 'img/images/images (2).jpg',PlotArea:'500 Sq.Ft', Owner:'Harish',Details:'Explore 27 affordable plots for sale in Thiruvallur, Chennai. With essential amenities and offers DTCP-approved plots, perfect for building your dream home or growing your investment portfolio. This development is designed for a comfortable and modern lifestyle. Plots are limited, and opportunities like this don’t last long. Visit SPD Chitra Nagar to explore the ideal location for your dream home. Act now your perfect plot awaits!' },
  { id: 3, name: 'Plot in Ambattur Chennai', price: '₹65L', img: 'img/images/images (3).jpg',PlotArea:'800 Sq.Ft', Owner:'Sarathi',Details:'VGN Classique offers gated community plots in Ambattur. A nice locality where you can find affordable land parcels. This opulent land is developed by VGN Homes and they have included several wow-worthy amenities like a kids play area, a joggers track, and a yoga deck. In total, this gated community offers 252 plots with a full-on security system.' },
  { id: 4, name: ' Plot for Sale in Siruseri, Chennai', price: '₹61L', img: 'img/images/images (4).jpg',PlotArea:'750 Sq.Ft', Owner:'Pradeep',Details:'Staar Amethyst is a wonderful plotted development by the famous Staar Homes, here they present these approved plots in Siruseri. These plots are a wonderful choice for building your dream home, and they come planned with black-top roads. Covering a site of 1.47 acres, there are 44 plots for sale in this community that are securely located inside a gated community.' },
  { id: 5, name: ' Plot for Sale in Oragadam, Chennai', price: '₹21L', img: 'img/images/images (5).jpg',PlotArea:'350 Sq.Ft', Owner:'tarun',Details:'Find 2000 plots in Oragadam, Chennai. That is your chance to own the home you have always imagined to have or invest in an emerging community. The residential complex offers top-notch facilities to live a comfortable finest life, SIS Golden Gate ensures an unforgettable lifestyle. Whether you are building towards your future or making smart investments, Visit today and claim your perfect plot!' },
  { id: 6, name: 'Plot for Sale in Tambaram, Chennai', price: '₹45.5L', img: 'img/images/images (6).jpg',PlotArea:'560 Sq.Ft', Owner:'Madhan',Details:'DAC Avenue One is a gated community planned with several residential plots in Tambaram. Developed by DAC Developers this land spans 2.94 Acres and offers 79 residential plots for sale in this premium residential area. These plots are all served by all basic amenities like kids play area and parks.' },
  { id: 7, name: ' Plot for Sale in Kalavakkam, Chennai', price: '₹40L', img: 'img/images/images (7).jpg',PlotArea:'500 Sq.Ft', Owner:'Kottaisamy',Details:'Explore affordability plots for sale in Kalavakkam, Chennai! With affordable pricing, essential amenities, a gated community, and the perfect chance to invest in your future. Whether you’re building your dream home or securing a promising investment, RPS Garden offers the ideal foundation for your plans. With only 84 plots available, act fast to secure your spot in this premium development!' },
  { id: 8, name: 'Plot for Sale in Ottiambakkam, Chennai', price: '₹60L', img: 'img/images/images (8).jpg',PlotArea:'750 Sq.Ft',Owner:'Soundar',Details:'Mangals Foundations presents us with this great community that offers plots in Ottiambakkam. This gated community is called Mount Castle, and these plots are all residential in nature. Split into sizable plots, these plots are a fine choice for both investors and end users. Plus, these plots enjoy basic amenities.' },
];

function Land() {
  const navigate = useNavigate();
  

  const handleViewDetails = (product) => {
    navigate(`/Details/id:${product.id}`, { state: product });
  };
 

  return (
 
   
    <div  className='p-1 homebg' >
     
    
         
   
      <div className=" container product-catalog">
       
        
        {products.map((product) => (
          <div key={product.id} className="product-card">
           
            <img src={product.img} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button
              className="view-details-btn"
              onClick={() => handleViewDetails(product)}
            >
              view details
            </button>
          </div>
        ))}
      </div>
    </div>
 
   
  );
}

export default Land;
