import { useRouteError, Link, useNavigate } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  let title = "An error occurred";
  let message = "Something went wrong!";
  let errorIcon = "⚠️";

  if (error.status === 404) {
    title = "Not Found";
    message = "The page you are looking for does not exist.";
    errorIcon = "🔍";
  } else if (error.status === 500) {
    title = "Server Error";
    message = "There was a problem with the server. Please try again later.";
    errorIcon = "🔧";
  } else if (error.message) {
    message = error.message;
  }

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-icon">{errorIcon}</div>
        <h1>{title}</h1>
        <p>{message}</p>
        <div className="error-actions">
          <Link to="/" className="error-button primary">
            Go Home
          </Link>
          <button onClick={handleGoBack} className="error-button secondary">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
