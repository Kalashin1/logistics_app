import {createBrowserRouter} from 'react-router-dom';
import { SCREENS } from './constants';
import HomePage from '../pages';

const router = createBrowserRouter([
  {
    path: SCREENS.HOME,
    element: (<HomePage />),
  },
]);

export default router;