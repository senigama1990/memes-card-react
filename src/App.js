import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Cards from './components/Cards';

function App() {
    const [memesCard, setMemesCard] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const memesApi = async () => {
            const res = await axios.get("https://api.imgflip.com/get_memes")
            // console.log(res.data.data.memes)
            setMemesCard(res.data.data.memes)
            setLoading(false)
        }

        memesApi()
    }, [])
    
    return (
        <div className="App">
            <h1>Memes cards</h1>
            {loading && <h1>Loading...</h1>}
            <div className="cards-wrapper">
                {memesCard && memesCard.map((eachMem) => {
                    <Cards/>
                })}
                {memesCard.map((eachCard) => {
                    return <Cards key={eachCard.id} title={eachCard.name} image={eachCard.url}/>
                })}
            </div>
        </div>
    );
}

export default App;
