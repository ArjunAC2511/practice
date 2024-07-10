
import './App.css';
import {Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container, Button} from '@mui/material'
 import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'

const cards=[1,2,3,4,5,6,7,8,9]
function App() {
  return (
    <div className="App">
   <CssBaseline/>
   <AppBar position='relative'>
    <Toolbar>
      <PhotoCameraIcon/>
      <Typography variant='h6'>Photo Album</Typography>
    </Toolbar>
   </AppBar>
   <main>
    <Container  maxWidth='sm'>
    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Photo Album</Typography>
    <Typography variant='h5' align='center' color="secondPrimary" paragraph> Hi Hello this is the sample practice page for material ui to upskilling </Typography>
    <div>
      <Grid  container  justifyContent='center' spacing={2}>
        
        <Grid item>
          <Button variant='contained'> See all my photos</Button>
        </Grid>
        <Grid item>
          <Button variant='outlined'>Another pics</Button>
        </Grid>

      </Grid>
    </div>
    </Container>
    <Container maxWidth='md' sx={{padding:'20px 0'}}>
      <Grid container spacing={4} >
      {cards.map(()=>(
            <Grid item  key={cards} xs={12} sd={6} md={4}>
            <Card  sx={{height:'100%',display:'flex',flexDirection:"column"}}>
              <CardMedia
              sx={{paddingTop:'56.25%'}}
              image='https://www.bing.com/ck/a?!&&p=52d2658318edcd9bJmltdHM9MTcxOTk2NDgwMCZpZ3VpZD0yYjU5OGEzZi1iOWJkLTYyMDAtMjFmOC05ZTIxYjg1NTYzZWMmaW5zaWQ9NTc1OQ&ptn=3&ver=2&hsh=3&fclid=2b598a3f-b9bd-6200-21f8-9e21b85563ec&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbWFnZXMmRk9STT1JUUZSQkEmaWQ9RDA1QTU0MTFFQTY0QjRDNUNDOTc0MjU4QkE1MDUyQzU2ODkwODkyNQ&ntb=1'
              tittle="Image Tittle"
              />
              <CardContent sx={{flexGrow:2}}>
                <Typography>Heading</Typography>
                <Typography>This is the image you  use 
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>View</Button>
                <Button size='small' color='primary'>Edit</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
   </main>
   <footer>
    <Typography variant='h2' color="primary" gutterBottom>Footer</Typography> 
    <Typography variant='subtitle1' color='textsecondary' > This is smaple page for practice for material ui</Typography>
   </footer>
    </div>
  );
}

export default App;
