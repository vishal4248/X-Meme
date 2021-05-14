import useFetch from "../memes/useFetch";
import MemeList from '../memes/MemeList';


const Home = () => {

    const { data : memes, isPending, error} = useFetch('http://localhost:8080/memes');

    return (  
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading.....</div>}
            { !error && memes && <MemeList memes={memes}/>}
        </div>
    );
}
 
export default Home;