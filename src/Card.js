


const Card = (props) => {

    const array = props.array;
    const title = props.title;
    const fn_name = props.fn_name;
    //  console.log(array);
    if (array.length === 0) return <></>


    return (
        <>
            <h5 style={{ color: "rgb(96, 154, 253)", fontWeight: "bold", fontFamily: "Fac" }}>{title}</h5>
            {
                array.map((element) => {
                    return (
                        <span className="row row2" onClick={() => fn_name(array, element.id)} >
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
            }
            <hr style={{ borderTop: "3px solid black ", }} />
        </>
    );
}

export default Card;
