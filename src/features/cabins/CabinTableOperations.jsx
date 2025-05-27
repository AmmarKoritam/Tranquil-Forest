// UI
import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-Ascending", label: "Sort by name (A-Z)" },
          { value: "name-Descending", label: "Sort by name (Z-A)" },
          {
            value: "regularPrice-Ascending",
            label: "Sort by price (low frist)",
          },
          {
            value: "regularPrice-Descending",
            label: "Sort by price (high frist)",
          },
          {
            value: "maxCapacity-Ascending",
            label: "Sort by Capacity (low frist)",
          },
          {
            value: "maxCapacity-Descending",
            label: "Sort by Capacity (high frist)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
