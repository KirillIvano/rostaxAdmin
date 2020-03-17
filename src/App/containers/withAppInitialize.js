import {connect} from 'react-redux';

import {appStartAuthAction} from '@/redux/actions/auth';
import {selectIfAuthenticated, selectIfInitialAuthFinished} from '@/redux/selectors/auth';

const mapStateToProps = state => ({
    isUserAuthenticated: selectIfAuthenticated(state),
    isInitialAuthFinished: selectIfInitialAuthFinished(state),
});

const mapDispatchToProps = dispatch => ({
    tryAuth: () => dispatch(appStartAuthAction()),
});

export const withAppInitialize = connect(mapStateToProps, mapDispatchToProps);
