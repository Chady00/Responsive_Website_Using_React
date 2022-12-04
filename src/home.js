// dah keda el component el asasi .. mesh bya3mel 7aga .. byraga3 jxx .. instead of html 
const Home = () => {
    //http://localhost:3000/

    const letters = ['c', 's', 's'];
    const data = [
        { title: "Learn React", priority: "high" },
        { title: "Learn C++", priority: "high" },
        { title: "Play video games", priority: "medium" },
        { title: "Do the homework", priority: "medium" },
    ]

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
            <div className="search_div">
                <input id="search_box" type="search" placeholder="Type The Task.." />
                <div id="search_b1">
                    <button type="button" class="btn btn-danger">Priority</button>
                </div>
                <div id="search_b2">
                    <button type="button" class="btn btn-primary">Add</button>
                </div>
            </div>
            <div id="to_do">
                <h4> To do List</h4>
            </div>
            <div>
                {
                    data.map((element) => {
                        return (
                            [
                                < span className="row row2" id="tk" >
                                    <span className="col-sm-6">
                                        <span className="card">
                                            <span className="card-body">
                                                <h5 className="card-title">{element.title}</h5>
                                                <p className="card-text">{element.priority}</p>
                                            </span>
                                        </span>
                                    </span>
                                </span >
                            ]
                        );
                    })
                }
            </div>
        </div>


    );
};
export default Home;