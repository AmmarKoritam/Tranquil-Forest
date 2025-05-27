// ibrary
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// Api Services
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: deleteCabin } = useMutation({
    // mutationFn: (id) => deleteCabin(id) === deleteCabin,
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin successfullfy Deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, deleteCabin };
}
