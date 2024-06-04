import { AuthContextProvider } from '@/context/AuthContext';
import './globals.css';

import { Footer, Navbar } from '@/components';

export const metadata = {
  title: 'Rent Car',
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // const {user} = useAuthContext()

  return (
    <html lang="en">
      <body className="relative">
        <AuthContextProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
