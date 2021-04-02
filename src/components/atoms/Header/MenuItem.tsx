import { Link, Text } from '@chakra-ui/react';

interface Props {
    isLast?: boolean,
    to: string,
    children: JSX.Element | string,
}

const MenuItem = ({ children, to = '/', isLast }: Props) => {
    return (
        <Link href={to}
        p={4}
        >
            <Text display="block">
                {children}
            </Text>
        </Link>
    )
}

export default MenuItem
