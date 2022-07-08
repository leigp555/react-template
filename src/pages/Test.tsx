import React from "react";
import {useParams,NavLink, Outlet,useSearchParams,useLocation} from 'react-router-dom'

interface Props {

}

const Test: React.FC<Props> = () => {
    const params=useParams()
    let location = useLocation();
    console.log(location);
    const [searchParams, setSearchParams] = useSearchParams()
    if(searchParams.get("name")) console.log(searchParams.get("name"))
    return (
        <>
            <nav>
                <NavLink to="/test/login?name=lgp" style={{marginRight:'30px'}}>login</NavLink>
                <NavLink to="/test/xxx">params</NavLink>
            </nav>
            <div>
                <Outlet/>
            </div>
            <div>
                {params.id?params.id:"yyy"}
            </div>

        </>
    )
}

export default Test
