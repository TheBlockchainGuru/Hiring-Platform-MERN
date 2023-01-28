import { createBrowserRouter } from 'react-router-dom';
import { PATH } from '../constants/Paths';
import MainLayouts from '../layouts/MainLayout.js';
import Home from '../pages/Home';

const Routes = createBrowserRouter([
    {
        path: PATH.HOME,
        element: <MainLayouts />,
        children: [
            {
                path: PATH.HOME,
                element: <Home />
            }
        ]
    }
]);

export default Routes