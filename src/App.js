
import './App.css';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Switch, Route,useHistory,useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import { AddUsers } from './AddUsers';
import TextField from '@mui/material/TextField';

function App() {

  const [mode,SetMode] = useState("dark")
  const history=useHistory();


 const theme = createTheme({
  palette: {
    mode: mode
  },
});
  const INTIAL_USERS=[
    {
      name: "Salvatore Wunsch",
      avatar: "https://cdn.fakercloud.com/avatars/kushsolitary_128.jpg",
      zipcode: "95407",
      country: "Buckinghamshire",
      job: "Legacy Optimization Agent",
      id: "1"
     },
     {
      name: "Miss Beth Glover",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Maria_Cruz_Profpic_062013.JPG/1121px-Maria_Cruz_Profpic_062013.JPG",
      zipcode: "42795",
      country: "Borders",
      job: "Internal Paradigm Agent",
      id: "2"
     },
     {
      name: "Miguel Thiel",
      avatar: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48098b7f-7b01-4cca-837d-7d9146bd5d64/deka7nn-829455e6-bb14-4a96-8f92-da0de05b6f39.png/v1/fill/w_1024,h_1024,q_80,strp/merged_profpic_by_yui214_deka7nn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzQ4MDk4YjdmLTdiMDEtNGNjYS04MzdkLTdkOTE0NmJkNWQ2NFwvZGVrYTdubi04Mjk0NTVlNi1iYjE0LTRhOTYtOGY5Mi1kYTBkZTA1YjZmMzkucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.G1sw7uAtnlCLam63EuTiRVveIpKvfTQ205Z2DlJXDhE",
      zipcode: "36828-4906",
      country: "Buckinghamshire",
      job: "Principal Applications Manager",
      id: "3"
     },
     {
      name: "Brett Fisher",
      avatar: "https://cdn.fakercloud.com/avatars/jitachi_128.jpg",
      zipcode: "01155",
      country: "Borders",
      job: "Customer Data Director",
      id: "4"
     },
     {
      name: "Sean Streich V",
      avatar: "https://cdn.fakercloud.com/avatars/jeremery_128.jpg",
      zipcode: "66570-1029",
      country: "Borders",
      job: "National Quality Coordinator",
      id: "5"
     },
     {
      name: "Dr. Traci Grady",
      avatar: "https://cdn.fakercloud.com/avatars/kaelifa_128.jpg",
      zipcode: "82564",
      country: "Bedfordshire",
      job: "Human Accountability Analyst",
      id: "6"
     },
     {
      name: "Melanie Barrows",
      avatar: "https://cdn.fakercloud.com/avatars/alexivanichkin_128.jpg",
      zipcode: "54138",
      country: "Buckinghamshire",
      job: "Investor Mobility Director",
      id: "7"
     },
     {
      name: "Mrs. Flora Homenick",
      avatar: "https://cdn.fakercloud.com/avatars/javorszky_128.jpg",
      zipcode: "94976-6706",
      country: "Buckinghamshire",
      job: "Lead Program Analyst",
      id: "8"
     },
     {
      name: "Janice Hermann",
      avatar: "https://cdn.fakercloud.com/avatars/robinclediere_128.jpg",
      zipcode: "32549",
      country: "Buckinghamshire",
      job: "Corporate Web Engineer",
      id: "9"
     },
     {
      name: "Jeffrey Cremin",
      avatar: "https://cdn.fakercloud.com/avatars/zvchkelly_128.jpg",
      zipcode: "97257-4513",
      country: "Borders",
      job: "Dynamic Metrics Assistant",
      id: "10"
     },
     {
      name: "Miss Herbert Will",
      avatar: "https://cdn.fakercloud.com/avatars/thinkleft_128.jpg",
      zipcode: "25633-7062",
      country: "Cambridgeshire",
      job: "Direct Mobility Orchestrator",
      id: "11"
     }
  ]    
  const[users,setUsers]=useState(INTIAL_USERS)
  return (
    <ThemeProvider theme ={theme}>
      <Paper elevation={4} style 
   = {{minHeight:"100vh"}}>
    <div className="App">
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Button onClick={()=>{
          history.push("/users")}} variant="text" color="inherit">USERS</Button>
        <Button onClick={()=>{
          history.push("/addusers")}} variant="text" color="inherit">ADDUSERS</Button>
          <Button style={{marginLeft : "auto "}}
           onClick={()=> SetMode(mode === "light" ? "dark" : "light")}variant="text" color="inherit">
            {mode === "light" ? "dark" : "light"} MODE</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Switch>
<Route exact path="/users">
<Userslist users={users} setUsers={setUsers}  /> </Route>   
  <Route path="/addusers">
  <AddUsers users={users} setUsers={setUsers} />
  </Route>
  <Route path="/users/edit/:id">
   <EditUsers users={users} setUsers={setUsers} />
</Route>
 <Route path="/">Click users</Route>
 <Route path="**">Not found 404</Route>
  </Switch>
  
    </div>
    </Paper>
    </ThemeProvider>
  );
}
export default App;



function Msg({name,avatar,zipcode,job,country,id,deleteButton}) {
  // const name ="mad"
  const history=useHistory();
  return(
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
    <div className="users" > 
      <img className="profpic" src={avatar} alt={name}/>
     <div className="specs">
      <h3 className="head">{name}</h3>
      <p>Job : {job}</p>
      <p>Zipcode : {zipcode}</p>
      <p>Country : {country}</p>
      </div>   </div>
      </CardContent>
      <CardActions>
      <IconButton onClick={()=>{ 
        history.push("/users/edit/"+ id)}} aria-label="edit"  color="primary">
        <EditIcon />
      </IconButton>{deleteButton}
      </CardActions>
    </Card>
  )
  
}
function Userslist({users , setUsers }){
  return (
  <div className="userslist">
      {users.map((nm,index)=>(<Msg 
      name={nm.name} avatar={nm.avatar}
      zipcode={nm.zipcode} country={nm.country}
       job={nm.job} id={index} key={nm.id}
deleteButton ={<IconButton
      onClick={()=>{
        console.log(index);
       setUsers (users.filter((nm,idx)=> idx !== index ))}} aria-label="delete"  color="error">
        <DeleteIcon />
      </IconButton>} />
      ))}
  </div>
)
}
function EditUsers({users,setUsers}){
  const history=useHistory();
  const{id} = useParams();
  const user = users[id];
  console.log(id,user)
  const [name, setName] = useState(user.name);
  const [avatar, setAvatar] = useState(user.avatar);
  const [job, setJob] = useState(user.job);
  const [zipcode, setZipcode] = useState(user.zipcode);
  const [country, setCountry] = useState(user.country);
  
  const editUser=()=>{
      const updateUser = {
      name, avatar, job, zipcode, country }
   console.log(updateUser);
  const copyUser = [...users];
  copyUser[id] = updateUser;
  setUsers(copyUser)
history.push("/users/")

  };
  return (
    <div className="addusers">
      <TextField value={name}
        onChange={(event) => setName(event.target.value)} label="name" variant="standard" />
      <TextField value={avatar}
        onChange={(event) => setAvatar(event.target.value)} label="avatar" variant="standard" />
      <TextField value={job}
        onChange={(event) => setJob(event.target.value)} label="job" variant="standard" />
      <TextField
        value={zipcode}
        onChange={(event) => setZipcode(event.target.value)} label="zipcode" variant="standard" />
      <TextField
        value={country}
        onChange={(event) => setCountry(event.target.value)} label="country" variant="standard" />
      <Button onClick={editUser} variant="outlined">SaveUser</Button>

    </div>
  );
}