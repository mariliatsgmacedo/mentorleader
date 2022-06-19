import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { alpha, Stack, styled } from '@mui/material';

interface SearchFieldProps {
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
}

export const SearchField = ({ placeholder = "Buscar pelo nome...", value, onChange }: SearchFieldProps) => {
    return (
        <Stack direction={"row"} height="60px">
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                value={value}
                onChange={(ev) => onChange(ev.target.value)}
                sx={{ ml: 1, flex: 1, fontSize: '1.3rem' }}
                placeholder={placeholder}
                inputProps={{ 'aria-label': 'search google maps' }}
            />
        </Stack>
    );
}
