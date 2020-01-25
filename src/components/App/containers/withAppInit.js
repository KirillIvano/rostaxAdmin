import {connect} from 'react-redux';
import {initializeStateAction} from '@/redux/actions';

const mapDispathToProps = dispatch => ({
    initApp: () => dispatch(initializeStateAction()),   
});

export default connect(null, mapDispathToProps);