
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import banner from "../images/banner.png"
import Github from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';

const theme = createTheme();

export const Banner = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
            backgroundImage: `url(${banner})`
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="#fff"
              gutterBottom
              fontWeight={400}
            >
              OpenDex
            </Typography>
            <Typography variant="h5" align="center" color="#fff" paragraph>
              A contributable, searchable Pokédex. <br />
               By <Link 
                  target="_blank"
                  href="https://github.com/ae4sri"><Github /> Amin Elnasri</Link>
            </Typography>
          </Container>
        </Box>

      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 2 }} component="footer">
      </Box>
    </ThemeProvider>
  );
}