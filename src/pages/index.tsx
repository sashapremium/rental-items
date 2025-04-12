import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { Home } from '@pages/home';
import { Cart } from '@pages/cart';
import { Login } from '@pages/login';
import { Profile } from '@pages/profile';
import { Booking } from '@pages/booking';
import { History } from '@pages/orders-history';
import { Category } from '@pages/category';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthLayout>
              <RootLayout />
            </AuthLayout>
          }
        >
          <Route path="catalog" element={<Home />}>
            <Route path=":name_category" element={<Home />}>
              <Route path=":id" element={<Home />} />
            </Route>
          </Route>
          {/* <Route path="/category" element={<Category />}>
            <Route path=":name_category" element={<CategoryDetail />} />
          </Route> */}
          <Route path="cart" element={<Cart />}>
            <Route path="booking" element={<Booking />} />
          </Route>
          <Route path="profile" element={<Profile />}>
            <Route path="orders-history" element={<History />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
