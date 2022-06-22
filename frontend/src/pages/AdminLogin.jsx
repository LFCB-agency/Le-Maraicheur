import "../assets/sass/adminlogin.scss";
import logo from "../assets/pictures/logo1.png";

export default function AdminLogin() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <div className="container">
        <div className="logo-position">
          <img src={logo} alt="Logo du Maraîcheur" className="logo-property" />
        </div>
        <div className="introduction">
          <h1>Le Maraîcheur - Administration</h1>
          <p>
            Bienvenue, veuillez saisir votre email administrateur ainsi que
            votre mot de passe pour vous connecter au panneau d’administration.
          </p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email *{" "}
            <input id="email" placeholder="monemail@gmail.com" type="email" />
          </label>
          <label htmlFor="password">
            Mot de passe *
            <a href="#">
              <p className="lostpassword">Mot de passe oublié ?</p>
            </a>
            <input
              id="password"
              placeholder="*****************************"
              type="password"
            />
          </label>
          <button className="login-btn" type="submit">
            SE CONNECTER
          </button>
        </form>
      </div>
    </section>
  );
}
