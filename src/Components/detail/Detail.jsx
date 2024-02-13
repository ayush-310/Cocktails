import React from 'react'
import { useParams } from 'react-router-dom/dist';
import data from "../cards/CardData.json"
import { Navbar } from "../navbar/Navbar"
import "../detail/Detail.css";
import { Link } from "react-router-dom"

export const Detail = () => {
    const { id } = useParams();

    const selectedCard = data.find(card => card.id === parseInt(id));

    if (!selectedCard) {
        return <div>Card not found</div>;
    }

    return (
        <div>
            <Navbar />

            <div className='container'>
                <div className='cocktails-center'>
                    <div className='cocktail  mm'>
                        <div className='box1'>
                            <img className='drink-img' src={selectedCard.img} alt={selectedCard.name} style={{ borderRadius: "17px", margin: "0" }} />
                        </div>

                        <div className='box2' >
                            <p >
                                <span>Name : </span>   {selectedCard.name}
                            </p>
                            <p >
                                <span>Category : </span>  {selectedCard.category}
                            </p>
                            <p className='drink-info'>
                                <span>Info : </span>  {selectedCard.info}
                            </p>
                            <p className='.section-title'>
                                <span>Glass : </span>{selectedCard.glass}
                            </p>
                            <p className='drink-info'>
                                <span>Instruction : </span> {selectedCard.instruction}
                            </p>
                            <p className='drink-info'>
                                <span>Ingredients : </span> {selectedCard.ingredients}
                            </p>
                            <div className='qq'>
                                <p><Link to="/" class="button-40"> Back</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
