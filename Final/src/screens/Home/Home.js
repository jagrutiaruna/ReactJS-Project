import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from "../../common/header/Header";
import './Home.css';
import {GridList,GridListTile,GridListTileBar,withStyles} from '@material-ui/core';
import {Card,CardContent,FormControl,Input,InputLabel,Select,MenuItem,Checkbox,ListItemText,TextField,Button} from '@material-ui/core';
import logo from '../../assets/logo.svg';


const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
      outerHeight : 250
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    spanMovie: {
        color:theme.palette.primary.light,
        margin: theme.spacing.unit,
        min:240,
        max:240
    },
    cardComp: {
        margin: theme.spacing.unit,
        minWidth:240,
        maxWidth:240
    }
  });
   
    
function Home(props) {
    const {classes} = props;
    const [state,setState] = useState([{movie_id : 0, poster_Url : "", title: "",realeaseDate:"",genre:""}]);
    const [artist,setArtist] = useState([{first_name:"",last_name:""}]);
    
    //Temp Arrays
    const genreArray = [];
    const artistArray = [];

    // Form Event Handlers
    const [movieName,setMovieName] =useState("");
    const handleMovieNameChange = (event) => {
        setMovieName(event.target.value);
    }
    
    state.map(item => (genreArray.push(item.genre)));
    const    genre = [...new Set(genreArray)];
    const [genrenName, setGenreName] = useState([]);
    const handleChange = (event) => {
        setGenreName(event.target.value);
    };

    artist.map(item => (artistArray.push(item.first_name +" "+ item.last_name)));
    const artists = [...new Set(artistArray)];
    const [artistName, setArtistName] = useState([]);
    const handleArtistChange = (event) => {
        setArtistName(event.target.value);
    };

    const [releaseStart,setReleaseStart] = useState();
    const handleReleaseStart = (event) => {
        setReleaseStart(event.target.value);
    }

    const [releaseEnd,setReleaseEnd] = useState();
    const handleReleaseEnd = (event) => {
        setReleaseEnd(event.target.value);
    }

    // Submit Handler
    const handleSubmit=(event) =>{
        event.preventDefault();
        let indicator=true;
        alert(indicator);
    }
    
    const loadMovieLists = () => {
          
        setState([{movie_id : 1, poster_Url : logo, title: "Logo",realeaseDate:"25-04-2021",genre:"Comedy"}
                    ,{movie_id : 2, poster_Url : logo, title: "Logo 2",realeaseDate:"25-04-2021",genre:"Romance"}
                    ,{movie_id : 3, poster_Url : logo, title: "Logo 3",realeaseDate:"25-04-2021",genre:"Rom-Com"}
                    ,{movie_id : 4, poster_Url : logo, title: "Logo 4",realeaseDate:"25-04-2021",genre:"Action"}
                    ,{movie_id : 5, poster_Url : logo, title: "Logo 5",realeaseDate:"25-04-2021",genre:"Action"}
                    ,{movie_id : 6, poster_Url : logo, title: "Logo 6",realeaseDate:"25-04-2021",genre:"Comedy"}]);
        setArtist([{first_name:"Amitabh",last_name:"Bachchan"}
                    ,{first_name:"Anushka",last_name:"Sharma"}
                    ,{first_name:"hrithik",last_name:"roshan"}
                    ,{first_name:"hrithik",last_name:"roshan"}
                    ,{first_name:"hrithik",last_name:"roshan"}]);
        
    }

    
    useEffect(() => {
        
            loadMovieLists();
            
    },[]);

    return(
        <div>
            <Header />
            {/* UpComing Movie Header Div */}
            <div className="upcomingMovieHeader">
                <span >Upcoming Movies</span>
            </div>
            {/* Grid List From Material UI for first section of movie */}
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={5}>
                        {state.map(tile => (
                            <GridListTile key={tile.movie_id}>
                                <img src={tile.poster_Url} alt={tile.title} />
                                    <GridListTileBar
                                        title={tile.title}
                                        classes={{
                                            root: classes.titleBar,
                                            title: classes.title,
                                        }}
                                    />
                            </GridListTile>
                        ))}
                </GridList>
            </div>
            {/* Second Div which has Two Parts */}
            <div className="section-two-main">
                <div className="movie-list-part">
                    <div id="grid">
                            <GridList cols={4}>
                            {state.map(tile => (
                                <GridListTile key={tile.movie_id} id="grid-tile">
                                <img src={tile.poster_Url} alt={tile.title} />
                                <GridListTileBar
                                    title={tile.title +"Realease Date:"+tile.realeaseDate}
                                
                                />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div> 
            </div>
            <div className="filter-form-part">
                <Card id='cardDiv'>
                    <CardContent >
                        <span className={classes.spanMovie}>FIND MOVIES BY:</span>
                        <form  noValidate onSubmit={handleSubmit}>
                            <FormControl className={classes.cardComp}>
                                <InputLabel
                                    htmlFor='movieName'
                                >Movie Name</InputLabel>
                                <Input
                                    onChange={handleMovieNameChange}
                                    name = 'movieName'
                                    id = 'movieName'
                                    value={movieName}
                                ></Input>
                            </FormControl>
                            <br/>
                            <FormControl className={classes.cardComp}>
                                <InputLabel id="genre-select">Genre</InputLabel>
                                    <Select
                                        labelid="genre-select"
                                        id="genre-select-checkbox"
                                        multiple
                                        name='genreName'
                                        value={genrenName}
                                        onChange={handleChange}
                                        input={<Input />}
                                        renderValue={(selected) => selected.join(', ')}
                                        >
                                    {genre.map((genre) => (
                                        <MenuItem key={genre} value={genre}>
                                            <Checkbox checked={genrenName.indexOf(genre) > -1} />
                                            <ListItemText primary={genre} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <br/>
                            <FormControl className={classes.cardComp}>
                                <InputLabel id="artist-select">Artist</InputLabel>
                                    <Select
                                        labelid="artist-select"
                                        id="artist-select-checkbox"
                                        multiple
                                        name='artistName'
                                        value={artistName}
                                        onChange={handleArtistChange}
                                        input={<Input />}
                                        renderValue={(selected) => selected.join(', ')}
                                        >
                                    {artists.map((artist) => (
                                        <MenuItem key={artist} value={artist}>
                                            <Checkbox checked={artistName.indexOf(artist) > -1} />
                                            <ListItemText primary={artist} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <br/>
                            <TextField
                                id="release-start"
                                label="Release Date Start"
                                name='releaseStart'
                                value={releaseStart}
                                className={classes.cardComp}
                                onChange={handleReleaseStart}
                                type="date"
                                placeholder="dd-mm-yyyy"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="release-end"
                                label="Release Date End"
                                name='releaseEnd'
                                value={releaseEnd}
                                className={classes.cardComp}
                                onChange={handleReleaseEnd}
                                type="date"
                                placeholder="dd-mm-yyyy"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <br/>
                            <br/>
                            <Button className={classes.cardComp} variant="contained" color="primary" type='submit'>
                                APPLY 
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div> 
        </div>
        
    );
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Home);