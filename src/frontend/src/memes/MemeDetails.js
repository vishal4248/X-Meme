import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "./useFetch";

const MemeDetails = () => {

    const { id } = useParams();
    const { data : meme, error, isPending } = useFetch(`http://localhost:8080/memes/${id}`);
    const history = useHistory();

    const [ defaultCreator, setDefaultCreator] = useState('x-meme');


    const handleDelete= () => {
        fetch('http://localhost:8080/memes/'+meme.id, {
            method : 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="meme-details">
            { isPending && <div>Loading.....</div>}
            { error && <div> { error }</div>}
            { meme && (
                <article>
                    <h2>{ meme.caption }</h2>
                    <img src={meme.imgUrl} width="70%"></img>
                    
                    <h4>{ !meme.madeBy && defaultCreator }</h4>
                    <h4>{ meme.madeBy }</h4>
                    <br/>
                    <button className="del-button" onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default MemeDetails;