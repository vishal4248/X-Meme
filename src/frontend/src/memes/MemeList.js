import { useState } from "react";

const MemeList = (props) => {

    const memes = props.memes;

    const [ defaultCreator, setDefaultCreator] = useState('x-meme');

    return ( 
        <div className="meme-list">
            { memes.map(
                (meme) => (
                    <div className="meme-preview">
                        <h3>{ meme.caption }</h3>
                        <img src={meme.imgUrl} width="70%"></img>
                        <h4>{ !meme.madeBy && defaultCreator }</h4>
                        <h4>{ meme.madeBy }</h4>
                    </div>
                )
            ) }
        </div>
     );
}


 
export default MemeList;