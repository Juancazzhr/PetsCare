import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import { useForm, SubmitHandler } from 'react-hook-form'
import styles from '../../Appointments.module.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const professionals = ['Dr. Pepe Hongo', 'Dra. Blanca Nieves', 'Dr. Esteban Quito']

interface Props {
    handlerProfessionalStep: (data: any) => void,
    /* defaultValues: CheckoutInput */
}

const ProfessionalStep = ({ handlerProfessionalStep }: Props) => {

    const [professional, setProfessional] = useState('');

    const { control, formState: { errors }, handleSubmit } = useForm(/* {
        resolver: yupResolver(schemaProfessional)
    } */);

    const handleChangeProfessional = (event: SelectChangeEvent) => {
        setProfessional(event.target.value as string);
    };

    const onSubmit: SubmitHandler<any> = (data) => {
        handlerProfessionalStep(data)
    }


    return (
        <form className={styles.formProfessional} onSubmit={handleSubmit(onSubmit)}>
            <Stack className={styles.selectProfessional}>
                <FormControl fullWidth>
                    <InputLabel id="professionalSelectLabel" >Listado de profesionales</InputLabel>
                    <Select
                        labelId="professionalSelectLabel"
                        id="professionalSelect"
                        value={professional}
                        label="professionalSelect"
                        onChange={handleChangeProfessional}
                    >
                        {professionals.map((professional, index) =>
                            <MenuItem key={index} value={professional}>{professional}</MenuItem>
                        )}

                    </Select>
                </FormControl>
            </Stack>
            <Box display={'flex'} justifyContent={'end'} position={'relative'} bottom={'-125px'}>
                <Button type='submit' variant='outlined' color='secondary' className={styles.btnStepper}>Siguiente</Button>
            </Box>
        </form>
    )
}

export default ProfessionalStep