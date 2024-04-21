import Styles from './VideoCard.module.css';
import { format } from 'date-fns';

// gets video thumbnail from somewhere
function VideoCard(props) {

    const videoId = props.key;
    const videoData = props.videoData;
    const {
        _id,
        title,
        description,
        url,
        channelName,
        thumbnail,
        duration,
        tags,
        views,
        likes,
        dislikes,
        playbackPosition,
        playbackStatus,
        uploadDate,
        updatedAt,
        createdAt,
    } = videoData;

    const formattedDate = format(uploadDate, 'yyyy/MM/dd');

    return (
        <>
            <div className={Styles.card}>
                <a href={url}>
                    <img src={thumbnail} alt="" />
                </a>
                <div className={Styles.videoDuration}>
                    {"Duration: " + duration}
                </div>
                <div className={Styles.videoTitle}>
                    {title}
                </div>
                <div className={Styles.channelName}>
                    {channelName}
                </div>
                <div className={Styles.subtitleContainer}>
                    {views} {formattedDate}
                </div>
            </div>
        </>
    );
}

export default VideoCard;