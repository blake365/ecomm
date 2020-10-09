import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route component={CollectionsOverview} exact path={`${match.path}`} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
