// import { createTheme } from '@material-ui/core'
import React from 'react'
// import Footer from './Index'
// import { Icon } from './styles/icons/icons.style'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';



function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="https://excessalphaflow.com/">
          Excess Alpha
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }



export default function FooterContainer() {

    // const theme = createTheme({
    //     position: 'fixed',
    //         bottom: 0,
    //         width: '100%',
    //   });
      

  return (
//     <ThemeProvider theme={theme}>
//       <Footer>
//       <Footer.Wrapper>
//       <Footer.Row>
          
//           {/* <Footer.Column>
//           <Footer.Title>Contact Us</Footer.Title>
//               <Footer.Link href="#">United States</Footer.Link>
//               <Footer.Link href="#">United Kingdom</Footer.Link>
//               <Footer.Link href="#">Australia</Footer.Link>
//               <Footer.Link href="#">Support</Footer.Link>
//           </Footer.Column> */}
//           <Footer.Column>
//           <Footer.Title>Social</Footer.Title>
//               <Footer.Link href="https://www.facebook.com/Excess-Alpha-106246332176769"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
//               <Footer.Link href="https://www.instagram.com/excess_alpha/"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
//               <Footer.Link href="https://www.youtube.com/channel/UCg7-cdGWq0pAvnMuUY76Xxg"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
//               <Footer.Link href="https://twitter.com/ExcessAlphaFlow"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
//           </Footer.Column>
//       </Footer.Row>
//       </Footer.Wrapper>
//   </Footer>
//   </ThemeProvider>

        <Box
        sx={{
        display: 'flex',
        flexDirection: 'column',
        }}
        >
        <CssBaseline />

        <Box
        component="footer"
        sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
            theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
        }}
        >
        <Container maxWidth="sm">
            <Typography variant="body1">
           
            </Typography>
            <Copyright />
        </Container>
        </Box>
        </Box>


  )
}


// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };




// https://www.youtube.com/watch?v=bMq2riFCF90&ab_channel=ChaooCharles









