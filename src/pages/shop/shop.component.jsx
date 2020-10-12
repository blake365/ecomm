import React from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selector'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  
  
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    
    fetchCollectionsStartAsync();
  }
  
  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;
    
    return(
      <div className="shop-page">
        <Route
          render={(props) => (<CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />)}
          exact
          path={`${match.path}`}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (<CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />)}
        />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
