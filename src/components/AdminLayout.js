import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import UserManagement from "./UserManagement";
import ProductManagement from "./ProductManagement";
import AuctionHistory from "./AuctionHistory";
import AuctionManagement from "./AuctionManagement";
import PaymentManagement from "./PaymentManagement";
import ContentManagement from "./ContentManagement";

const AdminLayout = () => {
  return (
    <Router>
      <div className="admin-layout">
        <Sidebar />
        <div className="main-content">
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/user-management" component={UserManagement} />
            <Route path="/product-management" component={ProductManagement} />
            <Route path="/auction-history" component={AuctionHistory} />
            <Route path="/auction-management" component={AuctionManagement} />
            <Route path="/payment-management" component={PaymentManagement} />
            <Route path="/admin/content" component={ContentManagement} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AdminLayout;
