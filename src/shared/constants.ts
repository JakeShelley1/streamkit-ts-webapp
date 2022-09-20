// const url = 'api.getstreamkit.com'
const url = 'http://localhost:8000';
const redirectUrl = `${url}/auth/web`;
const permissions = [
  'viewing_activity_read',
  'channel:read:subscriptions',
  'user:read:email',
];
const clientId = 'uuzddmfm6vl8g39xp8xjxkcfuq7rs2';
const twitchAuthUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code&scope=${permissions.join(
  '+'
)}`;

export const discordUrl = 'https://discord.gg/GpBdFgtkAj';
export const redirectUrlWithPayment = `${url}/auth/web_payment_redirect`;
export const getTwitchAuthUrl = (_redirectUrl: string) =>
  `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${
    _redirectUrl ? _redirectUrl : redirectUrl
  }&response_type=code&scope=${permissions.join('+')}`;
