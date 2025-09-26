import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { login, logout, user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    // si intenta registrarse como admin, mostramos modal de error
    if (username.toLowerCase() === "admin") {
      setShowModal(true);
      return;
    }

    login(username, password);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-sm mx-auto mt-10"
      >
        <h2 className="text-2xl font-bold text-center">LOGIN PAGE</h2>

        <label className="font-semibold" htmlFor="username">
          Username:
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 rounded p-2"
          type="text"
          id="username"
        />

        <label className="font-semibold" htmlFor="password">
          Password:
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded p-2"
          type="password"
          id="password"
        />

        <button
          className="bg-blue-500 text-white rounded p-2"
          type="submit"
        >
          Login
        </button>

        {user && (
          <button
            onClick={logout}
            type="button"
            className="bg-red-500 text-white rounded p-2"
          >
            Logout
          </button>
        )}
      </form>

      {/* Modal de error */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h3 className="text-xl font-bold mb-4">Error</h3>
            <p>No se pudo registrar como admin.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
