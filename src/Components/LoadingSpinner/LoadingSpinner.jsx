import './LoadingSpinner.css';

export default function Loading({ message = "Cargando..." }) {
  return (
    <div className="spinner-container">
      <div className="spinner-wrapper">
        <div className="loading-circle"></div>
      </div>
      <p className="loading-text">{message}</p>
    </div>
  );
}