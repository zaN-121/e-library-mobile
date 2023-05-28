import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";
// auth
import Login from "./auth/login/LoginUser";
import Registration from "./auth/registration/RegistrationUser";

// home screen
import Welcome from "./home/welcome/Welcome";
import RecommendBook from "./home/latestBook/LatestBook";
import Popularjobs from "./home/availableBook/AvailableBook";

// job details screen
import { default as BookTabs } from "./bookdetails/tabs/Tabs";
import { default as BookAbout } from "./bookdetails/about/About";
import { default as BookFooter } from "./bookdetails/footer/Footer";

// common
import RecommendBookCard from './common/cards/latestBook/LatestBook';

export {
  ScreenHeaderBtn,
  Welcome,
  RecommendBook,
  Popularjobs,
  BookTabs,
  BookAbout,
  BookFooter,
  RecommendBookCard,
  Login,
  Registration
};
