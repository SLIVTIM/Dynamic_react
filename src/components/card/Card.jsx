import { useState, useEffect } from "react"
import './Card.css'
import '@fontsource-variable/sora'

function Card() {
    const [cardData, setCardData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const url = 'https://raw.githubusercontent.com/SLIVTIM/Dynamic_react_data/refs/heads/main/card_data.json'

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setCardData(res)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <div className="loading-state">Loading cards...</div>
    }

    return (
        <>
            {cardData.map((card) => {
                return ( 
                    <section className="each-card" key={card.id}>
                        <article className="card-left-part">
                            <img src={card.logo} alt={`${card.title}_logo`} />
                            <h2>{card.title}</h2>
                        </article>
                        <article className="card-right-part">
                            <p>{card.description}</p>
                            <div className={
                                card.level === 'Beginner' ? 'level-indicator-beginner'  :
                                card.level === 'Intermediate' ? 'level-indicator-intermediate' :
                                'level-indicator-advanced'
                            }>
                                <h3>{card.level}</h3>
                            </div>
                        </article>
                    </section>
                )
            })}    
        </>
    )
}


export default Card