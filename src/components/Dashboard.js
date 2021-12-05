import React from "react";
import "./Home-style.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import clip from "./clip.mp4";
// import icon from "../img/user.png";

const Dashboard = ({ auth: { user } }) => {
	return (
		<div className="dashboard" style={{ marginTop: "5rem", textAlign: "center" }}>
			<h1 className="welcome" >Welcome, {user && user.name}</h1>
			<>
      <video
        autoplay={`autoPlay`}
        loop={"loop"}
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={clip} type="video/mp4" />
      </video>
      <p className="first">
        A food with a sharp taste. Often used to refer to tart or sour foods as
        well..
      </p>

      <p className="second">A tart, sharp, and sometimes harsh flavor.</p>

      <p className="third">
        A less harsh taste than bitterness. Couples tartness with sweetness.
      </p>

      <p className="fourth">A taste that feels as though it gives off heat.</p>

      <p className="fifth">
        A full, heavy flavor. Often used to describe foods containing cream.
      </p>
    </>
			
		</div>
	);
};
Dashboard.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
