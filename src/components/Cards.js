import React from 'react'

function Cards(props) {
    const {title, image} = props
    return (
        <div className='carsd-wrapper'>
            <div className="card">
                <div className="image-wrapper">
                    <img src={image} alt="picsum"/>
                </div>
                <h3 className="title-of-card">{title }</h3>
                <p className="card-discription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi distinctio, aperiam nobis nostrum recusandae voluptatibus quam totam non, quaerat repellat officia. Ducimus, ab labore doloremque quo sint velit maxime nemo!</p>
                <button type='button'>Learn more</button>
            </div>
        </div>
    )
}

export default Cards
