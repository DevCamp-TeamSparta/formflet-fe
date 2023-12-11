/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // dev환경 useEffect 두 번 실행 이슈로 에러 발생
};

module.exports = nextConfig;
