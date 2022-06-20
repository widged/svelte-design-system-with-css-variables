<!--
### Social network link with icon
 -->
<script lang="ts">
  import instagramIcon from '../../assets/icons/social/instagram.svg';
  import twitterIcon from '../../assets/icons/social/twitter.svg';
  import facebookIcon from '../../assets/icons/social/facebook.svg';
  import flickrIcon from '../../assets/icons/social/flickr.svg';
  import youtubeIcon from '../../assets/icons/social/youtube.svg';
  import openseaIcon from '../../assets/icons/social/opensea.svg';
  import foundationIcon from '../../assets/icons/social/foundation.svg';
  import tiktokIcon from '../../assets/icons/social/tiktok.svg';
  import mailIcon from 'lucide-static/icons/mail.svg';
  import phoneIcon from 'lucide-static/icons/phone.svg';

  /** Social network */
  export let type: keyof typeof types;
  /** Social network user */
  export let value: string;

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
    tiktok: tiktokIcon
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
    foundation: `https://foundation.app/@${value}`
  };
</script>

<style lang="postcss">
  .button {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    & :global(svg) {
      width: var(--size-5);
      max-width: var(--size-5);
      max-height: var(--size-5);
    }
  }
</style>

<a
  class="button {$$props.class || ''}"
  href={types[type]}
  target="blank_"
  rel="noopener noreferrer"
>
  {@html icons[type]}
</a>
