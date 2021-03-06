// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Script for filter link component
// ----------------------------------------------------------------------------

// Module Import --------------------------------------------------------------
import { connect } from 'react-redux';
// ----------------------------------------------------------------------------

// Action Import --------------------------------------------------------------
import { setVisibilityFilter } from '../actions';
// ----------------------------------------------------------------------------

// Component Import -----------------------------------------------------------
import Link from '../components/Link';
// ----------------------------------------------------------------------------

// Map to Props ---------------------------------------------------------------
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})
// ----------------------------------------------------------------------------

// Container Export -----------------------------------------------------------
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
// ----------------------------------------------------------------------------
