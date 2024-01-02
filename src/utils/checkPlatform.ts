export default function checkPlatform() {
  const user = navigator.userAgent;

  if (user.indexOf('Mobi')) {
    return 'mobile';
  }
  return 'pc';
}
