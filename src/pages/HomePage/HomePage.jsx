import Styles from './HomePage.module.css';
import Header from '../../components/multiple/Header';
import VideoCard from '../../components/single/VideoCard/VideoCard';

function HomePage(props) {

    return (
        <>
            <Header />
            <main>
                <form className={Styles.videoDisplayFilters} action='#' method='POST'>
                    <button className={Styles.diplayFilterButton}>ROWS</button>
                    <button className={Styles.diplayFilterButton}>GRID</button>
                    <select className={Styles.dropdownFilters} name="dropdownFilters" id="">
                        <option className={Styles.dropdownFilter} value="mostPopular">Most Popular</option>
                        <option className={Styles.dropdownFilter} value="mostViews">Most Views</option>
                        <option className={Styles.dropdownFilter} value="mostRecent">Most Recent</option>
                        <option className={Styles.dropdownFilter} value="oldest">Oldest</option>
                    </select>
                </form>
                <div className={Styles.videocardContainer}>
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                </div>
                
            </main>
        </>
    )
}

export default HomePage;