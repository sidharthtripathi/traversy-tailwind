import { Fragment } from "react"
import Navbar from "./Navbar"
import Section from './Section'
import FeatureSection from './FeatureSection'
import Testimonial from './Testimonial'
import CTA from './CTA'
import Footer from './Footer'
export default function App(){
    return (
        <Fragment>
        <Navbar></Navbar>
        <Section></Section>
        <FeatureSection></FeatureSection>
        <Testimonial></Testimonial>
        <CTA></CTA>
        <Footer></Footer>
        </Fragment>
    )
}