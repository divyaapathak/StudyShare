import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  BookOpen,
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  // API URL (.env)
  const API = import.meta.env.VITE_API_URL;

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!email.trim() || !password.trim()) {
      return alert("Please fill all fields");
    }

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${API}/auth/login`,
        {
          email: email.trim(),
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );

      // Save Token
      localStorage.setItem("token", data.token);

      // Save User
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      alert(data.message || "Login Successful");

      navigate("/dashboard");

    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message);
      } else if (error.request) {
        alert("Cannot connect to server.");
      } else {
        alert("Something went wrong.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        {/* Logo */}
        <div className="flex justify-center mb-5">
          <div className="bg-blue-100 p-4 rounded-full">
            <BookOpen
              size={40}
              className="text-blue-600"
            />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-slate-800">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Login to your StudyShare account
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        ></form>
                  {/* Email */}
          <div className="relative">
            <Mail
              className="absolute left-4 top-4 text-gray-400"
              size={20}
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock
              className="absolute left-4 top-4 text-gray-400"
              size={20}
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="w-full border border-gray-300 rounded-xl pl-12 pr-12 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-gray-500 hover:text-blue-600 transition"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                className="rounded"
              />
              Remember Me
            </label>

            <Link
              to="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}