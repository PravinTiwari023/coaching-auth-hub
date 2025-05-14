
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigate } from "react-router-dom";
import { ChevronDown, Home, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Dashboard = () => {
  const { user, logout, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {/* Desktop navigation */}
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-52">
            <nav className="grid gap-2 text-lg font-medium">
              <a href="#" className="flex items-center gap-2 text-lg font-semibold">
                <div className="rounded-full bg-primary p-1">
                  <span className="text-sm font-bold text-primary-foreground">CMS</span>
                </div>
                Coaching Management
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-primary"
              >
                <Home className="h-5 w-5" />
                Dashboard
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                Clients
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                Sessions
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                Resources
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <a href="#" className="flex items-center gap-2 md:hidden">
          <div className="rounded-full bg-primary p-1">
            <span className="text-sm font-bold text-primary-foreground">CMS</span>
          </div>
        </a>
        <nav className="hidden flex-col gap-6 md:flex md:flex-row">
          <a href="#" className="flex items-center gap-2 text-lg font-semibold">
            <div className="rounded-full bg-primary p-1 px-2">
              <span className="text-sm font-bold text-primary-foreground">CMS</span>
            </div>
            Coaching Management
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-sm font-medium text-primary"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground"
          >
            Clients
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground"
          >
            Sessions
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground"
          >
            Resources
          </a>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9" onClick={logout}>
            Sign Out
          </Button>
          <Avatar>
            <AvatarImage src="" alt={user?.name || "User"} />
            <AvatarFallback>{user?.name?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="grid flex-1 items-start gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Welcome back, {user?.name}</h1>
            <p className="text-muted-foreground">
              Here's an overview of your coaching activities
            </p>
          </div>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="space-y-1">
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>Manage your coaching sessions</CardDescription>
              </div>
              <Button variant="outline" size="icon">
                <ChevronDown className="h-4 w-4" />
                <span className="sr-only">Show options</span>
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No upcoming sessions.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm" className="w-full">
                Schedule Session
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="space-y-1">
                <CardTitle>Clients</CardTitle>
                <CardDescription>View and manage your clients</CardDescription>
              </div>
              <Button variant="outline" size="icon">
                <ChevronDown className="h-4 w-4" />
                <span className="sr-only">Show options</span>
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No clients found.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm" className="w-full">
                Add Client
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="space-y-1">
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Your latest coaching activities</CardDescription>
              </div>
              <Button variant="outline" size="icon">
                <ChevronDown className="h-4 w-4" />
                <span className="sr-only">Show options</span>
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No recent activities.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm" className="w-full" variant="outline">
                View All Activities
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="space-y-1">
                <CardTitle>Resources</CardTitle>
                <CardDescription>Access coaching materials</CardDescription>
              </div>
              <Button variant="outline" size="icon">
                <ChevronDown className="h-4 w-4" />
                <span className="sr-only">Show options</span>
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No resources available.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm" className="w-full">
                Upload Resource
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="space-y-1">
                <CardTitle>Quick Stats</CardTitle>
                <CardDescription>Your coaching performance</CardDescription>
              </div>
              <Button variant="outline" size="icon">
                <ChevronDown className="h-4 w-4" />
                <span className="sr-only">Show options</span>
              </Button>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex items-center justify-between border-b pb-2">
                <div>Total Sessions</div>
                <div>0</div>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <div>Active Clients</div>
                <div>0</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Completion Rate</div>
                <div>0%</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm" className="w-full" variant="outline">
                View Detailed Analytics
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
