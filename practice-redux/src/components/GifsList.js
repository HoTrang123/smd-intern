import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

import GifItem from './GifItem'

const GifsList = (props) => {



  const renderGifList = props.gifs.map((item, index) => {
    return (
      <NavLink to="/" key={index}>
        <div className="col-md-6">
          <GifItem
            {...item}
            // key={item.id}
          />
        </div>
      </NavLink>

    );
  });

  return (
    <div className="row">
      <div>{renderGifList}</div>
    </div>
  );
};

GifsList.propTypes = {
  gifs: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    gifs: state.gifs
  };
};

export default connect(mapStateToProps, null)(GifsList);