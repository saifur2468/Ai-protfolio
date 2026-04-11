import { Outlet, NavLink } from 'react-router';
import { LayoutDashboard, CalendarDays, List, Plus } from 'lucide-react';

export function Layout() {
  const navItems = [
    { to: '/', label: 'Dashboard', icon: LayoutDashboard, exact: true },
    { to: '/events', label: 'Events', icon: List },
    { to: '/calendar', label: 'Calendar', icon: CalendarDays },
    { to: '/create', label: 'Create Event', icon: Plus },
  ];

  return (
    <div className="min-h-screen bg-zinc-50">
      <nav className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarDays className="size-6 text-indigo-600" />
              <span className="text-xl font-semibold text-zinc-900">EventHub</span>
            </div>

            <div className="flex gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.exact}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                    }`
                  }
                >
                  <item.icon className="size-4" />
                  <span className="text-sm">{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
