import {createBrowserRouter} from 'react-router-dom';
import { SCREENS } from './constants';
import HomePage from '../pages';
import About from '../pages/about';
import Services from '../pages/services';
import Features from '../pages/features';
import Pricing from '../pages/pricing';
import Quote from '../pages/quote';
import Team from '../pages/team';
import Testimonial from '../pages/testimonial';
import Contact from '../pages/contact';

const router = createBrowserRouter([
  {
    path: SCREENS.HOME,
    element: (<HomePage />),
  },
  {
    path: SCREENS.ABOUT,
    element: (<About />),
  },
  {
    path: SCREENS.SERVICES,
    element: (<Services />),
  },
  {
    path: SCREENS.FEATURES,
    element: (<Features />),
  },
  {
    path: SCREENS.PRICING,
    element: (<Pricing />),
  },
  {
    path: SCREENS.QUOTE,
    element: (<Quote />),
  },
  {
    path: SCREENS.TEAM,
    element: (<Team />),
  },
  {
    path: SCREENS.TESTIMONIAL,
    element: (<Testimonial />),
  },
  {
    path: SCREENS.CONTACT,
    element: (<Contact />),
  },
]);

export default router;