import React, { useState } from "react";

const UpdateMovie = () => {
  const [updateForm, setUpdateForm] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: [],
  });

  console.log("changes: ", updateForm);

  const handleChange = (e) => {
    setUpdateForm({
      ...updateForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdateForm({
      title: "",
      director: "",
      metascore: "",
    });
  };
  return (
    <div>
      <h2>This is the Update form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter movie title"
          name="title"
          value={updateForm.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Metascore"
          name="metascore"
          value={updateForm.metascore}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter director"
          name="director"
          value={updateForm.director}
          onChange={handleChange}
        />
        <button>Save Changes</button>
      </form>
    </div>
  );
};

export default UpdateMovie;
