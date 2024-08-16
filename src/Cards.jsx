import quarto1 from './imgs/quarto1.jpg';
import quarto2 from './imgs/quarto2.jpg'
import quarto3 from './imgs/quarto3.jpg'

function Card(){

    function Reserva(){
        document.addEventListener("click", () =>{
            alert("Reserva Concluída")
        } )
    }
        return(
            <>
            <div className="container">
               <div className="card1">
               <img src={quarto1} alt="" />
                <h2>Quarto 1</h2>
                <p>Quarto individual </p>
                <div className="midias">
                    <button onClick={Reserva}>Reservar</button>
                </div>
               </div>

               <div className="card2">
               <img src={quarto1} alt="" />
                <h2>Quarto 2</h2>
                <p>Quarto duplo </p>
                <div className="midias">
                <button onClick={Reserva}>Reservar</button>
                </div>
               </div>

               <div className="card3">
               <img src={quarto1} alt="" />
                <h2>Quarto 3</h2>
                <p>Quarto triplo </p>
                <div className="midias">
                <button onClick={Reserva}>Reservar</button>
                </div>
               </div>
            </div>

           
           
            
            </>
        )
}

export default Card;