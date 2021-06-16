import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import About from "../Home/About";
import Home from "../Home/Home";

const HomeRoute = () => <Home/>;

const CategoryRoute = () => <About/>;

const DashboardRoute = () => <Text>Recents</Text>;

const Navigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: require("../../assets/images/home.png") },
    { key: "category", title: "Category", icon: require("../../assets/images/menu.png") },
    { key: "dashboard", title: "Dashboard", icon: require("../../assets/images/dashboard.png") },
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
