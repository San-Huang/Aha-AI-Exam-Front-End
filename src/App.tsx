
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchPage from './exam2/pages/SearchPage';
import ResultPage from './exam2/pages/ResultPage';
import TagsPage from './exam2/pages/TagsPage';
import CalendarPage from './exam1/pages/CalendarPage';
import DatePickerPage from './exam1/pages/DatePickerPage';
import PasswordPage from './exam1/pages/PasswordPage';
import HomePage from './exam1/pages/HomePage';


const User = {
  id: 'string',
  name: 'string',
  avater: 'string',
  username: 'string',
  isFollowing: true,
};

const TagsProps = {
  id: 'string',
  name: 'string',
  count: 1,
}

const router = createBrowserRouter([
  {
    path: '/',
    element:<HomePage />
  },
  {
    path: 'exam1/password',
    element:<PasswordPage />
  },
  {
    path: 'exam1/calendar',
    element:<CalendarPage />
  },
  {
    path: 'exam1/datePicker',
    element:<DatePickerPage />
  },
  {
    path: 'exam2/',
    element:<SearchPage users={User}/>
  },
  {
    path: 'exam2/result',
    element:<ResultPage users={User}/>
  },
  {
    path: 'exam2/tags',
    element: <TagsPage tagProps={TagsProps}/>
  },
])

function App() {
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
