# Backend Integration Guide

## Environment Setup

A `.env` file has been created in the root directory. Update it with your backend URL:

```env
VITE_API_URL=http://localhost:5000/api
```

For production, update this to your production API URL.

## API Endpoints Expected

The admin dashboard expects the following API endpoints:

### Authentication
- `POST /auth/login` - Admin login (expects `email`, `password` in body, returns `token` and `user`)
- `GET /auth/me` - Get current authenticated user

### Dashboard
- `GET /dashboard/stats` - Get dashboard statistics
- `GET /dashboard/activity` - Get recent activity
- `GET /dashboard/upcoming-events` - Get upcoming events

### Users
- `GET /users` - Get all users
- `POST /users` - Create new user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Events
- `GET /events` - Get all events
- `POST /events` - Create new event
- `PUT /events/:id` - Update event
- `DELETE /events/:id` - Delete event

### Services
- `GET /services` - Get all services
- `POST /services` - Create new service
- `PUT /services/:id` - Update service
- `DELETE /services/:id` - Delete service

### Bookings
- `GET /bookings` - Get all bookings
- `POST /bookings` - Create new booking
- `PATCH /bookings/:id` - Update booking status
- `DELETE /bookings/:id` - Delete booking

### Rewards
- `GET /rewards` - Get all rewards
- `GET /rewards/stats` - Get reward statistics
- `POST /rewards` - Assign new reward
- `PUT /rewards/:id` - Update reward
- `DELETE /rewards/:id` - Delete reward

### CMS
- `GET /cms` - Get all CMS content
- `PUT /cms` - Update CMS content

## Authentication Flow

1. User logs in at `/login` page
2. Backend returns JWT token and user object
3. Token is stored in `localStorage` as `token`
4. All subsequent API requests include `Authorization: Bearer {token}` header
5. On 401 response, user is redirected to `/login`
6. Protected admin routes require authentication

## Files Modified/Created

### New Files
- `src/lib/api.ts` - Axios client with auth interceptors
- `src/contexts/AuthContext.tsx` - Authentication context provider
- `src/components/admin/ProtectedRoute.tsx` - Route protection component
- `.env` - Environment variables
- `BACKEND_INTEGRATION.md` - This documentation

### Modified Files
- `src/App.tsx` - Added AuthProvider and ProtectedRoute wrapper
- `src/pages/Login.tsx` - Added authentication logic
- `src/pages/admin/AdminDashboard.tsx` - Integrated with API
- `src/pages/admin/AdminUsers.tsx` - Integrated with API
- `src/pages/admin/AdminEvents.tsx` - Integrated with API
- `src/pages/admin/AdminServices.tsx` - Integrated with API
- `src/pages/admin/AdminBookings.tsx` - Integrated with API
- `src/pages/admin/AdminRewards.tsx` - Integrated with API
- `src/pages/admin/AdminCMS.tsx` - Integrated with API
- `src/components/admin/AdminNavbar.tsx` - Added logout functionality

## Testing

1. Start your backend server on `http://localhost:5000`
2. Update `.env` if needed
3. Run the frontend: `npm run dev`
4. Navigate to `/login`
5. Login with valid credentials from your backend
6. Access admin dashboard at `/admin/dashboard`

## Notes

- All admin routes are now protected - unauthenticated users will be redirected to `/login`
- Loading states have been added to all API calls
- Error handling with toast notifications for all API failures
- No visual changes have been made - only backend integration
