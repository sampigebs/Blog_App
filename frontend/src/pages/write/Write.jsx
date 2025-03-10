// Write component allows users to create a new blog post, handling title and description input.
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./write.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Write() {
  let token=localStorage.getItem("blog-token")
  const navigate=useNavigate()
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };

    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("https://blogapp-6huo.onrender.com/upload", data);
      } catch (err) {}
    }



    try {
      const res = await axios.post("https://blogapp-6huo.onrender.com/post/create", newPost,{
        headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(res)
        alert("Post has been Added successfully")
        navigate("/")
      // window.location.replace("http://localhost:8080/post/" + res.data._id);
    } catch (err) {}
  }
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus">+</i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={e=>setDesc(e.target.value)}
            
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
