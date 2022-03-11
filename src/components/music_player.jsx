import { useEffect, useState } from "react"
import { MusicCard } from "./music_card";

export const MusicPlayer = () => {

    const [allSongs, setAllSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentSong, setCurrentSong] = useState();
    const [count, setCount] = useState(0);

    useEffect(() => {
        getSongs();
    }, []);

    useEffect(() => {
        setCurrentSong(allSongs[count]);
    }, [count]);

    const getSongs = () => {
        fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json")
        .then((d) => d.json())
        .then((res) => {
            // console.log(res);
            setAllSongs(res);
            setCurrentSong(res[0]);
            setLoading(false);
        })
        .catch((e) => console.log(e));
    };

    const handlePrevious = () => {
        if(count > 0) {
            setCount(p => p-1);
        }
    };

    const handleNext = () => {
        if(count < allSongs.length-1) {
            setCount(p => p+1);
        }
    };

    // console.log(allSongs);
    // console.log(allSongs[0]);
    // console.log(count);
    // console.log(currentSong);

    return(
        <div className="mainCard">
            <div className="logo">
                <img src="logo.jpg" alt="Coke_Studio" />
            </div>
            {count < 1 ? 
            <div className="prevBtn" disabled>
                <img onClick={handlePrevious} src="https://img.icons8.com/ios-glyphs/30/000000/back.png" alt="previous" />
            </div> :
            <div className="prevBtn">
                <img onClick={handlePrevious} src="https://img.icons8.com/ios-glyphs/30/000000/back.png" alt="previous" />
            </div> 
            } 
            {loading ? "Loading.." : <MusicCard currentSong={currentSong} />}
            {count >= allSongs.length ?
            <div className="nextBtn" disabled>
                <img onClick={handleNext} src="https://img.icons8.com/ios-glyphs/30/000000/forward.png" alt="next" />
            </div> :
            <div className="nextBtn">
                <img onClick={handleNext} src="https://img.icons8.com/ios-glyphs/30/000000/forward.png" alt="next" />
            </div> 
            }
        </div>
    )
}