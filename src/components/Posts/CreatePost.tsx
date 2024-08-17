import React, { useState } from "react";
import api from "../../services/api";

const CreatePost: React.FC = () => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/post/create", { content });
      setContent("");
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder=" "
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
