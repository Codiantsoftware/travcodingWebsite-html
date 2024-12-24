import React from "react";
import { Breadcrumb as BsBreadcrumb } from "react-bootstrap";
import frontendRouteMap from "../../../../routes/Frontend/frontendRouteMap";
import { Link } from "react-router-dom";
export function Breadcrumb({breadcrumb = []}) {
    return (
        <>
            <BsBreadcrumb>
                <li className="breadcrumb-item"><Link to={frontendRouteMap.HOME.path}><em className="icon-home"></em></Link></li>
                {breadcrumb.map((item, key) => {
                    
                    return(
                        <li className={`breadcrumb-item ${item.path === undefined ? 'active' : ''}`} key={key} >
                            {
                                item.path !== undefined ? (
                                    <Link className="breadcrumb-item" to={item.path}>{item.name}</Link>
                                ) : (
                                item.name
                                )
                            }
                        </li>
                    ) 
                })}
            </BsBreadcrumb>
        </>
    );
}