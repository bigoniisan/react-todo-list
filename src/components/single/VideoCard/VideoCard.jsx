import Styles from './VideoCard.module.css';

// gets video thumbnail from somewhere
function VideoCard(props) {

    const videoData = {
        videoTitle: "TTHHEYEYEYYE",
        channelName: "channel name",
        uploadedDate: "20/1/2022",
        views: 5007,
        videoDuration: "5:09"
    }

    return (
        <>
            <div className={Styles.card}>
                <a href="#">
                    <img src="https://picsum.photos/200/125" alt="" />
                </a>
                <div className={Styles.videoDuration}>
                    {videoData.videoDuration}
                </div>
                <div className={Styles.videoTitle}>
                    {videoData.videoTitle}
                </div>
                <div className={Styles.channelName}>
                    {videoData.channelName}
                </div>
                <div className={Styles.subtitleContainer}>
                    {videoData.views} {videoData.uploadedDate}
                </div>
            </div>
        </>
    );
}

export default VideoCard;