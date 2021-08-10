import React from 'react'
import './home.scss';
import p from '../../img/oneAuctionImage.png';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
      left:'5vw',
    position: 'relative',
    height: 250,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  //רקע
  imageBackdrop: {
    position: 'absolute',
    left:3,
    right: 3,
    top: 3,
    bottom: 3,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
//הכיתוב
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  //הפס שנמצא מתחת הכיתוב בכל תמונה
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const OneAuction = (props) => {
  const classes = useStyles();

  return (<>
  <ButtonBase
          focusRipple
          key={props.item.name}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '30%',
          }}
        >
          <span
            className={classes.imageSrc}
            /*style={{
              backgroundImage:'../../img/oneAuctionImage.png'
              //לשנות לאייטם נקודה תמונה
            }}*/
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {props.item.name}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>

  </>
  )
}
export default OneAuction;
