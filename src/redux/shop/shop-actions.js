import shopActionTypes from './shop-types'

export const updateCollection = collectionMap =>({
    type:shopActionTypes.UPDATE_COLLECTIONS,
    payload:collectionMap
})
