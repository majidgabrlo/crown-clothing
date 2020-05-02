import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import PreviewCollection from '../preview-collection/preview-collection-component';
import {selectCollectionForPreview} from '../../redux/shop/shop-selectors'

import './collection-overview-styles.scss'

const CollectionOverview = ({collection}) => (
    <div className='collections-overview'>
        {
            collection.map(({id, ...otherCollectionProps})=>(
                <PreviewCollection key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collection:selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview)