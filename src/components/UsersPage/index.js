import React, { Component } from 'react';
import { observer,inject } from 'mobx-react';
// import stores from '../../stores/index';
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure/index.js';
import NoDataView from '../common/NoDataView/index.js';
// const userStore =stores.userStore
@inject('userStore')
@observer
class UserPage extends Component {

    componentDidMount() {
        this.doNetworkCalls();
    }

    doNetworkCalls = () => {
    
        this.props.userStore.getUsersAPI();
    }

    renderUserList = () => {
        

        const { users } = this.props.userStore;
        if (users.length === 0) {
            return <NoDataView/>;
        }
        return users.map((userName) => <div>{userName}</div>);

    }

    render() {
        const { getUsersApiStatus, getUsersApiError } = this.props.userStore;

        return (

            <LoadingWrapperWithFailure
                apiError={getUsersApiError}
                apiStatus={getUsersApiStatus}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderUserList}/>
        );
    }
}

export default UserPage;
