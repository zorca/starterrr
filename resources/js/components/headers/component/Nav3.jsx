import { menuItems } from '@/data/menu';
import { useEffect, useState } from 'react';

export default function Nav3() {
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        // Получаем текущий путь (без домена и query-параметров)
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <>
            {menuItems.map((item) => (
                <li key={item.id}>
                    <a href={item.href} className={currentPath === item.href ? 'menu-item-active' : ''}>
                        {item.label}
                    </a>
                </li>
            ))}
        </>
    );
}
