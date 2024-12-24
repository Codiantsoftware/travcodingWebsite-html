import React from "react";
import { Button } from "../Button";
import { Breadcrumb } from "../Breadcrumb";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export function BannerCommon({bannerData, breadcrumb}) {
    return (
        <>
        <section className="commonBanner">
            <Container>
                {breadcrumb && <Breadcrumb breadcrumb={breadcrumb} />}
                <div className="commonBanner_head text-center">
                    <span className="commonBanner_head_subHead">{bannerData.meta}</span>
                    <h1 className="commonBanner_head_title">{bannerData.heading}</h1>
                    <p className="commonBanner_head_txt mx-auto mb-0 fs-20">{bannerData.para}</p>
                </div>
                <div className="d-flex justify-content-center">
                    <Button type="button" onClick={bannerData.onClick} as={bannerData.buttonLink !== undefined && Link} to={bannerData.buttonLink !== undefined ? bannerData.buttonLink : undefined} variant="primary" label={bannerData.button} className="ripple-effect text-uppercase iconRight" iconPosition="right" showIcon={true} iconClass="right-arrow" />
                </div>
            </Container>
        </section>
        </>
    );
}