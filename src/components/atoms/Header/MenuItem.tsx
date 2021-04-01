import { Link, Text } from '@chakra-ui/react';

interface Props {
    isLast?: boolean,
    to: string,
    children: string,
}

const MenuItem = ({ children, to = '/', isLast }: Props) => {
    return (
        <Link href={to}>
            <Text display="block">
                {children}
            </Text>
        </Link>
    )
}

export default MenuItem
