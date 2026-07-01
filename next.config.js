/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/go',
        destination: 'https://okssuvlari.uz',
        // Kelajakda link o'zgarsa, aynan mana shu qatorga yangi link yoziladi
        permanent: false, // 307 vaqtincha yo'naltirish (brauzerlar kesh qilib olmasligi uchun muhim)
      },
    ]
  },
}

module.exports = nextConfig
