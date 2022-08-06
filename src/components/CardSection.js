import "../styles/CardSection.css";

function CardSection(props) {
  return (
    <div className="cardSection">
      {props.planetRenderOrder.map((element) => {
        return (
          <div
            className="planetCard"
            id={props.planets[element].name}
            onClick={(e) => {
              props.checkPlanetPicked(e.target.id)
              props.planetClicked();
            }}
          >
            <div className="img">
              <img
                id={props.planets[element].name}
                src={props.planets[element].imgSrc}
                alt="dsaf"
              ></img>
            </div>
            <div className="planetName" id={props.planets[element].name}>
              <h4>{props.planets[element].name}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardSection;
