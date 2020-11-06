import React from 'react';
import { ImgWrapper, Img, Button } from '../styles/components/PhotoCard';

import { MdFavoriteBorder } from 'react-icons/md';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

const PhotoCard = ({ id, likes = 0, src }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={DEFAULT_IMAGE} />
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size='32px' />
        {likes} likes!
      </Button>
    </article>
  );
};

export default PhotoCard;
