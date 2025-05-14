
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-muted/40 p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex items-center justify-between rounded-lg bg-background p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-primary">
                <span className="text-xl font-bold text-primary-foreground">CMS</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Coaching Management System</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              Welcome, <span className="font-medium text-foreground">{user?.name}</span>
            </div>
            <Button variant="outline" onClick={logout}>
              Sign Out
            </Button>
          </div>
        </header>

        <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>Manage your coaching sessions</CardDescription>
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

          <Card>
            <CardHeader>
              <CardTitle>Clients</CardTitle>
              <CardDescription>View and manage your clients</CardDescription>
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
            <CardHeader>
              <CardTitle>Resources</CardTitle>
              <CardDescription>Access coaching materials</CardDescription>
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
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
