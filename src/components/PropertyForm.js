import React, { useState } from "react";
import { useFormik } from "formik";
import { types, neighborhoods } from "../utils/dropdown";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ReactComponent as Dropdown } from "../assets/dropdown.svg";
import {
  Box,
  colors,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
import { styled } from "@mui/system";
import { PrimaryBtn } from "../App";

function PropertyForm() {
  const initialValues = {
    name: "",
    address: "",
    unitNumber: "",
    city: "",
    state: "",
    roomType: "",
    price: "",
    description: "",
    // photos: "",
  };
  const mobileScreen = useMediaQuery("(max-width:800px)");
  const sm = useMediaQuery("(max-width:600px)");
  const BigScreens = useMediaQuery("(min-width:700px)");
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values, { resetForm }) => {
      resetForm({ values: initialValues });
      console.log(JSON.stringify(values));
      alert("Your Response Has Been Recorded");
    },
  });

  const Fields = [
    {
      id: "name",
      ID: "name",
      label: "Enter Name",
      select: false,
      multiline: false,
      value: formik.values.name,
      initial: "",
      gridSpan: {
        xs: 12,
        sm: 6,
        lg: 4,
      },
      //   defaultValue: "",
      config: {
        helperText:
          formik.touched.name && formik.errors.name && formik.errors.email,
      },
    },
    {
      id: "address",
      ID: "address",
      label: "Enter Address",
      select: false,
      multiline: false,
      value: formik.values.address,
      initial: "",
      gridSpan: {
        xs: 12,
        sm: 6,
        lg: 4,
      },
      config: {
        helperText:
          formik.touched.address &&
          formik.errors.address &&
          formik.errors.address,
      },
    },
    {
      id: "unitNumber",
      ID: "Unit Number",
      label: "Enter Unit",
      select: false,
      multiline: false,
      value: formik.values.unitNumber,
      initial: "",
      //   defaultValue: "",

      config: {
        type: "number",
        helperText:
          formik.touched.unitNumber &&
          formik.errors.unitNumber &&
          formik.errors.unitNumber,
      },
      gridSpan: {
        xs: 12,
        sm: 6,
        lg: 4,
      },
    },
    {
      id: "city",
      ID: "City",
      label: "Select City",
      multiline: false,
      value: formik.values.city,
      initial: "",
      //   defaultValue: "",
      select: true,
      values: types,
      gridSpan: {
        xs: 12,
        sm: 6,
        lg: 4,
      },
      config: {
        helperText:
          formik.touched.city && formik.errors.city && formik.errors.city,
      },
    },
    {
      id: "state",
      ID: "State",
      label: "Select State",
      multiline: false,
      value: formik.values.state,
      initial: "",
      //   defaultValue: "",
      select: true,
      values: neighborhoods,
      gridSpan: {
        xs: 12,
        sm: 6,
        lg: 4,
      },
      config: {
        helperText:
          formik.touched.state && formik.errors.state && formik.errors.state,
      },
    },
    {
      id: "roomType",
      ID: "Room Type",
      label: "Select Room Type",
      multiline: false,
      value: formik.values.roomType,
      initial: "",
      //   defaultValue: "",
      select: true,
      gridSpan: {
        xs: 12,
        sm: 6,
        lg: 4,
      },
      values: neighborhoods,
      config: {
        helperText:
          formik.touched.roomType &&
          formik.errors.roomType &&
          formik.errors.roomType,
      },
    },

    {
      id: "price",
      ID: "Price",
      label: "Enter Price",
      select: false,
      multiline: false,
      value: formik.values.price,
      initial: "",
      //   defaultValue: "",
      gridSpan: {
        xs: 12,
        sm: 6,
        lg: 4,
      },
      config: {
        type: "number",
        helperText:
          formik.touched.price && formik.errors.price && formik.errors.price,
      },
    },

    {
      id: "description",
      ID: "Description",
      label: "Enter Description",
      select: false,
      multiline: true,
      value: formik.values.description,
      initial: "",
      minRows: "9",
      gridSpan: {
        xs: 12,
      },
      config: {
        helperText:
          formik.touched.description &&
          formik.errors.description &&
          formik.errors.description,
      },
    },
  ];
  const fileTypes = ["JPG", "PNG", "JPEG"];
  const [file, setFile] = useState(null);
  const handleFileUpload = (file) => {
    setFile(file);
  };
  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ paddingInline: BigScreens ? "63px" : "32px" }}
    >
      <Grid2 container spacing={5}>
        {Fields.map((field) => {
          return (
            <Grid2 {...field.gridSpan}>
              <Box
                component="fieldset"
                sx={{ border: "none", padding: "0px", width: "100%" }}
              >
                <InputLabel
                  htmlFor={field.id} //id
                  sx={{
                    color: "#252B42",
                    fontWeight: "600",
                    textTransform: "capitalize",

                    "& span": {
                      color: "primary.main",
                    },
                  }}
                  required
                >
                  {field.ID}
                </InputLabel>
                <TextField
                  value={field.value}
                  id={field.id} //id
                  name={field.id}
                  required={true}
                  InputLabelProps={{
                    shrink: false,

                    className: "label",
                  }}
                  size={sm ? "medium" : "small"}
                  multiline={field.multiline}
                  fullWidth
                  minRows={8}
                  sx={{
                    backgroundColor: "#f9f9f9",
                    mt: "8px",

                    "& .MuiFormLabel-root": {
                      span: { display: "none" },
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "1px solid #e6e6e6",
                      },
                    },

                    "& .label": {
                      color: "#737373",
                      transition: "none",
                      fontWeight: "400",
                      fontSize: "14px",
                    },
                    "& .label.Mui-focused": {
                      color: "transparent",
                    },

                    "& .MuiSelect-icon": {
                      top: "45%",
                      right: "10%",
                      color: "#252B42",
                      fontWeight: "500",
                    },
                  }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  SelectProps={{
                    IconComponent: Dropdown,
                    MenuProps: { disableScrollLock: !mobileScreen && true },
                  }}
                  label={field.value === field.initial && field.label} // REMEMBER TO: !formik.value &&
                  helperText={field.helperText}
                  {...field.config}
                  select={field.select}
                >
                  {field.select &&
                    field.values.map((opt, idx) => {
                      return (
                        <MenuItem key={idx} value={opt.value}>
                          {opt.label}
                        </MenuItem>
                      );
                    })}
                </TextField>
              </Box>
            </Grid2>
          );
        })}
        <Grid2 xs={12}>
          <StyledUpload>
            <FileUploader
              classes="fileUploader"
              children={<Dropzone mobileScreen={mobileScreen} />}
              multiple={true}
              name="file"
              types={fileTypes}
              handleChange={handleFileUpload}
            />
          </StyledUpload>
          <p>{file ? `File name: ${file[0].name}` : ""}</p>
        </Grid2>
        <Grid2 xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <PrimaryBtn type="submit" sx={{ width: "60%" }}>
            Add New Property
          </PrimaryBtn>
        </Grid2>
      </Grid2>
    </form>
  );
}

export default PropertyForm;

const StyledUpload = styled("fieldset")(({ theme }) => {
  return {
    border: "none",
    padding: "0px",
    width: "100%",
    ".fileUploader": {
      //   display: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      border: "2px dashed #F4511E",
      backgroundColor: "rgb(244,81,30, 1%)",
      "&:hover": {
        backgroundColor: "rgb(244,81,30, 4%)",
      },
      cursor: "pointer",
      padding: "27px",
    },
  };
});

const Dropzone = ({ mobileScreen }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",

        border: "0px",
        outline: "none",
      }}
    >
      <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
        {!mobileScreen ? (
          <>
            {" "}
            Drag your images here, or
            <span
              style={{
                color: "rgb(244,81,30, 100%)",
                fontWeight: "500",
                marginLeft: "5px",
              }}
            >
              browse
            </span>
          </>
        ) : (
          "Click to Upload your images!"
        )}
      </Typography>
      <Typography
        sx={{ fontSize: "12px", fontWeight: "500", color: "rgb(0,0,0, 50%)" }}
      >
        Supported: JPG, JPEG, PNG
      </Typography>
    </Box>
  );
};
