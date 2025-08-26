'use client';
import {useAuth} from './Auth';

export default function Navbar() {
  const auth = useAuth;
  const {username, setUsername, isAuthenticated, setIsAuthenticated} = auth;

  const handleLogIn = () => {
    console.log('Tentative de connexion avec le compte: ', username);
    setIsAuthenticated(true);
  };

  const handleSetUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <p>Bonjour {username} ✨</p>
      {isAuthenticated ? (
        <p>✅ Vous êtes connecté !</p>
      ) : (
        <div className="mb-8">
          <p>💔 Vous n'êtes pas connecté.</p>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            className="border"
            value={username}
            onChange={handleSetUsername}
          />
          <button
            onClick={handleLogIn}
            className="mx-2 py-1 px-6 rounded bg-amber-600 text-white"
          >
            Se connecter
          </button>
        </div>
      )}
    </>
  );
}
