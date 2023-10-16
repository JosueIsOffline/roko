
import './App.css'

function App() {
  
  return (
    <>
      <div className="sidebar">
    <div className="logo_details">
      <i className="bx bxl-audible icon"></i>
      <div className="logo_name">ROKO</div>
      <i className="bx bx-menu" id="btn"></i>
    </div>
    <ul className="nav-list">
      <li>
        <a href="index.html">
          <i className="bx bx-grid-alt"></i>
          <span className="link_name">Home</span>
        </a>
        <span className="tooltip">Home</span>
      </li>
      <li>
        <a href="About.html">
          <i className="bx bx-user"></i>
          <span className="link_name">About</span>
        </a>
        <span className="tooltip">About</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-news"></i>
          <span className="link_name">News</span>
        </a>
        <span className="tooltip">News</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-chat"></i>
          <span className="link_name">IA ROKO</span>
        </a>
        <span className="tooltip">IA ROKO</span>
      </li>
      <li className="profile">
        <div className="profile_details">
          <img src="assest/img/admin.png" alt="profile image"/>
          <div className="profile_content">
            <div className="name">Guillermo </div>
            <div className="designation">Admin</div>
          </div>
        </div>
        <i className="bx bx-log-out" id="log_out"></i>
      </li>
    </ul>
  </div>
  <section className="home-sectionIA">
    <div className="input-container">
      <p id="output"></p>
      <div className="input-form">
        <input type="text" id="mensaje" name="mensaje" placeholder="Que te gustaria saber?"/>
        <div id="submit">Enviar</div>
      </div>
    </div>
  </section>
    </>
  )
}

export default App
