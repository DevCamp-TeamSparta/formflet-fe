export default function checkPlatform() {
  const user = navigator.userAgent;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(user)) {
    // True for mobile device
    return 'mobile';
  }
  return 'pc';
}
