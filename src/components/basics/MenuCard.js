import React from 'react'

function MenuCard({ menuData }) {
    return (
        <React.Fragment>
            <section className="main-card--cointainer">
                {menuData.map(menu => {
                    const { id, category, name, description, image } = menu
                    return (
                        <React.Fragment>
                            <div className="card-container" key={id} >
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-name card-circle subtle">{id}</span>
                                        <span className="card-author subtle">{category}</span>
                                        <h3 className="card-title">{name}</h3>
                                        <span className="card-description subtle">{description}</span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img src={image} alt="images" className="card-media" />
                                    <span className="card-tag subtle">Order Now</span>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </section>
        </React.Fragment>
    )
}

export default MenuCard