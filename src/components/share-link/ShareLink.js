import React from 'react';
import FacebookShareLink from 'react-facebook-share-link';
import TwitterShareLink from 'react-twitter-share-link';
import { Twitter, Facebook, Whatsapp } from '../IconLibrary';

const ShareLink = ({
  twitter = false,
  facebook = false,
  whatsapp = false,
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

  if (whatsapp) {
    let whatsappLink = `https://api.whatsapp.com/send?text=${message}%20${url}`;
    return (
      <a href={whatsappLink} target='_blank' rel='noreferrer'>
        <Whatsapp />
      </a>
    );
  }
  return null;
};

export default ShareLink;
