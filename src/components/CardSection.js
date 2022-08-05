import "../styles/CardSection.css"

function CardSection(props) {
    console.log(props.planets[0].name);
    return(
        <div className="cardSection">
            {props.planets.map(element => {
                return(<div className="planetCard" id={element.name}>
                  <div className="img">
                    <img src={element.imgSrc}></img>
                  </div>
                  <div className="planetName">
                    <h4>{element.name}</h4>
                  </div>
                </div>)
            })}

            {/* <div className="planetCard">
                sd
            </div> */}
     
        </div>
    )
}

export default CardSection;