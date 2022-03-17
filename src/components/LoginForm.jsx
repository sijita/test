import UserContext from "../context/AuthContext"
import { useContext } from "react"

export default function LoginForm() {

  const { login, error, spinner, setUser, user, password, setPassword } = useContext(UserContext)

  return (
    <>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-xl-4">
            <form onSubmit={login}>
              {error ? <div className="alert alert-danger">{error}</div> : null}
              {spinner ? (
                <div className="d-flex justify-content-center mb-4">
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : false}
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Usuario"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <button 
                className="btn btn-dark btn-block w-100 border-1 mt-2" 
                type="submit"
                style={{backgroundColor: '#0a0a0a'}}
              >
                Ingresar
              </button>
            </form>
          </div>
        </div>
    </>
  );
}
