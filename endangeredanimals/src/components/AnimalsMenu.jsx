const AnimalsMenu = () => {

    return (
    <div className = "AnimalsMenu">
        
        <div className="animalscard">
            <img src = "src\assets\hawksbill.jpg"></img>
            <div className="card-container">
                <h4>Hawksbill Sea Turtle</h4>
                <button type ="button">
                    <a href="https://www.fisheries.noaa.gov/species/hawksbill-turtle">Learn More</a>
                </button>
            </div>
        </div>
        <div className="animalscard">
            <img src ="src\assets\leatherback.jpg" ></img>
            <div className="card-container">
                <h4>Leatherback Sea Turtle</h4>
                <button type ="button">
                    <a href="https://www.fisheries.noaa.gov/species/leatherback-turtle">Learn More</a>
                </button>
            </div>
        </div>
        <div className="animalscard">
            <img src = "src\assets\monarch.jpeg"></img>
            <div className="card-container">
                <h4>Monarch butterfly</h4>
                <button type ="button">
                    <a href="https://www.worldwildlife.org/stories/migratory-monarch-butterfly-now-classified-as-endangered">Learn More</a>
                </button>
            </div>
        </div>
        <div className="animalscard">
            <img src="src\assets\northernbat.jpg" />
            <div className="card-container">
                <h4>Northern Long-Eared Bat</h4>    
                <button type ="button">
                    <a href="https://www.fws.gov/species/northern-long-eared-bat-myotis-septentrionalis">Learn More</a>
                </button>
            </div>
        </div>
        <div className="animalscard">
            <img src="src\assets\pipingplover.jpg" alt="" />
            <div className="card-container">
                <h4>Piping Plover</h4> 
                <button type ="button">
                    <a href="https://www.fws.gov/species/piping-plover-charadrius-melodus">Learn More</a>
                </button>
            </div>
        </div>
        <div className="animalscard">
            <img src="src\assets\redknot.jpg" alt="" />
            <div className="card-container">
                <h4>Red Knot</h4>
                <button type ="button">
                    <a href="https://www.fws.gov/species/red-knot-calidris-canutus">Learn More</a>
                </button>
            </div>
        </div>
        <div className="animalscard">
            <img src="src\assets\roseatetern.jpg" alt="" />
            <div className="card-container">
                <h4>Roseate Tern</h4>
                <button type ="button">
                    <a href="https://www.fws.gov/species/roseate-tern-sterna-dougallii-dougallii">Learn More</a>
                </button>
            </div>
        </div>
        <div className="animalscard">
            <img src = "src\assets\lakedaisy.jpg"></img>
            <div className="card-container">
                <h4>Lakeside Daisy</h4>
                <button type ="button">
                    <a href="https://www.fws.gov/species/lakeside-daisy-hymenoxys-herbacea">Learn More</a>
                </button>
            </div>
        </div>
        <div className="animalscard">
            <img src = "src\assets\beachamaranth.jpg"></img>
            <div className="card-container">
                <h4>Seabeach Amaranth</h4>
                <button type ="button">
                    <a href="https://www.fws.gov/species/seabeach-amaranth-amaranthus-pumilus">Learn More</a>
                </button>
            </div>
        </div>
        <div className="animalscard">
            <img src = "src\assets\tricolorbat.jpg"></img>
            <div className="card-container">
                <h4>Tricolored bat</h4>
                <button type ="button">
                    <a href="https://www.fws.gov/species/tricolored-bat-perimyotis-subflavus">Learn More</a>
                </button>
            </div>
        </div>
    </div>
        );
}

export default AnimalsMenu;