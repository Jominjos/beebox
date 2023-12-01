import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{
        width: 200,
        "& .MuiOutlinedInput-root": {
          // Custom styles for the input field
          backgroundColor: "#f0f0f0",
          borderRadius: "30px", // Adjust the border-radius as needed
          height: "40px",
        },
        "& .MuiInputLabel-root": {
          textAlign: "center", // Center the label
        },
        "& .MuiAutocomplete-option": {
          // Custom styles for each option in the dropdown
          borderBottom: "1px solid #ccc",
          "&:last-child": {
            borderBottom: "none",
          },
        },
      }}
      renderInput={(params) => <TextField {...params} label="Products" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "product1", year: 1994 },
  { label: "product1", year: 1972 },
  { label: "roduct1", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "product1", year: 1972 },
  { label: "roduct1", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
];
