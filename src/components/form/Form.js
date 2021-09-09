import * as React from "react";

const Form = () => {
  const [state, setState] = React.useState({
    isIdle: true,
    isSanitizating: false,
    isSubmitting: false,
    isSubmitted: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setState(state.isSubmitting);
    console.log("Submitting form...");
    setTimeout(() => {
      setState(state.isSubmitted);
    }, 2000);
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
          />
        </div>
        <div className="form-summary field-border">
          <textarea
            className="form-summary-textarea"
            type="text"
            placeholder="Resumen del contenido del articulo"
          />
        </div>
        <div className="form-tags field-border">
          <textarea
            className="form-summary-textarea"
            type="text"
            placeholder="Tags separadas por coma y sin comillas: React, Js, PHP"
          />
        </div>
        <div className="form-content field-border">
          <textarea
            className="form-content-textarea"
            type="text"
            placeholder="Contenido MARKDOWN"
          />
        </div>
        <div className="form-author field-border">
          <input
            className="form-author-input"
            type="text"
            placeholder="Creador"
          />
        </div>
        <div className="form-submit field-border">
          <button
            type="submit"
            form="form"
            className={`form-submit-button ${
              state.isSanitizating
                ? "is-sanitizing"
                : state.isSubmitting
                ? "is-submitting"
                : ""
            }`}
          >
            {state.isSanitizating
              ? "Sanitizando..."
              : state.isSubmitting
              ? "Submitiendo"
              : "Publicar"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
