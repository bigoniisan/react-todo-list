function SearchBar() {

    const styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    return (
        <>
            <form action="#" method="post" style={styles}>
                <input type="search" name="" value="" />
                <input type="submit" value="search" />
            </form>
        </>
    );
}

export default SearchBar;