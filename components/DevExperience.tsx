import { Box, Divider } from '@mui/material'
import React from 'react'
import { GradientHeader } from './GradientHeader'
import { StackTecElement } from './StackTecElement'

const DevExperience = () => {
  return (
    <section>
        <Box>
        <GradientHeader text='My experience in development'/>
        <Divider />
        <Box p={'2rem'}>            
            <StackTecElement 
            title='IBM'
            img='/ibm.svg'
            meAndText='It was my first great experience at a big tec company. I am not going to liem it was pretty unexpected for me as a dev without any dev experience. Me working for IBM as a Software Engineer was really a dream coming true.'
            experience='There I got a lot of coding with React. Creating components out of an Adobe XD mock up. Styling with Carbon Components (component library), Styled-components (styling library) and CSS. I also got experience coding in Golang creating endpoints I consumed with React. All along an Agile methodology that I loved.'
            />
        </Box>
        <Divider />
        <Box p={'2rem'}>            
            <StackTecElement 
            title='Apex Systems'
            img='/apex-systems.svg'
            meAndText='After IBM, I got into Apex Systems as a Front end Consultant. There I worked with React, Typescript and PHP implementing several tasks about implementing payment methods for an Ecommerce platform. Algo algon an Agile Methodology'
            experience='Working in Apex I improved my React.js skills now using Typescript and all its benefits over javascript. A better development experience I really enjoy.'
            />
        </Box>
        </Box>
    </section>
    )
}

export default DevExperience;