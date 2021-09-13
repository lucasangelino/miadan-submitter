import * as React from "react";
import { postArticle } from "../../api/postArticle";

const Form = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [state, setState] = React.useState({
    title: "",
    summary: "",
    tags: [],
    content: "",
    author: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { code, message } = await postArticle(state);
    setIsLoading(false);
    if (code !== 201) {
      setHasError(true);
      setErrorMessage(message);
    }
  };

  const handleChange = (e) => {
    setHasError(false);
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
      <div>
        {hasError && (
          <div className="form-error">
            <p>
              <span role="img" aria-label="error">
                🚫
              </span>{" "}
              {`Error al publicar el articulo ${errorMessage}`}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
