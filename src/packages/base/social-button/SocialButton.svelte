<script context="module">
  /*  export let type ={
    email: mailIcon,
    phone: phoneIcon,
    instagram: instagramIcon,
    twitter: twitterIcon,
    facebook: facebookIcon,
    youtube: youtubeIcon,
    flickr: flickrIcon,
    opensea: openseaIcon,
    foundation: foundationIcon,
    tiktok: tiktokIcon,
  }
  */
</script>

<!--
### Social network link with icon
 -->
<script>
  import instagramIcon from './etc/instagram.svg';
  import twitterIcon from './etc/twitter.svg';
  import facebookIcon from './etc/facebook.svg';
  import flickrIcon from './etc/flickr.svg';
  import youtubeIcon from './etc/youtube.svg';
  import openseaIcon from './etc/opensea.svg';
  import foundationIcon from './etc/foundation.svg';
  import tiktokIcon from './etc/tiktok.svg';
  import mailIcon from './etc/mail.svg';
  import phoneIcon from './etc/phone.svg';

  /** Social network */
  export let type;
  /** Social network user */
  export let value;

  const icons = {
    email: mailIcon,
    phone: phoneIcon,
    instagram: instagramIcon,
    twitter: twitterIcon,
    facebook: facebookIcon,
    youtube: youtubeIcon,
    flickr: flickrIcon,
    opensea: openseaIcon,
    foundation: foundationIcon,
    tiktok: tiktokIcon,
  };

  $: types = {
    email: `mailto:${value}`,
    phone: `tel:${value}`,
    instagram: `https://instagram.com/${value}`,
    twitter: `https://twitter.com/${value}`,
    facebook: `https://facebook.com/${value}`,
    opensea: `https://opensea.io/${value}`,
    flickr: `https://www.flickr.com/people/${value}`,
    youtube: value,
    tiktok: `https://tiktok.com/@${value}`,
    foundation: `https://foundation.app/@${value}`,
  };
</script>

<a
  class="button {$$props.class || ''}"
  href={types[type]}
  target="blank_"
  rel="noopener noreferrer"
>
  <img src={icons[type]} alt={type} />
</a>

<style>
  .button {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }
  .button svg,
  .button img {
    width: var(--size-5);
    max-width: var(--size-5);
    max-height: var(--size-5);
  }
</style>
