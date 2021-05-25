import React from "react";
import { connect } from "react-redux";
import GifItem from './GifItem'

const GifsList = (props) => {

  const renderGifList = props.gifs.map((item) => {
    return (
      <div className="col-md-6">
        <GifItem
          {...item}
          key={item.id}
        />
      </div>
    );
  });

  return (
    <div className="row">
      <div>{renderGifList}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    gifs: state.gifs
  };
};

export default connect(mapStateToProps, null)(GifsList);