
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SearchPage from './exam2/pages/SearchPage';
import ResultPage from './exam2/pages/ResultPage';
import TagsPage from './exam2/pages/TagsPage';
import CalendarPage from './exam1/components/page/CalendarPage';
import DatePickerPage from './exam1/components/page/DatePickerPage';
import PasswordPage from './exam1/components/page/PasswordPage';
import HomePage from './exam1/components/page/HomePage';


const sampleUser = {
  id: '1',
  name: 'John Doe',
  avater: 'avatar-url',
  username: 'john_doe',
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
    element:<SearchPage users={sampleUser}/>
  },
  {
    path: 'exam2/result',
    element:<ResultPage users={sampleUser}/>
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
