import Styles from './HomePage.module.css';
import Header from '../../components/multiple/Header';
import VideoCard from '../../components/single/VideoCard/VideoCard';
import VideoDisplayFilters from '../../components/single/VideoDisplayFilters/VideoDisplayFilters';
import Button from '../../components/single/Button';
import { useEffect, useState } from 'react';

function HomePage(props) {

    const [items, setItems] = useState(null);
    const [allVideoData, setAllVideoData] = useState(null);

    // useEffect fires a function when the component is rendered
    // second argument is the dependency array for when to call the function
    useEffect(() => { 
        // when HomePage is rendered, fetch items from the api
        // in the backend
        const fetchItems = async () => {
            const response = await fetch('http://localhost:5000/api/test')
            const data = await response.json();
            if (response.ok) {
                setItems(data);
            }
        }

        fetchItems();
    }, []) 

    useEffect(() => {
        const fetchAllVideoData = async () => {
            const response = await fetch("http://localhost:5000/api/video", {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json'
                }
            });
            const data = await response.json();
            if (response.ok) {
                setAllVideoData(data);
            } else {
                console.log("Could not fetch all video data");
            }
        }
        fetchAllVideoData();
    }, [])

    return (
        <>
            <main>
                <Header />
                {/* React child(singular) should be type of primitive data type not 
                object or it could be JSX tag(which is not in our case). 
                Use Proptypes package in development to make sure validation happens. */}
                
                {/* { items && items.map((item) => {<Button data={item}/>}) }
                In the second case with {} you haven't return an ui component 
                which is why it isn't working, where as in () it treats the contents 
                as the return block.*/}

                { items && items.map((item) => {
                    return <Button key={item._id} data={item}/>
                }) }
                
                <div className={Styles.videoDisplayFiltersContainer}>
                    <VideoDisplayFilters />
                </div>
                <div className={Styles.videocardContainer}>

                    { allVideoData && allVideoData.map((videoData) => {
                        console.log(allVideoData.length);
                        return <VideoCard key={videoData._id} videoData={videoData} />
                    }) }
                    
                </div>
                
            </main>
        </>
    )
}

export default HomePage;