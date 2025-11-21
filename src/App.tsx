import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dashboard from "./pages/Dashboard";
import Packages from "./pages/Packages";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Index from "./pages/Index";
import ResearchHub from "./pages/research"; // Import the ResearchHub component

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Missing Clerk Publishable Key. Did you set VITE_CLERK_PUBLISHABLE_KEY in your .env?");
}

const queryClient = new QueryClient();

const RedirectAfterSignIn = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]);

  return null;
};

const App = () => (
  <ClerkProvider publishableKey={clerkPubKey}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <RedirectAfterSignIn />
          <Routes>
            <Route path="/" element={
              <>
                <SignedIn>
                  <Dashboard />
                </SignedIn>
                <SignedOut>
                  <Index />
                </SignedOut>
              </>
            } />
            <Route path="/packages" element={<Packages />} />
            <Route path="/research" element={<ResearchHub />} /> {/* Added route for /research */}
            <Route path="/dashboard" element={
              <SignedIn>
                <Dashboard />
              </SignedIn>
            } />
            <Route path="/profile" element={
              <SignedIn>
                <Profile />
              </SignedIn>
            } />
            <Route path="/auth" element={
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ClerkProvider>
);

export default App;