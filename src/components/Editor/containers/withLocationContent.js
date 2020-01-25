import {
    compose,
    withProps,
} from 'recompose';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const getPathArray = (pathStr) => {
    return pathStr.split('/').filter(str => str);
};
const mapStateToProps = state => ({
    template: state.template
});

export const withLocationContent = compose(
    withRouter,
    connect(mapStateToProps),
    withProps(props => {
        const {template, location} = props;
        const {isLoaded} = template;

        const pathString = location.pathname;
        const path = getPathArray(pathString);

        return {
            path,
            pathString,
            isLoaded,
        }
    }),
);
