import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const { user } = useAuthValue();
    const navigate = useNavigate();

    const { insertDocument, response } = useInsertDocument("posts");

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");

        // validate image

        // create tags array

        // check values

        insertDocument({
            title,
            image,
            body,
            // tags: tagsArray,
            uuid: user.uid,
            createdBy: user.displayName,
        });

        // redirect to home page
        navigate("/");
    }

    return (
        <div className={styles.create_post}>
            <h2>Create a post</h2>
            <p>Share your ideas</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Title</span>
                    <input
                        type="text"
                        name="title"
                        required
                        placeholder="Choose your post's title!"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>Image's url: </span>
                    <input
                        type="text"
                        name="image"
                        required
                        placeholder="Upload an image that represents your thoughts and ideas."
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                    />
                </label>
                <label>
                    <span>Body</span>
                    <textarea
                        name="body"
                        required
                        placeholder="Type the post's content."
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    ></textarea>
                </label>
                <label>
                    <span>Tags</span>
                    <input
                        type="text"
                        name="tags"
                        placeholder="Type the tags separated by comma."
                        onChange={(e) => setTags(e.target.value)}
                        value={tags}
                    />
                </label>
                <button className="btn"> Share idea </button>
                {!response.loading && <button className="btn"> Register </button>}
                {response.loading && <button className="btn" disabled> Wait </button>}
                {response.error && <p className="error">{response.error}</p>}
            </form>
        </div>
    )
};

export default CreatePost;