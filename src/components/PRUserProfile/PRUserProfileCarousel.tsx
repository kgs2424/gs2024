import React from 'react';
import { Carousel } from '@mantine/carousel';
import { UserProfile } from './user';
import UserProfileCard from './PRUSerProfileCard'

interface UserProfileCarouselProps {
  users: UserProfile[];
}

const UserProfileCarousel: React.FC<UserProfileCarouselProps> = ({ users }) => {
  return (
    <Carousel
      slideSize="33.33%"
      slideGap="sm"
      align="start"
      slidesToScroll={1}
      orientation="horizontal"
      loop
    >
      {users.map((user, index) => (
        <Carousel.Slide key={index}>
          <UserProfileCard user={user} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default UserProfileCarousel;
