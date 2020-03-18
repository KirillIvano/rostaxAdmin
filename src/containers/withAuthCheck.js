import React, {} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = ({auth}) => ({
    isUserAuthenticated: auth.isAuthenticated,
});

const withModal =
    Comp =>
        ({isUserAuthenticated, ...props}) => (
            <>
                <Comp {...props} />
                <p>
                    {String(isUserAuthenticated)}
                </p>
            </>
        );

export const withAuthCheck = Comp => connect(mapStateToProps)(withModal(Comp));
