import "@styles/components/_bg-video.scss";

const BgVideo = ({ vidPoster, mp4Vid }) => {
    return (
        <>
            <video
                className="bg-vid"
                autoPlay="autoplay"
                loop="loop"
                muted="muted"
                poster={vidPoster}
            >
                <source src={mp4Vid} type="video/mp4" />
                Your browser does not support the video tag or the file format
                of this video.
            </video>
            <div className="video-clr-overlay"></div>
        </>
    );
};

export default BgVideo;
