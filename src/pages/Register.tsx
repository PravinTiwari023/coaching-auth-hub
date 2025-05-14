
import { AuthLayout } from "@/components/AuthLayout";
import { AuthForm } from "@/components/AuthForm";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Register = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen">
      <AuthLayout>
        <div className="p-8">
          <div className="mb-6 flex justify-center">
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-primary">
                <span className="text-xl font-bold text-primary-foreground">CMS</span>
              </div>
            </div>
          </div>
          <AuthForm type="register" />
        </div>
      </AuthLayout>
    </div>
  );
};

export default Register;
