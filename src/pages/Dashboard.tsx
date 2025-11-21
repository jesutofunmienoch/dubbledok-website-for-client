import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  FileText, 
  MessageSquare,
  Upload,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, isSignedIn, isLoaded } = useUser();

  // Redirect if not authenticated
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate('/auth');
    }
  }, [isSignedIn, isLoaded, navigate]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isSignedIn) {
    return null;
  }

  // Mock data for demo - in real app this would come from your backend
  const projects = [
    {
      id: "1",
      title: "Machine Learning Thesis - Chapter 1-5",
      status: "in_progress",
      progress: 60,
      dueDate: "2025-02-15",
      category: "research",
      consultant: "Dr. Sarah Johnson"
    },
    {
      id: "2", 
      title: "Data Analysis Implementation",
      status: "review",
      progress: 85,
      dueDate: "2025-01-30",
      category: "implementation",
      consultant: "Alex Chen"
    }
  ];

  const recentActivity = [
    {
      type: "message",
      content: "New message from Dr. Sarah Johnson",
      time: "2 hours ago"
    },
    {
      type: "milestone",
      content: "Chapter 3 completed and submitted",
      time: "1 day ago"
    },
    {
      type: "file",
      content: "Data analysis results uploaded",
      time: "3 days ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in_progress': return 'bg-blue-500';
      case 'review': return 'bg-yellow-500';
      case 'pending': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="h-4 w-4" />;
      case 'in_progress': return <Clock className="h-4 w-4" />;
      case 'review': return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {user?.fullName || user?.primaryEmailAddress?.emailAddress}
          </h1>
          <p className="text-muted-foreground">
            Here's an overview of your research projects and recent activity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Active Projects
                </CardTitle>
                <CardDescription>
                  Track the progress of your ongoing research projects
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="font-semibold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          Consultant: {project.consultant}
                        </p>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`${getStatusColor(project.status)} text-white`}
                      >
                        <span className="flex items-center gap-1">
                          {getStatusIcon(project.status)}
                          {project.status.replace('_', ' ')}
                        </span>
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Due: {project.dueDate}</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Chat
                        </Button>
                        <Button size="sm" variant="outline">
                          <FileText className="h-4 w-4 mr-1" />
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Common tasks and services you might need
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <FileText className="h-6 w-6" />
                    <span className="text-sm">New Project</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Upload className="h-6 w-6" />
                    <span className="text-sm">Upload Files</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <MessageSquare className="h-6 w-6" />
                    <span className="text-sm">Contact Support</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Active Projects</span>
                  <span className="font-semibold">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Completed</span>
                  <span className="font-semibold">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Messages</span>
                  <span className="font-semibold">12</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div className="space-y-1">
                      <p className="text-sm">{activity.content}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Available Services */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Browse Services</CardTitle>
                <CardDescription>
                  Explore our research support packages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-hero hover:opacity-90"
                  onClick={() => navigate('/packages')}
                >
                  View All Packages
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;