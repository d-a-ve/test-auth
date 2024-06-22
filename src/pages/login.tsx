import { useQueryClient } from "@tanstack/react-query";
import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { CustomLink } from "../components/LinkButton";
import { useCustomMutation } from "../hooks/useTanstackHooks";
import { createEmailPasswordSession } from "../lib/appwrite/session";
import { sessionQuery } from "../query-options";

export function Login() {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  const queryClient = useQueryClient();
  const { mutate: submitLoginForm, isPending } = useCustomMutation<
    void,
    { email: string; password: string }
  >({
    mutationFn: async (data) => {
      await createEmailPasswordSession(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(sessionQuery);
      toast.success("Signed in successfully, redirecting...");
      formRef.current?.reset();
      navigate("/protected", { replace: true });
    },
    onError: ({ error }) => {
      toast.error(error.message);
    },
  });

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const { email, password } = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    submitLoginForm({
      email,
      password,
    });
  };

  return (
    <main className="w-full max-w-md space-y-12 py-8">
      <div className="flex gap-4">
        <p>
          <CustomLink href="/" label="home" />
        </p>
        <p>
          <CustomLink href="/signup" label="sign up" />
        </p>
        <p>
          <CustomLink href="/protected" label="protected" />
        </p>
      </div>
      <section className="space-y-8">
        <h1 className="text-center text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
          Login to your account
        </h1>
        <div>
          <form className="space-y-6" onSubmit={submitHandler} ref={formRef}>
            <div className="space-y-2">
              <label className="text-lg font-medium" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                name="email"
                placeHolder="Enter your email"
                inputSize="md"
                type="email"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                className="inline-flex flex-col text-lg font-medium"
                htmlFor="password"
              >
                Password
                <span className="text-sm italic">
                  Password must be more than 8 characters
                </span>
              </label>
              <Input
                type="password"
                id="password"
                name="password"
                inputSize="md"
                placeHolder="Enter your password"
                required
                minLength={8}
              />
            </div>
            <div className="pt-4">
              <Button isLoading={isPending} size="lg" className="w-full">
                Login
              </Button>
            </div>
          </form>
          <p className="mx-auto mt-4 w-fit">
            Don't have an account? <CustomLink href="/signup" label="Signup" />
          </p>
        </div>
      </section>
    </main>
  );
}
