// Library
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { signUp as signUpApi } from "../../services/apiAuth";

export function useSignUp() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => toast.success("User successfully created!"),
  });

  return { signUp, isLoading };
}
