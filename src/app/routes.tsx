import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Events } from './pages/Events';
import { EventDetails } from './pages/EventDetails';
import { CreateEvent } from './pages/CreateEvent';
import { Calendar } from './pages/Calendar';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: 'events', Component: Events },
      { path: 'events/:id', Component: EventDetails },
      { path: 'create', Component: CreateEvent },
      { path: 'calendar', Component: Calendar },
      { path: '*', Component: NotFound },
    ],
  },
]);
