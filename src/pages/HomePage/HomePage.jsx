import Styles from './HomePage.module.css';
import Header from '../../components/multiple/Header';
import VideoCard from '../../components/single/VideoCard/VideoCard';
import VideoDisplayFilters from '../../components/single/VideoDisplayFilters/VideoDisplayFilters';

function HomePage(props) {

    return (
        <>
            <main>
                <Header />
                <div className={Styles.videoDisplayFiltersContainer}>
                    <VideoDisplayFilters />
                </div>
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