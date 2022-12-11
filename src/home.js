// dah keda el component el asasi .. mesh bya3mel 7aga .. byraga3 jxx .. instead of html 
import Card from "./Card";
// imprort state
import React from "react";
import Dropdown from "./Dropdown";

// import the syncfusion package

// import card from "./card";
const Home = () => {
    //http://localhost:3000/

    const letters = ['B', 'B', 'C'];
    let data = [
        { title: "Learn React", priority: "high" },
        { title: "Learn C++", priority: "high" },
        { title: "Play video games", priority: "medium" },
        { title: "Smoking shisha -> Sawires", priority: "medium" },
        { title: "Eating Molto -> Rouby", priority: "high" },
        { title: "Doing weed", priority: "low" },
        { title: "Getting dope", priority: "medium" },
    ]

    // create a usestate high_value2

    const [high_values2, setHigh_values2] = React.useState(
        [
            { title: "Learn React2", priority: "high" },
            { title: "Learn C++2", priority: "high" },
            { title: "Eating Molto -> Rouby2", priority: "high" }
        ]
    );
    const [medium_values2, setMedium_values2] = React.useState(
        [
            { title: "Play video games", priority: "medium" },
            { title: "Smoking shisha -> Sawires", priority: "medium" },
            { title: "Getting dope", priority: "medium" },
        ]
    );
    const [low_values2, setLow_values2] = React.useState(
        [
            { title: "Doing weed", priority: "low" },
        ]
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
        console.log(event.target.text_value.value);
        if (card_name == "" || card_name == null) return;
        if (selected === "high") {
            add_high_task({ title: card_name, priority: selected })
        }
        else if (selected === "medium") {
            add_medium_task({ title: card_name, priority: selected })
        }
        else if (selected === "low") {
            add_low_task({ title: card_name, priority: selected })
        }
    };



    const high_values = data.filter((e) => { return e.priority === "high" })
    const medium_values = data.filter((e) => { return e.priority === "medium" })
    const low_values = data.filter((e) => { return e.priority === "low" })

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
            <div>
                <h4>High</h4>
                <Card high_values2={high_values2}  setHigh_values2={ setHigh_values2 } />
            </div>
            {/* <hr />
            <div>
                <h4>Medium</h4>
                <Card array={medium_values2} />
            </div>
            <hr />
            <div>
                <h4>Low</h4>
                <Card array={low_values2} />
            </div> */}

        </div>

    );
};
export default Home;