// dah keda el component el asasi .. mesh bya3mel 7aga .. byraga3 jxx .. instead of html 
import Card from "./Card";
// imprort state
import React from "react";
import Dropdown from "./Dropdown";
import { useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from "axios";
// import the syncfusion package

// import card from "./card";
const Home = () => {
    //http://localhost:3000/

    const letters = ['T', 'O', '.', 'D', 'O'];
    // let data = [
    //     { title: "Learn React", priority: "high", id: "1" },
    //     { title: "Learn C++", priority: "high", id: "2" },
    //     { title: "Play video games", priority: "medium", id: "1" },
    //     { title: "Smoking shisha -> Sawires", priority: "medium", id: "2" },
    //     { title: "Eating Molto -> Rouby", priority: "high", id: "3" },
    //     { title: "Doing weed", priority: "low", id: "1" },
    //     { title: "Getting dope", priority: "medium", id: "3" },
    // ]
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);


    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:8000/data")
            .then((data) => { return data.json() })
            .then((data) => { setData(data) })
            .then(() => { setLoading(false) })
            .catch((err) => { console.log(err) })
    }, []);


    // create a useEffect for high_values2
    useEffect(() => {
        setHigh_values2(data.filter((item) => { return item.priority === "high" }))
        setMedium_values2(data.filter((item) => { return item.priority === "medium" }))
        setLow_values2(data.filter((item) => { return item.priority === "low" }))
    }, [data])



    //wait until data is 
    const handleDelete = (array_type, id) => {
        const x = array_type.filter((item) => { return item.id !== id })
        if (array_type === high_values2) {
            setHigh_values2(x)
        }
        else if (array_type === medium_values2) {
            setMedium_values2(x)
        }
        else if (array_type === low_values2) {
            setLow_values2(x)
        }
        fetch(`http://localhost:8000/data/${id}`, { method: 'DELETE' })

    }
    // create a usestate high_value2
    // console.log(data.filter((item) => { return item.priority === "high" }));
    const [high_values2, setHigh_values2] = React.useState(
        []
    );

    const [medium_values2, setMedium_values2] = React.useState(
        []
    );
    const [low_values2, setLow_values2] = React.useState(
        []
    );

    //create a use state for selected item from dropdown
    const [selected, setSelected] = React.useState("Priority");



    function add_high_task(item) {
        const updated = [
            // copy the current users state
            ...high_values2,
            // now you can add a new object to add to the array
            item
        ];

        setHigh_values2(updated);
    };
    function add_medium_task(item) {
        const updated = [
            // copy the current users state
            ...medium_values2,
            // now you can add a new object to add to the array
            item
        ];
        console.log(updated);
        setMedium_values2(updated);
    };
    function add_low_task(item) {
        const updated = [
            // copy the current users state
            ...low_values2,
            // now you can add a new object to add to the array
            item
        ];
        console.log(updated);
        setLow_values2(updated);
    };

    const determine_priority = (event) => {
        event.preventDefault();
        const card_name = event.target.text_value.value;
        //  console.log(event.target.text_value.value);
        //  console.log(high_values2);
        //  console.log((high_values2[high_values2.length - 1]).id + 1);
        if (card_name === "" || card_name == null) return;
        let id_val = 1;
        let item = { title: card_name, priority: selected, id: id_val }
        if (selected === "high") {
            id_val = high_values2.length > 0 ? (high_values2[high_values2.length - 1]).id + 1 : 1;
            add_high_task(item)
        }
        else if (selected === "medium") {
            id_val = medium_values2.length > 0 ? (medium_values2[medium_values2.length - 1]).id + 1 : 1;
            add_medium_task(item)
        }
        else if (selected === "low") {
            id_val = low_values2.length > 0 ? (low_values2[low_values2.length - 1]).id + 1 : 1;
            add_low_task(item)
        }
        const updated = [...data, item];
        setData(updated)
        axios.put("http://localhost:8000/data", data);
    };


    return (

        <div className="general">
            <div className="header">
                <div>
                    {letters.map((name) => { return <span class="home_pret"><h3 id='h3_home'>{name}</h3></span> })}
                </div>
                <div id="link1_h">
                    <h6 >Link1</h6>
                </div>
                <div class="vl"></div>
                <div id="link2_h">
                    <h6>Link2</h6>
                </div>
                <div class="vl2"></div>
                <div id="bootstrap_home_button">
                    <button type="button" class="btn btn-light" >Button</button>
                </div>
            </div>
            <form className="search_div" onSubmit={event => determine_priority(event)}>
                <input id="search_box" type="text" name="text_value" placeholder="Type The Task.." />
                <div className="search_b1">
                    <Dropdown selected={selected} setSelected={setSelected} />
                </div>
                <div id="search_b2">
                    <button class="btn btn-primary" >Add</button>
                </div>
            </form>
            <div id="to_do">
                <h4> To do List</h4>
            </div>

            <div >
                {loading ? <div> <PacmanLoader
                    color="#529B88"
                    cssOverride={{}}
                    margin={0}
                    size={30}
                    speedMultiplier={2}
                    style={{ position: "fixed", top: "35%", left: "45%", transform: "translate(-50%, -50%)" }} />
                    <h2 style={{ position: "fixed", top: "50%", left: "42%", fontFamily: "Fac" }}>
                        Fetching Data</h2></div> : null}
                {data && <Card array={high_values2} title={"HIGH"} fn_name={handleDelete} />}
            </div>

            <div>

                {data && <Card array={medium_values2} title={"MEDIUM"} fn_name={handleDelete} />}
            </div>

            <div>

                {data && <Card array={low_values2} title={"LOW"} fn_name={handleDelete} />}
            </div>

        </div>

    );
};
export default Home;