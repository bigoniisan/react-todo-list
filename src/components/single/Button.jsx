function Button(props) {

    // each Button has one (item) currently

    // e.preventDefault() prevents auto page refresh after form submit

    console.log(props.data);

    return (
        <>
            <div className="testContainer">
                <h1>{props.data._id}</h1>
            </div>
        </>
    ) 
}

export default Button;