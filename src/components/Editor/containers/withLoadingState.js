import {
    compose,
    withProps,
} from 'recompose';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    template: state.template,
});

export const withLoadingState = compose(
    connect(mapStateToProps),
    withProps(({template: {isLoaded}}) => ({
        isLoaded,
    })),
);
