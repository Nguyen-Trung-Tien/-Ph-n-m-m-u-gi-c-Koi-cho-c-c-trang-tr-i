import "../styles/Main.css";
import hello from "../assets/hello.svg";
import Chart from "./Chart";

const Main = () => {
  return (
    <main>
      <div className="main_container">
        <div className="main_title">
          <div className="main__greeting">
            <h1>Welcome to your admin Dashboard</h1>
          </div>
        </div>

        <div className="main__cards">
          <div className="card">
            <i className="fa fa-user-o fa-2x text-lightblue"></i>{" "}
            <div className="card_inner">
              <p className="text-primary-p">Number of Subscribers</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red"></i>
            <div className="card_inner">
              <p className="text-primary-p">Auction Activities</p>
              <span className="font-bold text-title">2456</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-video-camera fa-2x text-yellow"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Videos</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-thumbs-up fa-2x text-green"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Like</p>
              <span className="font-bold text-title">623</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Cupertino, Califonia, USA</p>
              </div>
              <i className="fa fa-usd"></i>
            </div>
            <Chart />
          </div>
          <div className="chart__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Cupertino, Califonia, USA</p>
              </div>
              <i className="fa fa-use"></i>
            </div>

            <div className="chart__right__cards">
              <div className="card1">
                <h1>Income</h1>
                <p>$75,300</p>
              </div>
              <div className="card2">
                <h1>Sales</h1>
                <p>$124,200</p>
              </div>
              <div className="card3">
                <h1>User</h1>
                <p>3100</p>
              </div>
              <div className="card4">
                <h1>Orders</h1>
                <p>2671</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
