"use client";
import { useUser } from "@/src/hooks/useUser";
// import { useRouter } from "next/navigation";

export default function RegisterPage() {
  //   const router = useRouter();
  const { register } = useUser();

  //   if (user && !loading) {
  //     router.push("/home");
  //   }

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    console.log("Form data:", { username, email, password, confirmPassword });

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    await register({ username, email, password });
  };

  return (
    <form className="flex flex-col items-center justify-center h-screen bg-gray-100" onSubmit={handleRegister}>
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <input
        name="username"
        type="text"
        placeholder="Username"
        className="mb-2 p-2 border border-gray-300 rounded w-64"
      />
      <input name="email" type="email" placeholder="Email" className="mb-2 p-2 border border-gray-300 rounded w-64" />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="mb-2 p-2 border border-gray-300 rounded w-64"
      />
      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        className="mb-4 p-2 border border-gray-300 rounded w-64"
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Register</button>
      <p className="mt-4">
        Already have an account?{" "}
        <a href="/auth/login" className="text-blue-500 hover:underline">
          Login
        </a>
      </p>
    </form>
  );
}
