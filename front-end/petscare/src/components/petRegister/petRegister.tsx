import React from "react";
import {
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Typography,
  Stack
} from "@mui/material";
import { FormikProps } from "formik";
import styles from '../userRegister/registro.module.css'
import { Pet } from "@/interfaces";

interface Props {  
  pet: Pet[]
}

const PetFields = ({ formik }: { formik: FormikProps<Props> }) => {
  return (
    <>
      <Grid item xs={12} sm={12}>
        <Typography color="primary" variant="h6">
          Mascota 1
        </Typography>
      </Grid>
      <Stack className={styles.bgBoxMascota}>
        <Grid container spacing={2} >
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="petName"
              name="petName"
              label="Nombre"
              value={formik.values?.petName}
              onChange={(event: { target: { value: string; }; }) =>
                formik.setFieldValue("petName", event.target.value)
              }
              error={
                formik.touched.pet?.petName && Boolean(formik.errors.pet?.petName)
              }
              helperText={formik.touched.pet?.petName && formik.errors.pet?.petName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              fullWidth
              error={formik.touched.pet?.type && Boolean(formik.errors.pet?.type)}
            >
              <InputLabel id="mascota-tipo-label">Seleccioná Tipo</InputLabel>
              <Select
                labelId="mascota-tipo-label"
                id="type"
                name="type"
                value={formik.values?.type}
                onChange={(event: { target: { value: string; }; }) =>
                  formik.setFieldValue("type", event.target.value)
                }
              >
                <MenuItem value="tipo1">perro</MenuItem>
                <MenuItem value="tipo2">gato</MenuItem>
                <MenuItem value="tipo3">conejo</MenuItem>
                <MenuItem value="tipo4">tortuga</MenuItem>
                <MenuItem value="tipo5">loro</MenuItem>
                <MenuItem value="tipo6">hámster</MenuItem>
                <MenuItem value="tipo7">otro</MenuItem>
              </Select>
              <FormHelperText>
                {formik.touched.pet?.type && formik.errors.pet?.type}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="race"
              name="race"
              label="Raza"
              value={formik.values?.race}
              onChange={(event: { target: { value: string; }; }) =>
                formik.setFieldValue("race", event.target?.value)
              }
              error={formik.touched.pet?.race && Boolean(formik.errors.pet?.race)}
              helperText={formik.touched.pet?.race && formik.errors.pet?.race}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              fullWidth
              error={formik.touched.pet?.size && Boolean(formik.errors.pet?.size)}
            >
              <InputLabel id="mascota-tamano-label">Seleccioná Tamaño</InputLabel>
              <Select
                labelId="mascota-tamano-label"
                id="size"
                name="size"
                value={formik.values?.size}
                onChange={(event: { target: { value: string; }; }) =>
                  formik.setFieldValue("size", event.target.value)
                }
              >
                <MenuItem value="tipo1">pequeño</MenuItem>
                <MenuItem value="tipo2">mediano</MenuItem>
                <MenuItem value="tipo3">grande</MenuItem>
              </Select>
              <FormHelperText>
                {formik.touched.pet?.size && formik.errors.pet?.size}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default PetFields;