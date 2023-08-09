import * as C from './styled';

import Switch from 'react-switch';
import { useTheme } from 'styled-components'; // basicamente um createContext

interface ToggleThemeProps {
    handleChangeTheme: () => void
}

export function Header({ handleChangeTheme }: ToggleThemeProps) {
    const { name, colors } = useTheme()

    return (
        <C.Container>
            <h3>Header</h3>

            <Switch 
                onChange={handleChangeTheme}
                checked={name === "light"}
                height={20}
                width={40}
                checkedIcon={false}
                uncheckedIcon={false}
                handleDiameter={20}
                offColor={colors.secondary}
                onColor={colors.secondary}
            />
        </C.Container>
    )
}