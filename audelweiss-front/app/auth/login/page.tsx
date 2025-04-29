"use client";
import { useUser } from "@/src/hooks/useUser";
// import { useRouter } from "next/navigation";

export default function LoginPage() {
  // const router = useRouter();
  const { login, error, logout } = useUser();

  // if (user && !loading) {
  //     router.push("/home");
  // }

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const identifier = formData.get("identifier") as string;
    const password = formData.get("password") as string;

    await login({ identifier, password });
    if (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <form className="flex flex-col items-center justify-center h-screen bg-gray-100" onSubmit={handleLogin}>
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input name="identifier" type="text" placeholder="Username" className="mb-2 p-2 border border-gray-300 rounded" />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      <button className="mt-2 bg-gray-300 text-black px-4 py-2 rounded" onClick={logout}>
        Logout
      </button>
      <p className="mt-4 ">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-500">
          Register
        </a>
      </p>
    </form>
  );
}
