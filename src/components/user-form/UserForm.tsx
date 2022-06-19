import { Autocomplete, Avatar, Box, Button, Checkbox, Chip, CircularProgress, FormControlLabel, Input, InputLabel, TextField } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { makeStyles } from '@mui/styles';
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, ContentMentorForm } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import ImgPhoto from "../../assets/no-photo.svg";
import { IReadUserDto, ISkill, IUser } from "../../model/model";
import { getSkills, getSkillsFilteredByName, updateUser } from "../../services/firebase/firebase";
import { isString } from "formik";
import { capitalize } from "../../utils/text-utils";

const useStyles = makeStyles({
    container: {
        padding: '0 2rem 0',
        zIndex: 999,
        height: '100%',
    },
    cameraBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '22px',
        height: '22px',
        backgroundColor: 'white',
        borderRadius: '50%',
        position: 'absolute',
    },
    avatarBox: {
        display: 'flex',
        width: '90px',
        height: '90px',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        ':hover': { cursor: 'pointer' },
    },
});

export const UserForm = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const { user: cUser, loadUserInfo } = useAuth()
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState<IReadUserDto>({ ...cUser } as IReadUserDto)
    const [skillFilter, setSkillFilter] = useState<readonly ISkill[]>([])
    const [skills, setSkills] = useState<ISkill[]>(cUser?.skills || [])

    useEffect(() => {
        if (!open) {
            setSkillFilter([])
        }
    }, [open])

    useEffect(() => {
        let active = true;

        if ( !inputValue) {
            return undefined;
        }
        setLoading(true)
        getSkillsFilteredByName(inputValue).then(list => {
            setSkillFilter(list)
            setLoading(false)
        })

        return () => {
            active = false;
        };
    }, [ inputValue]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, isMentor: event.target.checked })
    };

    const handleSave = async (e: FormEvent) => {
        console.log('passando aqui no handle save', user);
        e.preventDefault()
        try {
            let result = await updateUser(user, skills)
            if (result) {
                await loadUserInfo()
                navigate('/')
            } else {
                alert("Fudeo!! verifique seus dados")
            }
        } catch (err) {
            alert(err)
        }
    }

    const handleOnSkillChange = (event: React.SyntheticEvent<Element, Event>, values: (string | ISkill)[]) => {
        let mSkills = values.map(el => {
            if (isString(el)) {
                return { name: el } as ISkill
            } else {
                return el
            }
        })
        //TODO remove duplicated skill based on docRef if exist or Name
        setSkills(mSkills)
    }

    return <>
        <Container>
            <ContentMentorForm>
                <Box className={classes.avatarBox}>
                    <InputLabel>
                        <Avatar
                            src={user.photo ?? ImgPhoto}
                            alt="profile-avatar"
                            sx={{ ':hover': { cursor: 'pointer' }, width: '88px', height: '88px' }}
                        />
                        <Input
                            type="file"
                            name="file-upload"
                            inputProps={{ accept: 'image/*, text/*' }}
                            sx={{ display: 'none' }}
                        />
                    </InputLabel>
                    <Box className={classes.cameraBox}>
                        <CameraAltIcon color="secondary" fontSize="small" />
                    </Box>
                </Box>
                <TextField fullWidth type="text" label="Nome" margin="dense"
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    defaultValue={user?.name || ''} />
                <TextField fullWidth type="email" label="Email" margin="dense" disabled
                    defaultValue={user?.email}
                />
                <TextField fullWidth type="text" label="Cargo" margin="dense"
                    onChange={(e) => setUser({ ...user, occupation: e.target.value })}
                    defaultValue={user?.occupation || ''} />

                <Autocomplete
                    multiple
                    id="tags-filled"
                    options={skillFilter}
                    loading={loading}
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    getOptionLabel={(option) => {
                        let opt = option as any;
                        return opt.name || opt;
                    }}
                    value={skills}
                    onChange={handleOnSkillChange}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    sx={{ width: '100%' }}
                    freeSolo
                    renderTags={(value: ISkill[], getTagProps) =>
                        value.map((option, index: number) => (
                            <Chip
                                variant="outlined"
                                sx={{'&.MuiChip-label' : {
                                    textTransform: 'capitalize'
                                }}}
                                label={capitalize(option.name || option.toString())} 
                                {...getTagProps({ index })} />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Skills"
                            margin="dense"
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <>
                                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                        {params.InputProps.endAdornment}
                                    </>
                                ),
                            }}
                        />
                    )}
                />
                <TextField fullWidth type="text" label="Linkedin" margin="dense" value={user.linkedinURI || ''}  onChange={(e) => setUser({ ...user, linkedinURI: e.target.value })} />
                <TextField fullWidth type="text" label="Github" margin="dense" value={user.githubURI || ''} onChange={(e) => setUser({ ...user, githubURI: e.target.value })} />

                {/* <input
                    type="text"
                    required
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    value={user?.name || ''}
                    placeholder="Nome" /> */}
                {/* <input
                    type="email"
                    required
                    value={user?.email}
                    disabled
                    placeholder="Email" /> */}
                {/* <input
                    type="text"
                    required
                    onChange={(e) => setUser({ ...user, occupation: e.target.value })}
                    value={user?.occupation || ''}
                    placeholder="Cargo" /> */}
                {/* <textarea
                    //onChange={(e) => setSkill({ ...skill, skill.name: e.target.value })}
                    value={user.skills.map(i => i.name).join(",") || ''}
                    placeholder="Digite aqui o que você pode mentorar separando por vírgulas.." /> */}
                <FormControlLabel
                    label="Quero ser mentor"
                    sx={{ mt: '1rem' }}
                    control={
                        <Checkbox
                            color="secondary"
                            checked={user.isMentor || false}
                            onChange={handleChange}
                        />
                    }
                />
                <Button fullWidth variant="outlined" type="submit" onClick={handleSave}>Salvar</Button>
                {/* <button type="submit" onClick={handleSave} >Salvar</button> */}
            </ContentMentorForm>
        </Container>
    </>
}