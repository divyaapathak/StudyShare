```jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Eye, EyeOff } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    branch: "",
    semester: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            college: formData.college,
            branch: formData.branch,
            semester: formData.semester,
          }),
        }
      );

      const data = await response.json();

      console.log("REGISTER RESPONSE:", data);

      if (!response.ok) {
        throw new Error(
          data.message || "Registration Failed"
        );
      }

      alert(
        data.message || "Registration Successful"
      );

      setFormData({
        name: "",
        email: "",
        college: "",
        branch: "",
        semester: "",
        password: "",
        confirmPassword: "",
      });

      navigate("/login");
    } catch (error) {
      console.error("REGISTER ERROR:", error);

      alert(
        error.message || "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8"
      >

        {/* Logo */}
        <div className="flex justify-center">
          <div className="bg-blue-600 p-3 rounded-xl">
            <BookOpen
              className="text-white"
              size={30}
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mt-5">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Join StudyShare and start sharing notes.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          {/* Full Name */}
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* College */}
          <div>
            <label className="block mb-2 font-medium">
              College
            </label>

            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              placeholder="Enter college name"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Branch and Semester */}
          <div className="grid md:grid-cols-2 gap-4">

            {/* Branch */}
            <div>
              <label className="block mb-2 font-medium">
                Branch
              </label>

              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                placeholder="CSE"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Semester */}
            <div>
              <label className="block mb-2 font-medium">
                Semester
              </label>

              <select
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">
                  Select
                </option>

                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>

          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
                className="w-full border rounded-xl px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                className="absolute right-4 top-3.5 text-gray-500"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <div className="relative">

              <input
                type={
                  showConfirm
                    ? "text"
                    : "password"
                }
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                required
                className="w-full border rounded-xl px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                className="absolute right-4 top-3.5 text-gray-500"
                onClick={() =>
                  setShowConfirm(
                    !showConfirm
                  )
                }
              >
                {showConfirm ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            {loading
              ? "Creating Account..."
              : "Register"}
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}

          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </motion.div>
    </div>
  );
}
```
