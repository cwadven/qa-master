import {Fragment, useState} from 'react';

const Navbar = () => {
    const [count, setCount] = useState(0);

    return (
        <Fragment>
            <div>멋진 Navbar를 만들어보겠습니다</div>
        </Fragment>
    );
}

export default Navbar;