import React from 'react';
import FacebookShareLink from 'react-facebook-share-link';
import TwitterShareLink from 'react-twitter-share-link';
import { Twitter, Facebook } from '../IconLibrary';

const ShareLink = ({
  twitter = false,
  facebook = false,
  message = 'Check out this electric car I found on Neev',
  url,
}) => {
  if (twitter) {
    return (
      <TwitterShareLink link={url} text={message}>
        {(link) => (
          <a href={link} target='_blank' rel='noreferrer'>
            <Twitter />
          </a>
        )}
      </TwitterShareLink>
    );
  }

  if (facebook) {
    return (
      <FacebookShareLink link={url}>
        {(link) => (
          <a href={link} target='_blank' rel='noreferrer'>
            <Facebook />
          </a>
        )}
      </FacebookShareLink>
    );
  }
  return null;
};

export default ShareLink;
