import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../components/Button";
import { useCustomMutation } from "../hooks/useTanstackHooks";
import { deleteCurrentSession } from "../lib/appwrite/session";
import { sessionQuery } from "../query-options";
import { CustomLink } from "../components/LinkButton";

export function Protected() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isPending } = useCustomMutation<void>({
    mutationFn: async () => {
      await deleteCurrentSession();
    },
    onSuccess: () => {
      navigate("/", { replace: true });
      queryClient.invalidateQueries(sessionQuery);
    },
    onError: ({ error }) => {
      toast.error(error.message);
    },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-semibold text-3xl">Welcome to the protected page.</h1>{" "}
      <p className="text-lg">
        You made it here. Thank you for partaking in this test with me
      </p>
      <div className="flex flex-col space-y-2">
        <p>
          Try going to <CustomLink href="/login" label="login page" />
        </p>
        <p>
          Try going to <CustomLink href="/signup" label="sign up page" />
        </p>
        <p>
          Go to <CustomLink href="/" label="home page" />
        </p>
      </div>
      <Button isLoading={isPending} onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}
