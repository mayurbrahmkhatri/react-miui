import React from 'react'
import {Typography} from '@mui/material'

const MuiTypography = () => {
  return (
      <div>
        component attribute means it will take the html tag which we want to show <br />
        gutterBottom attribute means it will adds the margin at the bottom of element/tag

        <Typography variant='h1'>H1 Heading</Typography>
        <Typography variant='h2'>H2 Heading</Typography>
        <Typography variant='h3'>H3 Heading</Typography>
        <Typography variant='h4' component='h1'>H4 Heading</Typography>
        <Typography variant='h5'>H5 Heading</Typography>
        <Typography variant='h6'>H6 Heading</Typography>
        <Typography variant='subtitle1'>subtitle 1</Typography>
        <Typography variant='subtitle2'>subtitle 2</Typography>

        <Typography variant='body1'>body one Is the deafualt value of typography if i omit it will take "body1" as defualt variat of typography component  \t\t Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cumque illum minima praesentium debitis optio ut molestias vitae minus expedita reprehenderit obcaecati odit, perferendis qui cupiditate tenetur beatae alias neque?</Typography>

        <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid laboriosam in quae sint veritatis explicabo vel dolorum tempore, nam qui voluptatum corrupti minus laudantium voluptatem quam labore esse blanditiis autem!</Typography>
    </div>
  )
}

export default MuiTypography