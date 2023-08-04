import Link from 'next/link';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { _mock } from 'src/_mock';
import { bgGradient } from 'src/theme/css';
import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { PlayerDialog } from 'src/components/player';
import { fShortenNumber } from 'src/utils/format-number';
import { useResponsive } from 'src/hooks/use-responsive';
import ElearningHeroIllustration from 'src/assets/illustrations/elearning-hero-illustration';

// ----------------------------------------------------------------------

const SUMMARY = [
  { value: 14000, label: 'Algún dato', color: 'warning' },
  { value: 1050, label: 'Algún dato ', color: 'error' },
  { value: 59000, label: 'Algún dato', color: 'success' },
] as const;

// ----------------------------------------------------------------------

export default function ElearningLandingHero() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const videoOpen = useBoolean();

  return (
    <>

      <Box
        sx={{
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.9),
            imgUrl: '/assets/background/overlay_1.jpg',
          }),
          overflow: 'hidden',
        }}
      >
        <Container
          sx={{
            py: 8,
            display: { md: 'flex' },
            alignItems: { md: 'center' },
            height: { md: `75vh` },
          }}
        >

            <Stack
  sx={{
    textAlign: 'center', // Centrar el texto en dispositivos pequeños y medianos
    [theme.breakpoints.up('md')]: {
      textAlign: 'center', // Restaurar la alineación normal en dispositivos grandes
    },
    paddingTop: 7,
  }}
>
                <Typography variant="h2">
                  
                   <Box component="span" sx={{ color: 'primary.main' }}>
                    {` Tecnología `}
                  </Box>
                  que
                  <Box component="span" sx={{ textDecoration: ' underline dotted grey' }}>
                    {` genera riqueza`}
                  </Box>
                </Typography>
                {/* <ElearningHeroIllustration /> */}



                <Typography sx={{ color: 'text.secondary', mt: 3, mb: 5 }}>
                Somos una empresa de Fintech que diseña, valida y aplica soluciones financieras para construir portafolios ganadores y estrategias rentables en los mercados financieros.
                </Typography>
                <Stack
  direction="row"
  justifyContent="center" // Centrar horizontalmente en todos los dispositivos
  alignItems="center"
  sx={{ typography: 'h6', mt: 2 }} // Añadir margen superior para separar del subtítulo
>
  <Fab size="medium" color="info" onClick={videoOpen.onTrue} sx={{ mr: 1 }}>
    <Iconify width={24} icon="carbon:play" />
  </Fab>
  Video explicación
</Stack>


                <Divider sx={{ borderStyle: 'dashed', mt: 8, mb: 6 }} />

                <Stack
      direction="row"
      spacing={{ xs: 3, sm: 10 }}
      justifyContent="center" // Centrado horizontal
      sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
                >
                  {SUMMARY.map((item) => (
                    <Stack key={item.value} spacing={0.5} sx={{ position: 'relative' }}>
                      <Box
                        sx={{
                          top: 8,
                          left: -4,
                          width: 24,
                          height: 24,
                          opacity: 0.24,
                          borderRadius: '50%',
                          position: 'absolute',
                          bgcolor: `${item.color}.main`,
                        }}
                      />
                      <Typography variant="h3">{fShortenNumber(item.value)}+</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.label}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>




        </Container>
      </Box>

      <PlayerDialog open={videoOpen.value} onClose={videoOpen.onFalse} videoPath={_mock.video(0)} />
    </>
  );
}
