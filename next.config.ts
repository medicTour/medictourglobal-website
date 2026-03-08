import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  requestConfig: './i18n/request.ts'
});

const nextConfig = {
  reactStrictMode: true
};

export default withNextIntl(nextConfig);
