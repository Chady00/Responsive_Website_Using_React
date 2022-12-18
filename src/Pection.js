
const Pection = (props) => {
const data = props.object;

    return (
        <div className="col">
        <h4>{data.title}</h4>
        <ul className="list-unstyled">
            <li>{data.content[0].a}</li>
            <li>{data.content[1].b}</li>
            <li>{data.content[2].c}</li>
        </ul>
    </div>
    );
    }
    export default Pection;