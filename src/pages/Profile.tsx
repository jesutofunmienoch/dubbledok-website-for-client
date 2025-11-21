import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, Mail, Edit, Save, X } from "lucide-react";
import { Toaster, toast } from "sonner";

interface UserMetadata {
  institution?: string;
  researchField?: string;
}

const Profile = () => {
  const navigate = useNavigate();
  const { user, isSignedIn, isLoaded } = useUser();
  const { signOut } = useClerk();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    institution: "",
    researchField: "",
  });

  // Initialize form data with user info
  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || "",
        email: user.primaryEmailAddress?.emailAddress || "",
        institution: (user.unsafeMetadata as UserMetadata)?.institution || "",
        researchField: (user.unsafeMetadata as UserMetadata)?.researchField || "",
      });
    }
  }, [user]);

  // Redirect if not authenticated
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/auth");
    }
  }, [isSignedIn, isLoaded, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await user?.update({
        firstName: formData.fullName.split(" ")[0] || "",
        lastName: formData.fullName.split(" ").slice(1).join(" ") || "",
        unsafeMetadata: {
          institution: formData.institution,
          researchField: formData.researchField,
        },
      });
      toast.success("Profile Updated", {
        description: "Your profile information has been saved successfully.",
      });
      setIsEditing(false);
    } catch (error) {
      toast.error("Error", {
        description: "Failed to update profile. Please try again.",
      });
    }
  };

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 sm:mx-6">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile Settings
            </CardTitle>
            <CardDescription>
              Manage your personal information and research preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Profile Picture */}
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={user?.imageUrl} alt="Profile" />
                  <AvatarFallback>
                    {user?.fullName?.charAt(0) || user?.primaryEmailAddress?.emailAddress?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Profile Picture</p>
                  <p className="text-xs text-muted-foreground">
                    Update your profile picture in your Clerk account settings
                  </p>
                </div>
              </div>

              {/* Profile Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="email"
                      name="email"
                      value={formData.email}
                      disabled
                      className="w-full"
                    />
                    <Mail className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Email can be changed in your Clerk account settings
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="institution">Institution</Label>
                  <Input
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full"
                    placeholder="Your university or organization"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="researchField">Research Field</Label>
                  <Input
                    id="researchField"
                    name="researchField"
                    value={formData.researchField}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full"
                    placeholder="e.g., Machine Learning, Biology"
                  />
                </div>

                <div className="flex gap-2">
                  {isEditing ? (
                    <>
                      <Button type="submit" className="bg-gradient-hero hover:opacity-90">
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsEditing(false)}
                      >
                        <X className="h-4 w-4 mr-2" />
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsEditing(true)}
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
      <Toaster />
    </div>
  );
};

export default Profile;