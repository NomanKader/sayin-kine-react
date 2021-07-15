import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Category from "../Category/Category";
// import CalendarComponent from "../Dashboard/CalendarComponent.js";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home/Home";

const HomeRoute = () => <Home/>;

const CategoryRoute = () => <Category/>;

const DashboardRoute = () => <Dashboard/>;

const Navigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "category", title: "Category", icon: "grid" },
    { key: "dashboard", title: "Dashboard", icon: "chart-line" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    category: CategoryRoute,
    dashboard: DashboardRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{backgroundColor: '#2471A3'}}
    />
  );
};

export default Navigation;
