import React from 'react';
import {connect} from 'react-redux';

import {RefreshErrorModal} from '@/parts';
import {refreshTokensErrorEnd} from '@/redux/actions/auth';

const mapStateToProps = ({auth}) => ({
    isModalOpened: auth.isRefreshTokenErrorProcessing,
});

const mapDispatchToProps = dispatch => ({
    handleModalClose: () => dispatch(refreshTokensErrorEnd()),
});

const withModal =
    Comp =>
        ({isModalOpened, handleModalClose, ...props}) => (
            <>
                <Comp {...props} />
                <RefreshErrorModal
                    isOpen={isModalOpened}
                    handleClose={handleModalClose}
                />
            </>
        );

export const withAuthCheck = Comp => connect(mapStateToProps, mapDispatchToProps)(withModal(Comp));
