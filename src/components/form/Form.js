import * as React from "react";
import { postArticle } from "../../api/postArticle";

const Form = () => {
  const [state, setState] = React.useState({
    title: "",
    summary: "",
    tags: [],
    content: "",
    author: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await postArticle(state);
    setIsLoading(false);
    console.log(response);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Publicador</h1>
      <form className="form" onSubmit={handleSubmit} id="form">
        <div className="form-title field-border">
          <input
            className="form-title-input"
            type="text"
            placeholder="Titulo de Articulo"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="form-summary field-border">
          <textarea
            className="form-summary-textarea"
            type="text"
            placeholder="Resumen del contenido del articulo"
            name="summary"
            onChange={handleChange}
          />
        </div>
        <div className="form-tags field-border">
          <textarea
            className="form-summary-textarea"
            type="text"
            placeholder="Tags separadas por coma y sin comillas: React, Js, PHP"
            name="tags"
            onChange={handleChange}
          />
        </div>
        <div className="form-content field-border">
          <textarea
            className="form-content-textarea"
            type="text"
            placeholder="Contenido MARKDOWN"
            name="content"
            onChange={handleChange}
          />
        </div>
        <div className="form-author field-border">
          <input
            className="form-author-input"
            type="text"
            placeholder="Creador"
            name="author"
            onChange={handleChange}
          />
        </div>
        <div className="form-submit field-border">
          <button
            type="submit"
            form="form"
            className={`form-submit-button ${isLoading ? "isSubmitting" : ""}`}
          >
            {isLoading ? "" : "Publicar"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
