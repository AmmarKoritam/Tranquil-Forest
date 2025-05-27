// Library
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updataCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updataCurrentUser,

    onSuccess: ({ user }) => {
      //   queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.setQueryData(["user"], user);
      toast.success("User Edit successfullfy");
    },

    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
