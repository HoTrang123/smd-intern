import { connect } from 'react-redux'
import * as actions from './../actions/index'
const AddItem = () => {
  return (
    <div>
      <button
        style={{ marginTop: 100, width: 200, height: 50 }}
        type="button"
        class="btn btn-primary"
        onClick={onClick}
      >
        Add Gif
      </button>
    </div>
  );
};

const onClick = () => {
  console.log('aa')
}
const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProp = (dispatch, prop) => {
  return {
    onAddTask: (task) => {
      dispatch(actions.addTask(task))
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProp)(AddItem);