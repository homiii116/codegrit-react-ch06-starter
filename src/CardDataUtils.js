import imageOne from './images/image-one.jpg';
import imageTwo from './images/image-two.jpg';
import avatarOne from './images/avatar-one.png';
import avatarTwo from './images/avatar-two.png';
import moment from 'moment';

const postTimeOne = moment('2020-11-21 15:00:00').format('X');
const postTimeTwo = moment('2020-11-22 15:00:00').format('X');
const postTimeThree = moment('2020-11-23 15:00:00').format('X');
const postTimeFour = moment('2020-11-24 15:00:00').format('X');

const cardDataOne = {
  id: 1,
  poster: "posteruser1",
  posterAvatar: avatarOne,
  imageUrl: imageOne,
  comments: [
    {
      postedAt: postTimeOne,
      poster: "commenter1",
      body: "This is the insta-card"
    },
    {
      postedAt: postTimeTwo,
      poster: "commenter2",
      body: "Cool!"
    }
  ]
}

const cardDataTwo = {
  id: 2,
  poster: "posteruser2",
  posterAvatar: avatarTwo,
  imageUrl: imageTwo,
  comments: [
    {
      postedAt: postTimeThree,
      poster: "commenter3",
      body: "This is my cat!"
    },
    {
      postedAt: postTimeFour,
      poster: "commenter4",
      body: "Cute!"
    }
  ]

}

export const fetchData = (id = 1) => {
  return new Promise(function (resolve) {
    const data = id === 1 ? cardDataOne : cardDataTwo;
    setTimeout(() => {
      resolve(data);
    }, 1000)
  })
}