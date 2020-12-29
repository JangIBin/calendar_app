import './App.css';
import './reset.css';
import img from './img/day.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSearch,
  faClock,
  faCog,
  faCaretRight,
  faMailBulk,
  faDownload,
  faTrash,
  faArrowLeft,
  faArrowRight,
  faEllipsisH
} from "@fortawesome/free-solid-svg-icons";

const ICONS = [faSort];

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="sidebar-header">
            <p>G</p>
            <div className="name">GamJarin</div>
            <i><FontAwesomeIcon icon={faSort} /></i>
        </div>

        <div className="sidebar-setting">
            <i><FontAwesomeIcon icon={faSearch} /></i>
            <div className="setting-name">Quick Find</div>
        </div>
        <div className="sidebar-settings">
            <i><FontAwesomeIcon icon={faClock} /></i>
            <div className="setting-name">All Updates</div>
        </div>
        <div className="sidebar-settings">
            <i><FontAwesomeIcon icon={faCog} /></i>
            <div className="setting-name">Settings & Members</div>
        </div>

        <div className="sidebar-addpage">
            <div className="todolist">
                <i><FontAwesomeIcon icon={faCaretRight} /></i>
                <img src={img}/>
                <div className="addpage-name">To Do List</div>
            </div>
        </div>
        <div className="sidebar-todolist">
            <p>+</p>
            <div className="addpage-name">Add a page</div>
        </div>

        <div className="sidebar-service">
            <div className="templates">
                <i><FontAwesomeIcon icon={faMailBulk} /></i>
                <div className="service-name">Templates</div>
            </div>
            <div className="templates">
                <i><FontAwesomeIcon icon={faDownload} /></i>
                <div className="service-name_2">Import</div>
            </div>
            <div className="templates">
                <i><FontAwesomeIcon icon={faTrash} /></i>
                <div className="service-name_3">Trash</div>
            </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <hr />
        <div className="sidebar-footer">
            <p>+</p>
            <div className="footer-name">New page</div>
        </div>
    </div>

    <div className="header">
        <div className="header-left">
            <i><FontAwesomeIcon icon={faArrowLeft} /></i>
            <i><FontAwesomeIcon icon={faArrowRight} /></i>
            <img src={img} />
            <div className="header-name">To Do List</div>
        </div>

        <div className="header-right">
            <p>Share</p>
            <p>Updates</p>
            <p>Favorite</p>
            <i><FontAwesomeIcon icon={faEllipsisH} /></i>
        </div>
    </div>

    <div className="main">
        <div className="main-background-1"></div>
        <div className="main-background-2">
            <img src={img} />
        </div>
    </div>
    </div>
  );
}

export default App;
