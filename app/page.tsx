import {
  Container, Typography, Button, Box, Stack,
  Card, CardContent, Divider, IconButton, Chip, Grid
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LaunchIcon from '@mui/icons-material/Launch';
import VerifiedIcon from '@mui/icons-material/Verified';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export default function Home() {
  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'radial-gradient(circle at top right, #1e293b, #0f172a)',
      pb: 10
    }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>

        {/* HERO SECTION */}
        <Box sx={{ mb: 12, mt: 8, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Benneth Kyle Serrato
          </Typography>
          <Typography variant="h4" sx={{
            mb: 3,
            background: 'linear-gradient(90deg, #60a5fa, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Technical Lead & Scrum Master
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mb: 4, fontSize: '1.2rem', lineHeight: 1.7 }}>
            Building high-performance HR systems and leading Agile teams at Jeonsoft Corporation.
            I bridge the gap between technical architecture and strategic delivery.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <Button variant="contained" size="large" href="mailto:bks0381@gmail.com" startIcon={<EmailIcon />} sx={{ px: 4 }}>
              Hire Me
            </Button>
            <Button variant="outlined" size="large" href="tel:+639306720375" startIcon={<PhoneIcon />} sx={{ px: 4 }}>
              Contact
            </Button>
          </Stack>
        </Box>

        <Grid container spacing={8}>
          {/* LEFT: WORK & EDUCATION */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={6}>
              <Box>
                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <BusinessCenterIcon color="primary" /> Experience
                </Typography>
                <Divider sx={{ mb: 4, opacity: 0.1 }} />

                <Card sx={{
                  mb: 4,
                  transition: '0.3s',
                  position: 'relative',
                  overflow: 'visible',
                  '&:hover': { borderColor: 'primary.main', transform: 'translateX(4px)' }
                }}>
                  {/* Subtle "Verified" Badge in the corner */}
                  <VerifiedIcon sx={{
                    position: 'absolute',
                    top: -10,
                    right: -10,
                    color: '#60a5fa',
                    bgcolor: '#0f172a',
                    borderRadius: '50%',
                    fontSize: '2rem'
                  }} />

                  <CardContent sx={{ p: 4 }}>
                    <Stack direction="row" justifyContent="space-between" flexWrap="wrap" sx={{ mb: 2 }}>
                      <Box>
                        <Typography variant="h6" color="primary">Technical Lead / Scrum Master</Typography>
                        <Typography variant="subtitle1" fontWeight="600">Jeonsoft Corporation</Typography>
                      </Box>
                      <Typography variant="caption" sx={{ color: 'text.disabled', mt: 0.5 }}>
                        Dec 2022 – Dec 2025
                      </Typography>
                    </Stack>
                    <Box component="ul" sx={{ pl: 2, mb: 3, color: 'text.secondary', '& li': { mb: 1.5 } }}>
                      <li>Mentored junior developers and managed feature delivery pipelines.</li>
                      <li>Facilitated Agile ceremonies and optimized sprint velocity.</li>
                      <li>Engineered RESTful APIs and optimized PostgreSQL database architecture.</li>
                      <li>Spearheaded learning and performance module development.</li>
                    </Box>

                    {/* THE COE BUTTON */}
                    <Button
                      variant="text"
                      href="/benneth-coe.pdf" // Ensure this file is in your public folder
                      target="_blank"
                      startIcon={<PictureAsPdfIcon />}
                      sx={{
                        mt: 1,
                        bgcolor: 'rgba(59, 130, 246, 0.1)', // Light blue background
                        color: '#60a5fa',                 // Blue text
                        '&:hover': {
                          bgcolor: 'rgba(59, 130, 246, 0.2)', // Slightly darker on hover
                        },
                        textTransform: 'none',
                        fontWeight: 700,
                        px: 2
                      }}
                    >
                      View Certificate of Employment
                    </Button>
                  </CardContent>
                </Card>
              </Box>

              <Box>
                <Typography variant="h5" fontWeight="bold" gutterBottom>Education</Typography>
                <Divider sx={{ mb: 4, opacity: 0.1 }} />
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography variant="subtitle1" fontWeight="bold">Associate in IT</Typography>
                    <Typography variant="body2" color="text.secondary">Iloilo Science & Tech University</Typography>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography variant="subtitle1" fontWeight="bold">Full Stack Cert</Typography>
                    <Button
                      variant="text"
                      startIcon={<VerifiedIcon />}
                      href="https://share.zertify.zuitt.co/certificate/370971a3-bc04-49fa-a821-4e16281ed737/"
                      target="_blank"
                      sx={{ p: 0, color: 'primary.main' }}
                    >
                      Zuitt Bootcamp
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Grid>

          {/* RIGHT SIDE (Remains the same as your current code) */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={6}>
              <Box sx={{ p: 4, borderRadius: 4, bgcolor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>Technical Stack</Typography>
                <Divider sx={{ mb: 3, opacity: 0.1 }} />

                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>Frontend</Typography>
                <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3, mt: 1 }}>
                  {['React', 'Next.js', 'MUI', 'TypeScript', 'Figma'].map((s) => (
                    <Chip key={s} label={s} size="small" sx={{ bgcolor: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa' }} />
                  ))}
                </Stack>

                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>Backend & DevOps</Typography>
                <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 1 }}>
                  {['Node.js', 'PostgreSQL', 'AWS S3', 'Supabase', 'Git', 'CI/CD', 'Vercel'].map((s) => (
                    <Chip key={s} label={s} size="small" variant="outlined" />
                  ))}
                </Stack>
              </Box>

              <Box>
                <Typography variant="h5" fontWeight="bold" gutterBottom>Projects</Typography>
                <Divider sx={{ mb: 4, opacity: 0.1 }} />
                <Stack spacing={3}>
                  {[
                    { title: 'File Buddy 2.0', url: 'https://file-buddy-2-0.vercel.app/', desc: 'AI-powered document analyzer.' },
                    { title: 'Game Market', url: 'https://game-accounts-buy-an-sell.vercel.app/', desc: 'Gaming account marketplace.' }
                  ].map((project) => (
                    <Card key={project.title} sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
                      <CardContent>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Typography variant="h6">{project.title}</Typography>
                          <IconButton href={project.url} target="_blank" color="primary">
                            <LaunchIcon fontSize="small" />
                          </IconButton>
                        </Stack>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{project.desc}</Typography>
                        <Button fullWidth variant="outlined" href={project.url} target="_blank" size="small">
                          Live Demo
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}