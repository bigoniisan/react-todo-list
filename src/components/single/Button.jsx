function Button(props) {

    // each Button has one (item) currently

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