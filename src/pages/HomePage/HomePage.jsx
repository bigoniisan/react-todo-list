import Styles from './HomePage.module.css';
import Header from '../../components/multiple/Header';
import VideoCard from '../../components/single/VideoCard';

function HomePage(props) {

    return (
        <>
            <Header />
            <main>
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
                </div>
                
            </main>
        </>
    )
}

export default HomePage;