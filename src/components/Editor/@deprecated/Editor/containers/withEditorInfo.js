import {
    compose,
} from 'recompose';
import {connect} from 'react-redux';
import withDirHistory from '@/containers/withDirHistory';


const mapStateToProps = ({
    template,
}) => ({
    isLoaded: template.isLoaded,
});

const withEditorInfo = compose(
        connect(mapStateToProps),
        withDirHistory,
    )


export default withEditorInfo;
