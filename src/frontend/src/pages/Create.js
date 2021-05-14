import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

  const [caption, setCaption] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [madeBy, setMadeBy] = useState("");

  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const meme = { caption, imgUrl, madeBy };

    fetch("http://localhost:8080/memes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(meme),
    }).then(() => {
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <p>Create a new meme</p>

      <form onSubmit={handleSubmit}>
        
        <label><b>meme captaion :</b></label>
        <input
          type="text"
          required
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

        <label><b>meme imgUrl :</b></label>
        <textarea
          required
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        ></textarea>

        <label><b>meme creator :</b></label>
        <input
          type="text"
          value={madeBy}
          onChange={(e) => setMadeBy(e.target.value)}
        />

        {!isPending && <button>Add meme</button>}
        {isPending && <button disabled>adding meme....</button>}
      </form>
    </div>
  );
};

export default Create;
