import React from 'react';
import {Route} from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collection-overview-component'
import CollectionPage from '../collection/collection-component'
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase-utils'
import {updateCollection} from '../../redux/shop/shop-actions'
import {connect} from 'react-redux'
import WithSpinner from '../../components/with-spinner/with-spinner-component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)
class ShopPage extends React.Component {
    state={
        loading:true
    }
    unsubscribeFromSnapshot=null

    componentDidMount(){
        const {updateCollection}=this.props
        console.log(updateCollection)
        const collectionRef=firestore.collection('collections')

        this.unsubscribeFromSnapshot=collectionRef.onSnapshot(async snapshot=>{
            const collectionMap=convertCollectionSnapshotToMap(snapshot)
            updateCollection(collectionMap)
            this.setState({loading:false})
        })
    }
    render(){
        const {match} = this.props
        const {loading}=this.state
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => (<CollectionOverviewWithSpinner isloading={loading} {...props}/>)} />
                <Route path={`${match.path}/:collectionId`} render={(props) => (<CollectionPageWithSpinner isloading={loading} {...props} />)} />
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    updateCollection: collectionMap => dispatch(updateCollection(collectionMap))
})
export default connect(null,mapDispatchToProps)(ShopPage)