import { Link } from '@inertiajs/react';

export default function Nav3() {
    return (
        <>
            <li>
                <Link to={`/page-pricing`}>Для такси</Link>
            </li>
            <li>
                <Link to={`/page-pricing`}>Для грузовиков</Link>
            </li>
            <li>
                <Link to={`/page-pricing`}>Для спецтехники</Link>
            </li>
            <li>
                <Link to={`/page-pricing`}>Выдача лицензий</Link>
            </li>
            <li>
                <Link to={`/page-pricing`}>Для партнеров</Link>
            </li>
        </>
    );
}
