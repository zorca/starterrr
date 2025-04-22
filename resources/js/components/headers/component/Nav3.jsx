import { menuItems } from '@/data/menu';

export default function Nav3() {
    return (
        <>
            {menuItems.map((item) => (
                <li key={item.id}>
                    <a href={item.href}>{item.label}</a>
                </li>
            ))}
        </>
    );
}
