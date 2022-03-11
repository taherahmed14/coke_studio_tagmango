import "./music_card.css";

export const MusicCard = ({ currentSong }) => {
    return(
        <div className="musicCard">
            <div>
                <img className="cover" src={currentSong.cover_image} alt="cover_image" />
            </div>
            <div>
                <div className="song">{currentSong.song}</div>
                <div className="artist">{currentSong.artists}</div>
                <audio controls className="audio">
                    <source src={currentSong.url} type="audio/mpeg" />
                </audio>
            </div>
        </div>
    )
};