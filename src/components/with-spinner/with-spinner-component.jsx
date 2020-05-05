import React from 'react'

import {SpinnerContainer,SpinnerOverlay} from './with-spinner-styles'

// WrappedComponent is a component that we send to this higher order component
const WithSpinner = WrappedComponent => {
    const Spinner =({isloading, ...otherProps}) => {
    return isloading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ):
        (
            <WrappedComponent {...otherProps} /> 
        )}
    return Spinner
}
export default WithSpinner