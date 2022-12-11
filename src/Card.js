


const Card = ({ high_values2, setHigh_values2 }) => {

    // const array = props.array;
    //  console.log(array);

    function deleter(e, element) {
        console.log("delete");

        setHigh_values2(high_values2.splice(0, 1));
        console.log(high_values2);
    }
    return (
        high_values2.map((element) => {
            return (

                <span className="row row2" id="tk" onClick={(e, element) => deleter(e, element)}>
                    <span className="col-sm-6">
                        <span className="card">
                            <span className="card-body">
                                <h5 className="card-title">{element.title}</h5>
                                <p className="card-text">{element.priority}</p>
                            </span>
                        </span>
                    </span>
                </span >
            );
        })
    );
}

export default Card;
